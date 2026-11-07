import {createContext, useEffect, useState} from "react";
import {assets, mentors} from "../../assets/assets.js";

export const AppContext = createContext()

// Small helper: read saved data from the browser (so refresh does not log you out)
const loadSaved = (key, fallback) => {
    try {
        const saved = localStorage.getItem(key)
        return saved ? JSON.parse(saved) : fallback
    } catch {
        return fallback
    }
}

const AppContextProvider = (props)=>{

    // true = logged in, false = logged out (dummy login for now, backend later)
    const [token, setToken] = useState(() => loadSaved('mb_token', false))

    // Details of the logged in student (shown in My Profile)
    const [userData, setUserData] = useState(() => loadSaved('mb_user', {
        name: 'Rahul Patil',
        image: assets.profile_pic,
        email: 'rahul@gmail.com',
        phone: '+91 98765 43210',
        college: 'Your College Name',
        year: '2nd Year',
        goal: 'I want to prepare for Java technical interviews.',
        gender: 'Male',
        dob: '2005-01-20',
    }))

    // Sessions booked by the student
    const [bookings, setBookings] = useState(() => loadSaved('mb_bookings', []))

    // Save to the browser every time these values change
    useEffect(() => { localStorage.setItem('mb_token', JSON.stringify(token)) }, [token])
    useEffect(() => { localStorage.setItem('mb_user', JSON.stringify(userData)) }, [userData])
    useEffect(() => { localStorage.setItem('mb_bookings', JSON.stringify(bookings)) }, [bookings])

    // Add a new session. Returns false if the same slot is already booked.
    const bookSession = (mentorId, date, time) => {
        const alreadyBooked = bookings.some(
            b => b.mentorId === mentorId && b.date === date && b.time === time && b.status === 'Upcoming'
        )
        if (alreadyBooked) return false

        setBookings(prev => [...prev, {id: Date.now(), mentorId, date, time, status: 'Upcoming'}])
        return true
    }

    const cancelSession = (id) => {
        setBookings(prev => prev.map(b => b.id === id ? {...b, status: 'Cancelled'} : b))
    }

    const logout = () => setToken(false)

    const value= {
        mentors,
        token, setToken,
        userData, setUserData,
        bookings, bookSession, cancelSession,
        logout
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
