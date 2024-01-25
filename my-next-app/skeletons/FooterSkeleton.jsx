import React from 'react';
import '../styles/footer.scss'; // Reusing your existing SCSS

const FooterSkeleton = () => {
    return (
        <footer className="footer animate-pulse">
            {/* Footer Up Icon Skeleton */}
            <div className='footer-up-icon'>
                <div className='footer-svg-up bg-gray-300-75' style={{ height: '50px', width: '50px', background:'red' }}></div>
            </div>

            {/* Footer Icons Skeleton */}
            <div className='footer-icons'>
                <div>
                    <div className='footer-svg-github bg-gray-300-75' style={{ height: '55px', width: '55px', borderRadius:'50px' }}></div>
                </div>
                <div>
                    <div className='footer-svg bg-gray-300-75' style={{ height: '55px', width: '55px',borderRadius:'50px' }}></div>
                </div>
                <div>
                    <div className='footer-svg bg-gray-300-75' style={{ height: '55px', width: '55px',borderRadius:'50px' }}></div>
                </div>
                <div>
                    <div className='footer-svg-mail bg-gray-300-75' style={{ height: '55px', width: '55px',borderRadius:'50px' }}></div>
                </div>
            </div>

            {/* Footer Text Skeleton */}
            <div className='footer-text'>
                <div className='bg-gray-300-75' style={{ height: '20px', width: '150px' }}></div>
            </div>
        </footer>
    );
};

export default FooterSkeleton;
