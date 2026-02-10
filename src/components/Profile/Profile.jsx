import { useState, useEffect } from "react";
import { FaFileDownload } from "react-icons/fa";

import SocialLinks from '../SocialLinks/SocialLinks';

import './Profile.css';

const Profile = ({ darkMode }) => {

    const [imgSrc, setImgSrc] = useState("/profile-pic-light.png");

    useEffect(() => {
        const newSrc = darkMode
            ? "/profile-pic-dark.jpg"
            : "/profile-pic-light.png";
        setImgSrc(newSrc);
    }, [darkMode]);

    return (
        <div className="profile" id="home" >
            <div className="info">
                <div className="profile-name">Hi, I'm <b>Dran</b>!</div>
                <div className="profile-title">Full Stack Developer</div>
                <div className="profile-desc">
                    I'm a Full-Stack Developer with a passion for creating dynamic and responsive web applications.
                </div>
                <div className="profile-contact">
                    <a href="/Dranoel_Rubio_Flores_Resume.pdf" download="Dranoel_Rubio_Flores_Resume.pdf" className="cv-button" 
                        title="Download CV"> View CV <FaFileDownload /> </a>
                    <SocialLinks />
                </div>
            </div>

            <div className="profile-picture">
                <img
                    src={imgSrc}
                    alt="Profile"
                    className="profile-img"
                />
            </div>
        </div>
    )
}

export default Profile