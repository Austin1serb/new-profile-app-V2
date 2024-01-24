import React, { useEffect, useState } from 'react';
import styles from '../styles/TopBar.module.css'
import Throttle from '../utilities/Throttle'; // Import your throttle utility

const TopBar = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            // Define the positions of each section
            const homePosition = homeRef.current.offsetTop;
            const aboutPosition = aboutRef.current.offsetTop;
            const projectsPosition = projectsRef.current.offsetTop;
            const contactPosition = contactRef.current.offsetTop;

            // Determine the active section
            if (scrollPosition >= contactPosition) {
                setActiveSection('contact');
            } else if (scrollPosition >= projectsPosition) {
                setActiveSection('projects');
            } else if (scrollPosition >= aboutPosition) {
                setActiveSection('about');
            } else if (scrollPosition >= homePosition) {
                setActiveSection('home');
            }
        };

        // Wrap the onScroll function with throttle
        const throttledScroll = Throttle(onScroll, 300);

        window.addEventListener('scroll', throttledScroll);
        return () => window.removeEventListener('scroll', throttledScroll);
    }, [homeRef, aboutRef, projectsRef, contactRef]);


    const scrollToRef = (ref) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };
    return (
        <nav className='topBar'>
            <div className='leftLinks'>
                <button onClick={() => scrollToRef(homeRef)}>
                    <span className={`leftLinks-button ${activeSection === 'home' ? 'active' : ''}`}>Home</span>
                </button>
                <button onClick={() => scrollToRef(aboutRef)}>
                    <span className={`leftLinks-button ${activeSection === 'about' ? 'active' : ''}`}>About</span>
                </button>
                <button onClick={() => scrollToRef(projectsRef)}>
                    <span className={`leftLinks-button ${activeSection === 'projects' ? 'active' : ''}`}>Projects</span>
                </button>
                <button onClick={() => scrollToRef(contactRef)}>
                    <span className={`leftLinks-button ${activeSection === 'contact' ? 'active' : ''}`}>Contact</span>
                </button>
            </div>
        </nav>
    );
};

export default TopBar;
