import React, { useState } from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { FiDownload, FiEye } from 'react-icons/fi';
import './Certification.css';

const Certification = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const handleShowPreview = (cert) => {
        setSelectedCertificate(cert);
        setShowPreview(true);
    };

    const handleDownload = (file) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const certificatesData = [
        {
            title: "Google Data Analytics Professional Certificate",
            source: "Google",
            file: "/certificates/Google_Data_Analytics.pdf"
        },
        {
            title: "Harnessing Python for Data Analysis Insights into Development and Best Practices",
            source: "West Visayas State University",
            file: "/certificates/WVSU_Data_Analysis.pdf"
        },
        {
            title: "Data Analysis with Python: A Comprehensive Guide to Data Analysis and Visualization",
            source: "IBM",
            file: "/certificates/IBM_Data_Analysis_with_Python.pdf"
        },
        {
            title: "Data Visualization with Python",
            source: "IBM",
            file: "/certificates/IBM_Data_Visualization_with_Python.pdf"
        },
        {
            title: "Python 101 for Data Science",
            source: "IBM",
            file: "/certificates/IBM_Data_Science_with_Python.pdf"
        },
        {
            title: "Machine Learning with Python",
            source: "IBM",
            file: "/certificates/IBM_Machine_Learning_with_Python.pdf"
        },
        {
            title: "Prompt Engineering for Everyone",
            source: "IBM",
            file: "/certificates/IBM_Prompt_Engineering.pdf"
        },
        {
            title: "GitHub Copilot : Your Ultimate Tool for Accelerometing Developer Productivity",
            source: "IBM",
            file: "/certificates/Styava_GitHub_Copilot.pdf"
        },
        {
            title: "Blueprints of Innovation: Understanding Software Engineering and System Architecture",
            source: "Crack & Stack",
            file: "/certificates/C&T_Software_Engineering.pdf"
        }
    ];

    return (
        <>
            <div className="certification-container">
                <div className="certificates-list">
                    {certificatesData.map((cert, index) => (
                        <div key={index} className="certificate-card">
                            <div className="certificate-icon">
                                <HiShieldCheck />
                            </div>
                            <div className="certificate-content">
                                <h2 className="certificate-title">{cert.title}</h2>
                                <h3 className="certificate-source">{cert.source}</h3>
                                <div className="certificate-actions">
                                    <button 
                                        className="preview-button" 
                                        onClick={() => handleShowPreview(cert)}
                                    >
                                        <FiEye /> Show Preview
                                    </button>
                                    <button 
                                        className="download-button" 
                                        onClick={() => handleDownload(cert.file)}
                                    >
                                        <FiDownload /> Download PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Preview Modal */}
            {showPreview && selectedCertificate && (
                <div className="preview-modal" onClick={() => setShowPreview(false)}>
                    <div className="preview-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="close-button" 
                            onClick={() => setShowPreview(false)}
                        >
                            <IoMdClose />
                        </button>
                        <iframe 
                            src={selectedCertificate.file} 
                            title={selectedCertificate.title}
                            className="pdf-preview"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Certification;