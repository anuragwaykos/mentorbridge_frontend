import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {AppContext} from "../context/appcontaxt/AppContext.jsx";

// "My Sessions" page: shows every session booked by the student
const MyApp = () => {

    const navigate = useNavigate()
    const {mentors, bookings, cancelSession} = useContext(AppContext)

    return (
        <div>
            <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My sessions</p>

            {bookings.length === 0 && (
                <div className='flex flex-col items-center gap-4 py-16 text-gray-500'>
                    <p>You have not booked any session yet.</p>
                    <button onClick={() => {navigate('/mentors'); scrollTo(0, 0)}}
                            className='bg-primary text-white px-10 py-3 rounded-full text-sm cursor-pointer hover:scale-105 transition-all'>
                        Find a mentor
                    </button>
                </div>
            )}

            <div>
                {bookings.map((b) => {
                    // find the mentor of this booking
                    const item = mentors.find(m => m.id === b.mentorId)
                    if (!item) return null

                    return (
                        <div key={b.id} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
                            <div>
                                <img className='w-32 bg-indigo-50 rounded' src={item.image} alt=""/>
                            </div>
                            <div className='flex-1 text-sm text-zinc-600'>
                                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                                <p>{item.category}</p>
                                <p className='text-zinc-700 font-medium mt-1'>About:</p>
                                <p className='text-xs'>{item.title}</p>
                                <p className='text-xs mt-1'>
                                    <span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {b.date} | {b.time}
                                </p>
                            </div>
                            <div></div>
                            <div className='flex flex-col gap-2 justify-end'>
                                {b.status === 'Upcoming' && <>
                                    <button className='text-sm text-green-600 text-center sm:min-w-48 py-2 border border-green-500 rounded cursor-default'>
                                        Upcoming session
                                    </button>
                                    <button onClick={() => cancelSession(b.id)}
                                            className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer'>
                                        Cancel session
                                    </button>
                                </>}
                                {b.status === 'Cancelled' &&
                                    <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500 cursor-default'>
                                        Session cancelled
                                    </button>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MyApp;
