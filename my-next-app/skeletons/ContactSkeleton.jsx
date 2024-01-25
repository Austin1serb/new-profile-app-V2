import React from 'react';
import '../styles/fish.scss'; // Ensure this includes necessary styles

const ContactSkeleton = () => {
    return (
        <div className='fish-cont animate-pulse' >
            <div className='center'>
                <div className="container" >
                    <div className="card">
                        {/* Title Skeleton */}
                        <h1 className="card_title">
                            <div style={{ backgroundColor: '#ccc', height: '24px', width: '75%', borderRadius: '4px' }}></div>
                        </h1>

                        {/* Form Skeleton */}
                        <div className="card_form">
                            {/* Input Field Skeletons */}
                            <div className="input">
                                <div style={{ backgroundColor: '#ccc', height: '40px', width: '100%', borderRadius: '4px' }}></div>
                            </div>
                            <div className="input">
                                <div style={{ backgroundColor: '#ccc', height: '40px', width: '100%', borderRadius: '4px' }}></div>
                            </div>
                            <div className="input">
                                <div style={{ backgroundColor: '#ccc', height: '96px', width: '100%', borderRadius: '4px' }}></div>
                            </div>

                            {/* Button Skeleton */}
                            <div className="card_button">
                                <div style={{  height: '40px', width: '25%', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    );
};

export default ContactSkeleton;
