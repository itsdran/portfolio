import React from 'react';
import Experience from '../Experience/Experience';
import Certification from '../Certification/Certification';
import './Career.css';

const Career = ({ experienceData, certificatesData }) => {
    return (
        <>
            <div className="career-header">
                <h1>My journey report</h1>
                <p>     I've had the opportunity to work on a variety of settings - from small personal projects to internships. 
                        I've gained experience in different areas of software development. Here's the timeline of my journey!</p>
            </div>
            <div className="career-container" id="career">
                <div className="career-columns">
                    <div className="experience-column">
                        <div className="column-header">
                            <h1>Professional Journey</h1>
                        </div>
                        <Experience experienceData={experienceData} />
                    </div>
                    <div className="certifications-column">
                        <div className="column-header">
                            <h1>Certifications</h1>
                        </div>
                        <Certification certificatesData={certificatesData} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Career;