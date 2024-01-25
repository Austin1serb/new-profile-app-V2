import React from 'react';
const ProjectSkeleton = ({ isEven }) => {

    
    const projectContainerClass = !isEven ? "project-container" : "project-container-reverse";
    const projectSliderClass = !isEven ? "project-slider" : "project-slider-reverse";


    return (
        <>
            <style jsx>{`
.skeleton {
 background: #ccc;
 border-radius: 4px;
 animation: pulse 1.5s infinite ease-in-out;
 }

 .project-slider {
 background-color: #282f48dc;
 padding: 30px 50px 50px 20px;
 margin-left: 30px;
 z-index: 2;
 }
 .project-details,.project-details-mobile{
 height:60vh;
 max-height:460px;
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 align-items:center;
 }
 .title-skeleton, .details-skeleton {
 height: 20px;
 width: 80%;
 margin-bottom: 10px;
 }
 .project-details-cont{
 width:
 20vw;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: flex-start;
 }
 .text-skeleton {
 background: #ccc;
 height: 16px;
 width: 100%;
 margin: 8px 0;
 z-index: 2
 }

 .image-skeleton {
 width: 50vw;
 height: 300px;
 }

 .image-img-container {
 height: 100%;
 width: 100%;
 }
 .project-details-mobile{
 position:relative;
 display: flex;
 flex-direction: row;
 transform: translate(80px, -50px);
 z-index: 4;
 }
 @media (max-width: 868px){
 .project-details {
 display: none;
 z-index: 2
 }
 .project-slider {
 padding: 60px;
 z-index: 2
 }
 .image-skeleton {
 width: 65vw;
 height: 300px;
 z-index: 2
}
                }
                

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: .5;
                    }
                }
            `}</style>
            <div className={projectContainerClass}>
                <div className='mobile-project-title'>
                    <div className='title-skeleton skeleton'></div>
                </div>
                <div className={projectSliderClass}>
                    <div className='carousel-inner'>
                        <div className="title-skeleton skeleton"></div>
                        <div className='image-img-container'>
                            <div className='image-skeleton skeleton'></div>
                        </div>
                    </div>
                </div>
                <div className="project-details">
                    <div className='details-skeleton skeleton'></div>
                    <div className='details-skeleton skeleton'></div>
                    <div className='details-skeleton skeleton'></div>
                    <div className='details-skeleton skeleton'></div>
                    <div className='project-details-cont'>
                        <div className='text-skeleton skeleton'></div>
                        <div className='text-skeleton skeleton'></div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default ProjectSkeleton;
