import React from 'react';
import {assets} from "../../assets/assets.js";

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-8 md:px-0 lg:px-20'>

            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[8vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book a Session With  <br/>
                    Trusted Mentors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28 ' src={assets.group_profiles} alt=""/>
                    <p>"Explore experienced mentors, discover the right guidance for your goals, <br/>
                        and book your mentorship sessions effortlessly."</p>
                </div>
                <a href="#speciality" className='flex items-center gap-2 bg-white px-3 rounded-full text-gray-600 text-sm m-auto md:m-2 hover:scale-105 transition-all duration-300'>
                    Book a session <img className='w-3' src={assets.arrow_icon} alt=""/>
                </a>
            </div>

            <div className='md:w-1/2 relative '>
                <img className='w-full md:absolute bottom-5 h-auto rounded-lg' src={assets.header_img} alt=""/>
            </div>
            
        </div>
    );
};

export default Header;