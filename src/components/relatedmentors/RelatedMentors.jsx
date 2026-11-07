import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../context/appcontaxt/AppContext.jsx";

// Shows other mentors of the same category (used at the bottom of the booking page)
const RelatedMentors = ({category, mId}) => {

    const navigate = useNavigate()
    const {mentors} = useContext(AppContext)

    const [related, setRelated] = useState([])

    useEffect(() => {
        if (mentors.length > 0 && category) {
            setRelated(mentors.filter(m => m.category === category && m.id !== mId))
        }
    }, [mentors, category, mId]);

    if (related.length === 0) return null

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900'>
            <h1 className='text-3xl font-medium'>Related Mentors</h1>
            <p className='sm:w-1/3 text-center text-sm'>Other mentors who can guide you in {category}.</p>
            <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {related.map((item, index) => (
                    <div onClick={() => {navigate(`/app/${item.id}`); scrollTo(0, 0)}}
                         className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                         key={index}>
                        <img className='bg-blue-50' src={item.image} alt=""/>
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedMentors;
