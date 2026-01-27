import React from 'react'
import HeroText from '../Components/HeroText/HeroText.jsx'
import JoinUsButton from '../Components/HeroText/JoinUsButton.jsx'
import EventsSectionContainer from '../Components/EventsSection/EventsSectionContainer.jsx'
import AboutUs from '@/Components/AboutUs/AboutUs.jsx'
import MembersPanel from '@/Components/memberspanel/memberspanel.jsx'
function Home() {
    return (
        <>
            <HeroSection />
            <EventsSectionContainer />
            <MembersPanel />
            <AboutUs />
        </>
    );
}

export default Home;
