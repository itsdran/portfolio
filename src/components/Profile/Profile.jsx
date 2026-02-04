import './Profile.css';
import { FaFileDownload } from "react-icons/fa";

import SocialLinks from '../SocialLinks/SocialLinks';

const Profile = () => {
    return (
        <div className="profile" id="home" >
            <div className="info">
                <div className="profile-name">Hi, I'm <b>Dran</b>!</div>
                <div className="profile-title">Full Stack Developer</div>
                <div className="profile-desc">
                    I'm a learning Full Stack Developer with a passion for creating dynamic and responsive web applications.
                </div>
                <div className="profile-contact">
                    <a href="/resume.pdf" download="Dranoel_Rubio_Flores_Resume.pdf" className="cv-button" 
                        title="Download CV"> View CV <FaFileDownload /> </a>
                    <SocialLinks />
                </div>

            </div>

            <div className="profile-picture">
                <img src="/profile-pic.png" alt="Profile Picture"/>
            </div>
        </div>
    )
}

export default Profile