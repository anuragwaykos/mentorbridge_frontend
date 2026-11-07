import React, {useContext, useState} from 'react';
import {AppContext} from "../context/appcontaxt/AppContext.jsx";

const MyProfile = () => {

    const {userData, setUserData} = useContext(AppContext)

    const [isEdit, setIsEdit] = useState(false)

    // Update one field of userData, for example update('phone', '999')
    const update = (field, value) => setUserData(prev => ({...prev, [field]: value}))

    return (
        <div className='max-w-lg flex flex-col gap-2 text-sm'>
            <img className='w-36 rounded' src={userData.image} alt=""/>

            {isEdit
                ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text"
                         onChange={(e) => update('name', e.target.value)} value={userData.name}/>
                : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
            }

            <hr className='bg-zinc-400 h-[1px] border-none'/>

            <div>
                <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className='font-medium'>Email id:</p>
                    <p className='text-blue-500'>{userData.email}</p>

                    <p className='font-medium'>Phone:</p>
                    {isEdit
                        ? <input className='bg-gray-100 max-w-52' type="text"
                                 onChange={(e) => update('phone', e.target.value)} value={userData.phone}/>
                        : <p className='text-blue-400'>{userData.phone}</p>}

                    <p className='font-medium'>College:</p>
                    {isEdit
                        ? <input className='bg-gray-100 max-w-52' type="text"
                                 onChange={(e) => update('college', e.target.value)} value={userData.college}/>
                        : <p className='text-gray-500'>{userData.college}</p>}

                    <p className='font-medium'>Year:</p>
                    {isEdit
                        ? <select className='max-w-28 bg-gray-100'
                                  onChange={(e) => update('year', e.target.value)} value={userData.year}>
                            <option value="1st Year">1st Year</option>
                            <option value="2nd Year">2nd Year</option>
                            <option value="3rd Year">3rd Year</option>
                            <option value="Final Year">Final Year</option>
                        </select>
                        : <p className='text-gray-500'>{userData.year}</p>}
                </div>
            </div>

            <div>
                <p className='text-neutral-500 underline mt-3'>LEARNING GOAL</p>
                <div className='mt-3 text-neutral-700'>
                    {isEdit
                        ? <textarea className='bg-gray-100 w-full p-2' rows={3}
                                    onChange={(e) => update('goal', e.target.value)} value={userData.goal}/>
                        : <p className='text-gray-500'>{userData.goal}</p>}
                </div>
            </div>

            <div>
                <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className='font-medium'>Gender:</p>
                    {isEdit
                        ? <select className='max-w-24 bg-gray-100'
                                  onChange={(e) => update('gender', e.target.value)} value={userData.gender}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        : <p className='text-gray-400'>{userData.gender}</p>}

                    <p className='font-medium'>Birthday:</p>
                    {isEdit
                        ? <input className='max-w-32 bg-gray-100' type='date'
                                 onChange={(e) => update('dob', e.target.value)} value={userData.dob}/>
                        : <p className='text-gray-400'>{userData.dob}</p>}
                </div>
            </div>

            <div className='mt-10 mb-10'>
                {isEdit
                    ? <button onClick={() => setIsEdit(false)}
                              className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer'>Save information</button>
                    : <button onClick={() => setIsEdit(true)}
                              className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer'>Edit</button>
                }
            </div>
        </div>
    );
};

export default MyProfile;
