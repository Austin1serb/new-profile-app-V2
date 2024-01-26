import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import '../styles/project.css'

const Project = ({ projectName, images, projectDetails, liveSiteUrl, githubUrl, isEven }) => {
    const projectContainerClass = !isEven ? "project-container" : "project-container-reverse";
    const projectSliderClass = !isEven ? "project-slider" : "project-slider-reverse";

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const isVideo = (url) => {
        return /\.(mp4|webm)$/.test(url);
    };
    
    return (
        <div className={projectContainerClass}>
            {/* ... other parts of your component ... */}
            <div className={projectSliderClass}>
                <Slider {...settings}>
                    {images.map((item, index) => (
                        <div key={item.title} className='carousel-inner'>
                            <div className="image-title"> <span> {item.title} </span> </div>
                            <div className='image-img-container' >
                                {isVideo(item.url) ? (
                                    <video
                                        className='carousel-img'
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        height={359}
                                        width={500}
                                        loading='lazy'
                                    >
                                        <source src={item.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Image
                                        src={item.url}
                                        alt={`${item.title}`}
                                        height={359}
                                        width={500}
                                        className='carousel-img'
                                        loading='lazy'
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* ... other parts of your component ... */}
        </div>
    );
};

export default Project;
