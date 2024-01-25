import React from 'react'
import Icon from './Icon';
import '../styles/footer.scss'


// Use the interface in your Footer component
const Footer = ({ homeRef }) => {
    const scrollToRef = () => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };
    return (
        <footer className='footer'>
            <div className='footer-up-icon' onClick={() => scrollToRef(homeRef)} >
                <svg version="1.1"  className='footer-svg-up' height='50' width='50'  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><title></title><path fill="#fafafa" d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></svg>
            </div>
            <div className='footer-icons'>
                <div  className='footer-icon-container'>
                    <a href="https://github.com/Austin1serb" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Icon name='github' className='footer-svg-github' height='55' width='55' />
                        
                    </a>
                </div>
                <div  className='footer-icon-container'>
                    <a href="https://www.linkedin.com/in/austin-serb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Icon name='linkedin' className='footer-svg' height='70' width='70' />
                    </a>
                </div>
                <div  className='footer-icon-container'>
                    <a href="https://www.facebook.com/austin.serb" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Icon name='facebook' className='footer-svg' height={52} width={52} />
                    </a>
                </div>
                <div className='footer-icon-container'>
                    <a href="mailto:austin.serb@icloud.com" aria-label="Email">
                        <Icon name='email' className='footer-svg-mail' height='70' width='70' />
                    </a>
                </div>
            </div>


            <div className='footer-text'>
                <p>Austin Serb ©2024</p>
            </div>
        </footer>
    )
}

export default Footer