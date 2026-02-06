import React from 'react';
import Experience from '../Experience/Experience';
import Certification from '../Certification/Certification';
import './Career.css';

const Career = ({ experienceData, certificatesData }) => {
    return (
        <div className="career-container" id="career">
            <div className="career-columns">
                <div className="experience-column">
                    <div className="column-header">
                        <h1>Experience</h1>
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
    );
};

export default Career;