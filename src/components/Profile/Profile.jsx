import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className="info" id="home">
                <div className="profile-name">Dranoel Flores</div>
                <div className="profile-title">Full Stack Developer</div>
                <div className="profile-desc">
                    Hi, I'm <b>Dran</b>! I'm a learning Full Stack Developer with a passion for creating dynamic and responsive web applications.
                </div>
            </div>

            <div className="profile-picture">
                <img src="/profile-pic.png" alt="Profile Picture" />
            </div>
        </div>
    )
}

export default Profile