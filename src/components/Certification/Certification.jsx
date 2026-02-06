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
            title: "Google Data Analytics Certificate",
            source: "Google",
            file: "/certificates/google-data-analytics-certificate.pdf"
        },
        {
            title: "IBM Data Science Professional Certificate",
            source: "IBM",
            file: "/certificates/ibm-data-science-professional-certificate.pdf"
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