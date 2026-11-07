import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../context/appcontaxt/AppContext.jsx";
import {assets} from "../assets/assets.js";
import RelatedMentors from "../components/relatedmentors/RelatedMentors.jsx";

const Appointment = () => {

    const {docId} = useParams()
    const navigate = useNavigate()
    const {mentors, token, bookSession} = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [mInfo, setMInfo] = useState(null)
    const [mSlots, setMSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const fetchmInfo = async ()=>{
        const mInfo = mentors.find(m=>m.id ===Number(docId))
        setMInfo(mInfo)
    }

    const getAvailableSlots = () => {

        let slots = [];

        // Getting current date
        let today = new Date();

        for (let i = 0; i < 7; i++) {

            let currentDate = new Date(today);

            currentDate.setDate(today.getDate() + i);

            // Setting end time
            let endTime = new Date(currentDate);
            endTime.setHours(21, 0, 0, 0);

            // Setting start time
            if (i === 0) {

                currentDate.setHours(
                    currentDate.getHours() > 10
                        ? currentDate.getHours() + 1
                        : 10
                );

                currentDate.setMinutes(
                    currentDate.getMinutes() > 30 ? 30 : 0
                );

            } else {

                currentDate.setHours(10);
                currentDate.setMinutes(0);

            }

            let timeSlots = [];

            while (currentDate < endTime) {

                let formattedTime = currentDate.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                });

                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                });

                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            if (timeSlots.length > 0) {
                slots.push(timeSlots);
            }
        }

        setMSlots(slots);
    };

    useEffect(() => {
        fetchmInfo()

    }, [mentors,docId]);

    useEffect(() => {
        getAvailableSlots()
    }, []);

    // When the student clicks "Book a session"
    const bookAppointment = () => {
        if (!token) {
            alert('Please login first to book a session')
            navigate('/login')
            return
        }
        if (!slotTime) {
            alert('Please select a time slot')
            return
        }

        const day = mSlots[slotIndex][0].datetime
        const dateText = day.toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})

        const done = bookSession(mInfo.id, dateText, slotTime)
        if (!done) {
            alert('You have already booked this slot')
            return
        }
        navigate('/my-app')
        scrollTo(0, 0)
    }

    // when the mentor changes (related mentors), clear the chosen time
    useEffect(() => {
        setSlotTime('')
        setSlotIndex(0)
    }, [docId]);

    return mInfo && (
        <div>
            {/*    ---------Mentors Details-*/}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={mInfo.image} alt=""/>
                </div>


                <div
                    className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{mInfo.name} <img
                        className='w-4' src={assets.verified_icon} alt=""/></p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                        <p>{mInfo.title} - {mInfo.category}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{mInfo.experience}</button>
                    </div>
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img
                            src={assets.info_icon} alt=""/></p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{mInfo.bio}</p>
                    </div>
                    <p className='text-gray-500 font-medium mt-4'>
                        Rating: <span className='text-gray-800'>{mInfo.rating} / 5</span>
                    </p>
                    <p className='text-gray-500 font-medium mt-1'>
                        Skills: <span className='text-gray-800'>{mInfo.expertise.join(', ')}</span>
                    </p>
                </div>
            </div>

            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {mSlots.length > 0 && mSlots.map((item, index) => (
                        <div
                            onClick={() => setSlotIndex(index)}
                            key={index}
                            className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
                        >
                            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))}
                </div>

                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {mSlots.length > 0 && mSlots[slotIndex].map((item, index) => (
                        <p
                            onClick={() => setSlotTime(item.time)}
                            key={index}
                            className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`}
                        >
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>

                <button
                    onClick={bookAppointment}
                    className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'
                >
                    Book a session
                </button>
            </div>

            <RelatedMentors category={mInfo.category} mId={mInfo.id} />
        </div>
    );
};

export default Appointment;