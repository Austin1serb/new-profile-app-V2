
import Link from "next/link";
import Icon from "./Icon";
import "../styles/footer.scss";
const date = new Date().getFullYear()
const Footer = ({ homeRef }) => {
    const scrollToRef = () => {
        if (homeRef.current) {
            window.scrollTo({
                top: homeRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="footer ">
            {/* Scroll to Top Button */}
            <div className="footer-up-icon" onClick={() => scrollToRef(homeRef)} >
                <svg className="footer-svg-up" height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>Scroll to Top</title>
                    <path fill="#fafafa" d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                </svg>
            </div>

            {/* Social Media & Contact Icons */}
            <div className="footer-icons ">
                <div className="footer-icon-container">
                    <a href="https://github.com/Austin1serb" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Icon name="github" className="footer-svg-github" height="55" width="55" />
                    </a>
                </div>
                <div className="footer-icon-container">
                    <a href="https://www.linkedin.com/in/austin-serb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Icon name="linkedin" className="footer-svg" height="70" width="70" />
                    </a>
                </div>
                <div className="footer-icon-container">
                    <a href="mailto:austin.serb@icloud.com" aria-label="Email">
                        <Icon name="email" className="footer-svg-mail" height="70" width="70" />
                    </a>
                </div>
                
            </div>

           

            {/* Copyright Text */}
            <div className="footer-text">
                <p>
                    © {date}{" "}
                    <Link href="https://serbyte.net" target="_blank" rel="noopener noreferrer">
                        Serbyte Development
                    </Link>. All Rights Reserved.
                </p>
            </div>



            <div style={{ width: "100%", backgroundColor: "#1a1a1a", borderTop: "1px solid #333", padding: "10px 0", color: "#b3b3b3", fontSize: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", padding: "0 20px" }}>
                    <Link href="https://serbyte.net" target="_blank" rel="noopener" style={{ color: "#b3b3b3", textDecoration: "none", transition: "color 0.2s" }} aria-label="Visit Serbyte Development">
                        Serbyte Development
                    </Link>
                    <Link href="https://serbyte.net/services" style={{ color: "#b3b3b3", textDecoration: "none", transition: "color 0.2s" }} aria-label="View Serbyte Services">
                        Services
                    </Link>
                    <Link href="https://serbyte.net/projects" style={{ color: "#b3b3b3", textDecoration: "none", transition: "color 0.2s" }} aria-label="View Serbyte Projects">
                        Projects
                    </Link>
                    <Link href="https://serbyte.net/insights" style={{ color: "#b3b3b3", textDecoration: "none", transition: "color 0.2s" }} aria-label="Read Serbyte Blog">
                        Blog
                    </Link>
                    <Link href="https://serbyte.net/contact" style={{ color: "#b3b3b3", textDecoration: "none", transition: "color 0.2s" }} aria-label="Contact Serbyte">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;