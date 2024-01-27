import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import '../styles/project.css'

const Project = ({ projectName, images, projectDetails, liveSiteUrl, githubUrl,isEven }) => {


    const projectContainerClass = !isEven ? "project-container" : "project-container-reverse";
    const projectSliderClass = !isEven ? "project-slider" : "project-slider-reverse";

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    return (
        <div className={projectContainerClass}>
            <div className='mobile-project-title'>
                <h3 className='text-outline text-outline-hover' data-text={projectName}>{projectName}</h3>
            </div>
            <div className={projectSliderClass}>
                <Slider {...settings}>
                    {images.map((item, index) => (
                        <div key={item.title} className='carousel-inner'>
                            <div className="image-title"> <span> {item.title} </span> </div>
                            <div className='image-img-container' >
                                <Image
                                    src={item.url}
                                    alt={`Website ${item.title}`}
                                    height={359}
                                    width={500}
                                    className='carousel-img'
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="project-details">
                <h3 className='text-outline text-outline-hover' data-text={projectName}>{projectName}</h3>
                <div className='project-details-cont'>
                    <span>
                        {projectDetails}
                    </span>
                    <div>
                    {liveSiteUrl ?
                    (
                        <a aria-label={`Link to website: ${projectName}`} className='text-outline text-outline-hover' data-text='Live Site' href={liveSiteUrl} target="_blank" rel="noopener noreferrer">Live Site </a>
              
                
                    ) : null}
                    <a aria-label={`Learn more about ${projectName}`} className='text-outline text-outline-hover' data-text='Learn More' href={githubUrl} targetlear="_blank" rel="noopener noreferrer">Learn More</a>
                    </div>
                </div>

            </div>
            <div className='project-details-mobile'>
                {liveSiteUrl ?
                    (<>
                        <a className='text-outline text-outline-hover' data-text='Live Site' href={liveSiteUrl} target="_blank" rel="noopener noreferrer">Live Site </a>
                        <span> | </span>
                    </>
                    ) : null}
                <a className='text-outline text-outline-hover' data-text='Learn More' href={githubUrl} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
        </div>
    );
};

export default Project;
