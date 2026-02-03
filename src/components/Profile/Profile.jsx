import './Profile.css';
import { FaFileDownload, FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Profile = () => {
    return (
        <div className="profile">
            <div className="info" id="home">
                <div className="profile-name">Hi, I'm <b>Dran</b>!</div>
                <div className="profile-title">Full Stack Developer</div>
                <div className="profile-desc">
                    I'm a learning Full Stack Developer with a passion for creating dynamic and responsive web applications.
                </div>
                <div className="profile-contact">
                    <a href="/resume.pdf" download="Dranoel_Rubio_Flores_Resume.pdf" className="cv-button" 
                        title="Download CV"> View CV <FaFileDownload /> </a>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/dranoelflores" target="_blank" rel="noopener noreferrer"
                            title="LinkedIn"> <FaLinkedinIn /> </a>
                        <a href="https://github.com/itsdran" target="_blank" rel="noopener noreferrer"
                            title="GitHub"> <FaGithub /> </a>
                        <a href="mailto:dranoelflores@gmail.com" 
                            title="Email" > <MdOutlineEmail /> </a>
                    </div>
                </div>

            </div>

            <div className="profile-picture">
                <img src="/profile-pic.png" alt="Profile Picture" oncontextmenu="return false;" />
            </div>
        </div>
    )
}

export default Profile