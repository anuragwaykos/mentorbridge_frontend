import React from 'react';
import {assets} from "../../assets/assets.js";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/*    left */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt=""/>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Connect with experienced mentors, gain valuable knowledge,
                        and get personalized guidance to achieve your academic
                        and career goals.</p>

                </div>

                {/*    middle */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li onClick={()=>{navigate('/'); scrollTo(0,0)}} className='cursor-pointer hover:text-black'>Home</li>
                        <li onClick={()=>{navigate('/about'); scrollTo(0,0)}} className='cursor-pointer hover:text-black'>About us</li>
                        <li onClick={()=>{navigate('/contact'); scrollTo(0,0)}} className='cursor-pointer hover:text-black'>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>

                {/*    right */}
                <div>
                    <p className='text-xl font-medium mb-5'>Get in touch</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+123456789</li>
                        <li>abc@gmail.com</li>
                    </ul>

                </div>
            </div>

            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Copyright © 2026 MentorBridge - All Rights Reserved.</p>
            </div>

        </div>
    );
};

export default Footer;