import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../context/appcontaxt/AppContext.jsx";
import {skillData} from "../assets/assets.js";

const Mentor = () => {

    const {speciality}= useParams()
    const navigate = useNavigate();

    const {mentors} = useContext(AppContext)

    const [filterDoc, setFilterDoc] = useState([])

    const applyFilter = ()=>{
        if(speciality){
            setFilterDoc(mentors.filter(m=>m.category===speciality))
        }
        else {
            setFilterDoc(mentors)
        }
    }

    useEffect(() => {

        applyFilter()

    }, [mentors,speciality]);

    return (
        <div>
            <p className='text-gray-600'>
                Explore mentors across different fields and find the right expert to guide your learning journey

            </p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <div className='flex flex-col gap-4 text-sm text-gray-600'>
                    {/* One filter button for every skill. Click again to remove the filter. */}
                    {
                        skillData.map((item) => (
                            <p key={item.category}
                               onClick={()=> speciality === item.category ? navigate('/mentors') : navigate(`/mentors/${item.category}`)}
                               className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === item.category ? 'bg-indigo-100 text-black' : ''}`}>
                                {item.category}
                            </p>
                        ))
                    }
                </div>
                <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 gap-y-6'>
                    {
                        filterDoc.map((item,index )=>(
                            <div onClick={()=>navigate(`/app/${item.id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                                <img className='bg-blue-50' src={item.image} alt=""/>
                                <div className='p-4'>
                                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                                    </div>
                                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                    <p className='text-gray-600 text-sm'>{item.category}</p>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>



        </div>
    );
};

export default Mentor;