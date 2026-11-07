import React from 'react';
import Header from "../components/header/Header.jsx";
import Specialitymenu from "../components/specialitymenu/Specialitymenu.jsx";
import TomMentors from "../components/topmentors/TomMentors.jsx";
import Banner from "../components/banner/Banner.jsx";

const Home = () => {
    return (
        <div>

            <Header/>
            <Specialitymenu/>
            <TomMentors/>
            <Banner/>

        </div>
    );
};

export default Home;