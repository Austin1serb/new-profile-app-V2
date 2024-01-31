import React from 'react'
import profilePicture from '../assets/profile.jpg';
import Image from 'next/image';
import '../styles/index.css'
import Icon from '../components/Icon'

const About = () => {

    return (
        <div className='about-container' >
            <div className='profile-picture-container'>
                <div className="profile-picture">
                    <div className="profile-box" >
                        <div className="profile-box-color">

                            <div className="profile-picture-image">
                                <Image
                                    src={profilePicture}
                                    alt="Profile"
                                    height={367} width={320}
                                    className='profile-color'
                                    placeholder="blur"
                                    blurDataURL="https://i.imgur.com/Vd9UEt7.jpg"
                                />
                            </div>
                        </div>
                        <div className="profile-picture-image">
                            <Image
                                src={profilePicture}
                                alt="Profile"
                                height={367} width={320}
                                className='profile-gray'
                                placeholder="blur"
                                blurDataURL="https://i.imgur.com/Vd9UEt7.jpg"
                            />
                        </div>
                    </div>
                </div>
                <div className='profile-description'>
                    <div ></div>
                    <h2 >
                    My name is Austin Serb, and I&apos;m a full-stack developer with a unique blend of artistic vision, technical expertise, and a knack for solving complex problems. My journey in web development is driven by a passion for creative problem-solving and a commitment to building visually appealing and functionally robust websites with fully efficient backends.

</h2>
                </div>
            </div>
            <div className="skills-section">
                <h3>Languages</h3>
                <div className="skills-grid">
                    {/* HTML */}
                    <div className="skill-icon">
                        <div className='skill-title' >HTML</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='html' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='html' height={50} width={50} />
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="skill-icon">
                        <div className='skill-title'>CSS</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='css' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='css' height={50} width={50} />
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div className="skill-icon">
                        <div className='skill-title'>JAVASCRIPT</div >
                        <div>
                            <div className="box">
                                <div className="box-color">
                                    <Icon height='40' width='40' className='color' name='javascript' />
                                </div>
                                <Icon height='40' width='40' className='gray' name='javascript' />
                            </div>
                        </div>
                    </div>
                    {/* TypeScript */}
                    <div className="skill-icon">
                        <div className='skill-title'>TYPESCRIPT</div >
                        <div>
                            <div className="box" style={{ transform: 'translateY(-5px)' }}>
                                <div className="box-color">
                                    <Icon height='45' width='45' className='color' name='typescript' />
                                </div>
                                <Icon height='45' width='45' className='gray' name='typescript' />
                            </div>
                        </div>
                    </div>

                    {/* PYTHON */}
                    <div className="skill-icon">
                        <div className='skill-title'>PYTHON</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='python' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='python' height={50} width={50} />
                        </div>
                    </div>

                    {/* JAVA */}
                    <div className="skill-icon">
                        <div className='skill-title'>JAVA</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='java' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='java' height={50} width={50} />
                        </div>
                    </div>
                </div>

                {/* Databases */}
                <h3>Databases</h3>
                <div className="skills-grid">
                    {/* MONGODB */}
                    <div className="skill-icon">
                        <div className='skill-title'>MONGODB</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='mongodb' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='mongodb' height={50} width={50} />
                        </div>
                    </div>

                    {/* MYSQL */}
                    <div className="skill-icon">
                        <div className='skill-title'>MYSQL</div >
                        <div className="box" >
                            <div className="box-color">
                                <Icon className='color' name='mysql' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='mysql' height={50} width={50} />
                        </div>
                    </div>
                    {/* MYSQL */}
                    <div className="skill-icon">
                        <div className='skill-title'>POSTGRESQL</div >
                        <div className="box" style={{ transform: 'translateX(-5px)' }}>
                            <div className="box-color">
                                <Icon className='color' name='postgresql' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='postgresql' height={50} width={50} />
                        </div>
                    </div>

                    {/* ...other databases... */}
                </div>

                {/* Libraries & Frameworks */}
                <h3>Libraries & Frameworks</h3>
                <div className="skills-grid">
                    {/* REACT */}
                    <div className="skill-icon">
                        <div className='skill-title'>REACT</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='react' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='react' height={50} width={50} />
                        </div>
                    </div>

                    {/* Express.js */}
                    <div className="skill-icon">
                        <div className='skill-title'>Express.js</div >
                        <div className="box">

                            <Icon className='gray' name='express' height={50} width={50} />
                        </div>
                    </div>

                    {/* NEXT.js */}
                    <div className="skill-icon" >
                        <div className='skill-title'>NEXT.js</div >
                        <div className="box">
                            <Icon className='next-icon' name='next' height={50} width={50} />
                        </div>
                    </div>

                    {/* NODE.js */}
                    <div className="skill-icon">
                        <div className='skill-title'>NODE.js</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='node' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='node' height={50} width={50} />
                        </div>
                    </div>

                    {/* GIT */}
                    <div className="skill-icon">
                        <div className='skill-title'>GIT</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='git' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='git' height={50} width={50} />
                        </div>
                    </div>
                    {/* MATERIAL UI */}
                    <div className="skill-icon">
                        <div className='skill-title' >MATERIAL UI</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='mui' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='mui' height={50} width={50} />
                        </div>
                    </div>
                    {/*GOOGLE API*/}
                    <div className="skill-icon">
                        <div className='skill-title' >GOOGLE API</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='googleapi' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='googleapi' height={50} width={50} />
                        </div>
                    </div>
                    {/*CLOUDINARY API*/}
                    <div className="skill-icon">
                        <div className='skill-title' >CLOUDINARY</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='cloudinary' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='cloudinary' height={50} width={50} />
                        </div>
                    </div>

                    {/* AWS EC2 */}
                    <div className="skill-icon">
                        <div className='skill-title'>AWS EC2</div >
                        <div className="box">
                            <div className="box-color">
                                <Icon className='color' name='aws' height={50} width={50} />
                            </div>
                            <Icon className='gray' name='aws' height={50} width={50} />
                        </div>
                    </div>
                    {/* Vercel */}
                    <div className="skill-icon">
                        <div className='skill-title'>VERCEL</div >
                        <div className="box">

                            <Icon className='gray' name='vercel' height={50} width={50} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About