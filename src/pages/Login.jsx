import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AppContext} from "../context/appcontaxt/AppContext.jsx";

const Login = () => {

    const navigate = useNavigate()
    const {token, setToken, setUserData} = useContext(AppContext)

    // "Sign Up" or "Login"
    const [state, setState] = useState('Sign Up')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // If the user is already logged in, go to the home page
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token]);

    const onSubmitHandler = (event) => {
        event.preventDefault()

        // Dummy login: we only save the details in the browser.
        // Later the backend will check email and password here.
        if (state === 'Sign Up') {
            setUserData(prev => ({...prev, name, email}))
        } else {
            setUserData(prev => ({...prev, email}))
        }
        setToken(true)
        navigate('/')
        scrollTo(0, 0)
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
                <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book a session</p>

                {state === 'Sign Up' &&
                    <div className='w-full'>
                        <p>Full Name</p>
                        <input onChange={(e) => setName(e.target.value)} value={name}
                               className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" required/>
                    </div>
                }

                <div className='w-full'>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email}
                           className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" required/>
                </div>

                <div className='w-full'>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password}
                           className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" minLength={6} required/>
                </div>

                <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base cursor-pointer'>
                    {state === 'Sign Up' ? 'Create account' : 'Login'}
                </button>

                {state === 'Sign Up'
                    ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
                    : <p>Create a new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
                }
            </div>
        </form>
    );
};

export default Login;
