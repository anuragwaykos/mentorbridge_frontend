import React from 'react';
import {assets} from "../assets/assets.js";

const About = () => {
    return (
        <div>

            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px] rounded-lg' src={assets.about_image} alt=""/>
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                    <p>Welcome to MentorBridge, a place where students find the right guidance. Many students do not know whom to ask for help with programming, projects or placements. MentorBridge connects them with experienced seniors and mentors in one simple platform.</p>
                    <p>With MentorBridge you can discover mentors by skill, check their profiles, choose a free time slot and book a one-to-one session. After the session you can keep track of everything in one place, instead of searching through WhatsApp groups.</p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>Our vision is to build a friendly learning community inside every college, where seniors help juniors grow, and every student can get personal guidance exactly when they need it.</p>
                </div>
            </div>

            <div className='text-xl my-4'>
                <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
            </div>

            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>EASY BOOKING:</b>
                    <p>Pick a mentor, choose a free slot and book your session in a few clicks.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>TRUSTED MENTORS:</b>
                    <p>Learn from experienced seniors and professionals with proven skills.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>PERSONAL GUIDANCE:</b>
                    <p>One-to-one sessions made for your goals, whether it is Java, web, AI or interviews.</p>
                </div>
            </div>

        </div>
    );
};

export default About;
