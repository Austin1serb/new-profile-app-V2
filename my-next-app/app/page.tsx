/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import useThrottle from "../utilities/useThrottle";
import TopBar from "../components/TopBar";
import dynamic from "next/dynamic";
import Image from "next/image";
import "../styles/index.css";
import ProjectSkeleton from "../skeletons/ProjectSkeleton";
import Project from "../components/Project";
import FooterSkeleton from "../skeletons/FooterSkeleton";
import ContactSkeleton from "../skeletons/ContactSkeleton";
import Popup from "@/components/Popup";
import HireTracker from "@/components/HireTracker";

interface ComponentProps {}

const CanvasDots = dynamic(() => import("../components/CanvasDots"), {
	ssr: false,
	loading: () => (
		<Image
			src={"https://i.imgur.com/ORzQeVw.png"}
			width={1200}
			height={800}
			alt="backgound"
			className="connecting-dots-static"
		/>
	),
});
const About = dynamic(() => import("../components/About"), {
	ssr: true,
	loading: () => <></>,
});
const Footer = dynamic(() => import("../components/Footer"), {
	ssr: true,
	loading: () => <FooterSkeleton />,
});
const Contact = dynamic<ComponentProps>(() => import("../components/Contact"), {
	ssr: true,
	loading: () => <ContactSkeleton />,
});

const Home: React.FC = () => {
	const [screenWidth, setScreenWidth] = useState<number>();
	const [screenHeight, setScreenHeight] = useState<number>();

	const phrases = ["a Software Developer. ", "a Tech Lover. ", "an Artist. ", "an Avid Gamer. ", "a Health Enthusiast. ", " a Self Starter. "];
	const [currentPhrase, setCurrentPhrase] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [typingSpeed, setTypingSpeed] = useState(150);
	const homeRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const [showPopup, setShowPopup] = useState(true); // State to control popup visibility

	useEffect(() => {
		let timer: string | number | NodeJS.Timeout | undefined;
		const current = phrases[loopNum % phrases.length];

		if (isDeleting) {
			setTypingSpeed(70); // Speed up for deleting
			timer = setTimeout(() => {
				setCurrentPhrase(current.substring(0, currentPhrase.length - 1));
			}, typingSpeed);
		} else {
			timer = setTimeout(() => {
				setCurrentPhrase(current.substring(0, currentPhrase.length + 1));
			}, typingSpeed);
		}

		// Check if the phrase is completely typed out
		if (!isDeleting && currentPhrase === current) {
			// Wait for 1 second before starting to delete
			timer = setTimeout(() => {
				setIsDeleting(true);
				setTypingSpeed(150); // Reset speed for typing next phrase
			}, 1000); // 1 second delay before deleting
		} else if (isDeleting && currentPhrase === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
		}

		return () => clearTimeout(timer);
	}, [currentPhrase, isDeleting, loopNum, typingSpeed]);

	// Define the function to handle the resize event
	const handleResize = () => {
		setScreenWidth(window.innerWidth);
		setScreenHeight(window.innerHeight);
	};

	// Use a throttled version of the resize handler
	const throttledResize = useThrottle(handleResize, 200);

	useEffect(() => {
		// Add the resize event listener
		window.addEventListener("resize", throttledResize);

		// Set initial dimensions
		handleResize();

		// Cleanup event listener
		return () => {
			window.removeEventListener("resize", throttledResize);
		};
	}, [throttledResize]);

	const scrollToMyWork = () => {
		const section = document.getElementById("my-work");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPopup(false);
			console.log("sfsfsf");
		}, 5000); // Close after 5 seconds

		return () => clearTimeout(timer);
	}, []);

	const closePopup = () => {
		setShowPopup(false);
	};

	const isMobile = (screenWidth ?? 0) < 800;
	return (
		<div className="main-container">
			<HireTracker />
			{showPopup && <Popup closePopup={closePopup} />}

			<div
				className="top-container"
				ref={homeRef}
			></div>
			<header className="header-container">
				<h1 className="header-index">
					Hello, I'm <span className="name-index">Austin Serb.</span> <br />
					I'm <span className="phrase">{currentPhrase}</span>
					<span className="cursor">|</span>
					<br />
					<div className="center-container">
						<button
							onClick={scrollToMyWork}
							className="btn"
						>
							<svg
								className="btn-outline"
								width="200px"
								height="60px"
								viewBox="0 0 200 60"
							>
								<polyline
									points="199,1 199,59 1,59 1,1 199,1"
									className="bg-line"
								/>
								<polyline
									points="199,1 199,59 1,59 1,1 199,1"
									className="hl-line"
								/>
							</svg>
							<span className="btn-text">
								VIEW MY WORK{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									className="bi bi-arrow-down-circle"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
									/>
								</svg>{" "}
							</span>
						</button>
					</div>
				</h1>
			</header>
			<section className="canvas-container">
				<CanvasDots
					isMobile={isMobile}
					screenHeight={screenHeight}
					screenWidth={screenWidth}
				/>
			</section>
			<div className="separation"></div>
			<main
				id="my-work"
				className="my-work"
			>
				<TopBar
					homeRef={homeRef}
					aboutRef={aboutRef}
					projectsRef={projectsRef}
					contactRef={contactRef}
				/>
				<section
					className="about-section"
					ref={aboutRef}
				>
					<div className="my-work-container">
						<h2 className="about-title">About</h2>
						<div className="about-title-underline"></div>
					</div>

					<About />
				</section>
				<section className="projects">
					<div
						ref={projectsRef}
						className="my-work-container"
					>
						<h2 className="about-title">Projects</h2>
						<div className="about-title-underline"></div>
					</div>

					<div className="projects-container">
						<Suspense fallback={<ProjectSkeleton isEven={1} />}>
							<Project
								projectName="Serbyte Design"
								images={[
									{
										url: "https://i.imgur.com/yiY6qOh.png",
										title: "Serbyte Web Design ",
									},
									{
										url: "https://i.imgur.com/yiY6qOh.png",
										title: "Serbyte Web Design ",
									},
								]}
								projectDetails="
        Developed a Next.js, TypeScript, and Tailwind platform with a focus on speed, scalability, and SEO. Created UI/UX in Figma, leveraging Edge Middleware and SSG for fast delivery. Built an MDX-powered blog for SEO content. Implemented CI/CD pipelines, Playwright testing, and CDN caching for optimized performance."
								liveSiteUrl={"https://www.serbyte.net/"}
								isEven={true}
								githubUrl={null}
							/>
						</Suspense>
						<Suspense fallback={<ProjectSkeleton isEven={2} />}>
							<Project
								projectName="Entitled"
								images={[
									{
										url: "https://i.imgur.com/Hgb6N4a.png",
										title: "Entitled Homepage - Responsive",
									},
									{
										url: "https://i.imgur.com/iurbGLs.png",
										title: "Complete Event Management",
									},
									{
										url: "https://i.imgur.com/HLWRsRf.png",
										title: "Complete Event Management",
									},
									{
										url: "https://i.imgur.com/GYgZMPG.png",
										title: "Complete Event Management",
									},
								]}
								projectDetails="
                Entitled is a comprehensive event management system designed to streamline the process of creating and managing events. Features include a user-friendly interface, event creation, and tracking, and a comprehensive dashboard for management to monitor progress. "
								liveSiteUrl={"https://be-entitled.com"}
								isEven={5 % 2 === 0}
								githubUrl={null}
							/>
						</Suspense>
						<Suspense fallback={<ProjectSkeleton isEven={4} />}>
							<Project
								projectName="Iron & Oak Security"
								images={[
									{
										url: "https://i.imgur.com/AiEaKhu.png",
										title: "Home page - Responsive",
									},
									{
										url: "https://i.imgur.com/P4JzFmG.png",
										title: "Careers Page",
									},
									{
										url: "https://i.imgur.com/IW2E34s.png",
										title: "Media Page",
									},
								]}
								projectDetails="A comprehensive security management system designed to streamline the process of assigning and tracking tasks for security personnel. Features include a user-friendly interface, task assignment, and tracking, and a comprehensive dashboard for management to monitor progress. "
								liveSiteUrl={"https://iao-seattle.vercel.app/"}
								githubUrl={null}
								isEven={2 % 2 === 0}
							/>
						</Suspense>
						<Suspense fallback={<ProjectSkeleton isEven={1} />}>
							<Project
								projectName="Online Store"
								images={[
									{
										url: "https://i.imgur.com/2nVsU7X.gif",
										title: "Home Page & DropDown",
									},
									{
										url: "https://i.imgur.com/ifEoNri.gif",
										title: "Shop Page & CheckOut",
									},
									{
										url: "https://i.imgur.com/TU9jQyI.gif",
										title: "Admin Dashboard",
									},
								]} // Array of image URLs
								projectDetails="Elegantly designed eCommerce site with a user-friendly cart, responsive layout, and seamless user registration. Features a comprehensive Admin Dashboard for complete product and order management."
								liveSiteUrl="https://herbanaturalco.com/"
								githubUrl={null}
								isEven={1 % 2 === 0}
							/>
						</Suspense>

						<Suspense fallback={<ProjectSkeleton isEven={3} />}>
							<Project
								projectName="Car Dealership UI"
								images={[
									// Replace these URLs with actual screenshots of your car dealership project
									{
										url: "https://i.imgur.com/GNfokhN.gif",
										title: "Car Dealership Homepage",
									},
									{
										url: "https://i.imgur.com/os8of7j.gif",
										title: "Inventory Page & Compare View",
									},
									{
										url: "https://i.imgur.com/lfuL0wu.gif",
										title: "Finance Form",
									},
								]}
								projectDetails="This project represents the frontend of a modern Car Dealership website, designed to showcase available vehicles and provide detailed information to potential buyers. Features include a dynamic listing page, detailed vehicle profiles, compare features, and a user-friendly interface to enhance the car buying experience."
								liveSiteUrl="https://east-lake-auto-brokers.vercel.app/"
								githubUrl={null}
								isEven={2 % 2 === 0}
							/>
						</Suspense>
						<Suspense fallback={<ProjectSkeleton isEven={2} />}>
							<Project
								projectName="VS Code Extension"
								images={[
									{
										url: "https://i.imgur.com/Mf9H0sQ.gif",
										title: "Great at algorithms",
									},
									{
										url: "https://i.imgur.com/vd78xiw.png",
										title: "Avaliable on VScode",
									},
									{
										url: "https://i.imgur.com/4kMSbrH.gif",
										title: "Complex Code Generation",
									},
									{
										url: "https://i.imgur.com/4kMSbrH.gif",
										title: "Context Aware",
									},
								]} // Array of image URLs
								projectDetails="This extension revolutionizes your coding experience by introducing context-aware functionality. It intelligently recognizes the programming language you're working in and utilizes your comments to generate optimal code snippets/Full Documents."
								liveSiteUrl="https://marketplace.visualstudio.com/items?itemName=SerbByteDevelopment.gpt-code-generator"
								githubUrl="https://github.com/Austin1serb/GPT-Generator-vsCodeExtension"
								isEven={3 % 2 === 0}
							/>
						</Suspense>
					</div>
				</section>
				<section
					className="about"
					ref={contactRef}
				>
					<div className="my-work-container">
						<h2 className="about-title">Contact</h2>
						<div className="about-title-underline"></div>
					</div>
					<div className="contact-container">
						{/*<ContactForm />*/}
						<Suspense fallback={<ContactSkeleton />}>
							<Contact />
						</Suspense>
					</div>
				</section>
				<Suspense fallback={<></>}>
					<Footer homeRef={homeRef} />
				</Suspense>
			</main>
		</div>
	);
};

export default Home;
