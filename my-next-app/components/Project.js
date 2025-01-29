import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import '../styles/project.css'
import Link from 'next/link';

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

    return (
        <div className={projectContainerClass}>
            <div className='mobile-project-title'>
                <h3 className='text-outline text-outline-hover' data-text={projectName}>
                    <Link aria-label={`Link to website: ${projectName}`} data-text='Live Site' href={liveSiteUrl} target="_blank" rel="noopener ">  {projectName}</Link>
                </h3>
            </div>
            <div className={projectSliderClass}>
                <Slider {...settings}>
                    {images.map((item, index) => (
                        <Link
                            href={liveSiteUrl}
                            title={projectName}
                            aria-label={`Link to website: ${projectName}`}
                            key={item.title + index} className='carousel-inner'>
                            <div className="image-title"> <span> {item.title} </span> </div>
                            <div className='image-img-container' >
                                <Image
                                    src={item.url}
                                    alt={`Website ${item.title}`}
                                    height={359}
                                    width={500}
                                    className='carousel-img'
                                    loading='lazy'
                                    quality={100}
                                />
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>

            <div className="project-details">
                <Link aria-label={`Link to website: ${projectName}`} data-text='Live Site' href={liveSiteUrl} target="_blank" rel="noopener ">
                    <h3 className='text-outline text-outline-hover' data-text={projectName}>
                        {projectName}

                    </h3>
                </Link>
                <div className='project-details-cont'>
                    <span>
                        {projectDetails}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {liveSiteUrl ?
                            (
                                <Link aria-label={`Link to website: ${projectName}`} className='text-outline text-outline-hover' data-text='Live Site' href={liveSiteUrl} target="_blank" rel="noopener ">Live Site </Link>


                            ) : null}
                        {githubUrl && (
                            <>
                                <Link aria-label={`Learn more about ${projectName}`} className='text-outline text-outline-hover' data-text='Learn More' href={githubUrl} target="_blank" rel="noopener ">Learn More</Link>
                            </>
                        )}
                    </div>
                </div>

            </div>
            <div className='project-details-mobile'>
                {liveSiteUrl ?
                    (<>

                        <span>  🌐 </span>
                        <a className='text-outline text-outline-hover' data-text='Live Site' href={liveSiteUrl} target="_blank" rel="noopener ">Live Site </a>

                    </>
                    ) : null}
                {githubUrl && (
                    <>
                        <span> 🔍 </span>
                        <a className='text-outline text-outline-hover' data-text='Learn More' href={githubUrl} target="_blank" rel="noopener ">Learn More</a>
                    </>
                )}
            </div>
        </div>
    );
};

export default Project;
