import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Icon from './Icon'
import '../styles/fish.scss'

const Contact = () => {
    const form = useRef();
    const [showPopover, setShowPopover] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false); // New state for button disabled status
    const [buttonText, setButtonText] = useState('Send'); // New state for button text


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsButtonDisabled(true); // Disable the button when the form is submitted

        emailjs.sendForm('service_prhqhog', 'template_yxprl1c', form.current, 'o-xepks5WKT57wXqd')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setShowPopover(true);
                setTimeout(() => setShowPopover(false), 3000); // Hide after 3 seconds
                setButtonText('Email Sent'); 
            }, (error) => {
                setIsButtonDisabled(false);
                setButtonText('Send');
            });
    };



    return (
        <div className='fish-cont'>
            {showPopover && (
                <div className="popover">
                    Email sent! 
                    <Icon name='thumbsup'/>
                </div>
            )}

            <div className='center'>
                <div className="container">
                    <div className="card">
                        <h1 className="card_title">Contact Me</h1>

                        <form ref={form} className="card_form" onSubmit={handleSubmit}>
                            <div className="input">
                                <input
                                    type="text"
                                    id="fullName"
                                    name="from_name"
                                    className="input_field"
                                    autoComplete='name'
                                    required

                                />
                                <label htmlFor="fullName" className="input_label">Full name</label>
                            </div>
                            <div className="input">
                                <input
                                    type="email"
                                    id="email"
                                    className="input_field"
                                    name="from_email"
                                    autoComplete='email'
                                    required


                                />
                                <label htmlFor="email" className="input_label">Email</label>
                            </div>
                            <div className="input">
                                <textarea
                                    rows={6}
                                    id="message"
                                    className="input_field"
                                    autoComplete='off'
                                    name="message"
                                    required
                                />
                                <label htmlFor="message" className="input_label">Message</label>
                            </div>
                            <button className="card_button" type="submit" disabled={isButtonDisabled}>
                    {buttonText}
                </button>
                        </form>


                    </div>
                    <div>
                        <Icon name='fish' />
                    </div>
                </div>

            </div>


        </div>

    )
}

export default Contact