import React from 'react';
import {skillData} from "../../assets/assets.js";
import {Link} from "react-router-dom";

const Specialitymenu = () => {
    return (
        <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
            <h1 className='text-3xl font-medium'>Find By Skill</h1>
            <p className='sm:w-1/3 text-center text-sm'>Discover experienced mentors, explore their expertise, and book personalized sessions to accelerate your learning and achieve your career goals.</p>
            <div className='flex sm:justify-center gap-8 pt-5 w-full overflow-scroll'>
                {
                    skillData.map((item,index)=>(
                        <Link key={index} onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 '
                              to={`/mentors/${item.category}`}>
                            <img className='w-18 sm:w-24 mb-2' src={item.image} alt=""/>
                            <p>{item.category}</p>

                        </Link>
                    ))
                }

            </div>
            
        </div>
    );
};

export default Specialitymenu;