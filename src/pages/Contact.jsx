import React from 'react';
import {useNavigate} from "react-router-dom";
import {assets} from "../assets/assets.js";

const Contact = () => {

    const navigate = useNavigate()

    return (
        <div>

            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
            </div>

            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
                <img className='w-full md:max-w-[360px] rounded-lg' src={assets.contact_image} alt=""/>
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
                    <p className='text-gray-500'>Student Innovation Lab, Main Campus <br/> Mumbai, Maharashtra, India</p>
                    <p className='text-gray-500'>Tel: +123456789 <br/> Email: abc@gmail.com</p>
                    <p className='font-semibold text-lg text-gray-600'>BECOME A MENTOR</p>
                    <p className='text-gray-500'>Share your knowledge with juniors and help them grow.</p>
                    <button onClick={()=>{navigate('/login'); scrollTo(0,0)}}
                            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>
                        Join as Mentor
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Contact;
