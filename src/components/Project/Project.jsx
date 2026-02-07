import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiReact, SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiDjango } from 'react-icons/si';
import { TbCloudDataConnection } from "react-icons/tb";

import './Project.css';

const Project = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleShowPreview = (project) => {
        setSelectedProject(project);
        setShowPreview(true);
    };

    const projectsData = [
        {
            image: '/portfolio.png',
            title: 'Personal Portfolio Website',
            description: 'This is my personal project for the sake of showcasing my credentials, skills, work experiences, projects, and certifications.',
            fullDescription: 'This portfolio website is built using React and Tailwind CSS, featuring a clean and modern design. It includes sections for my profile, about me, career history, projects, contact information, and tech stack. The website is fully responsive and optimized for performance.',
            technologies: [
                <SiReact />,
                <SiTailwindcss />
            ],
            liveLink: '/',
            githubLink: 'https://github.com/itsdran/portfolio'
        },
        {
            image: '/job-track.png',
            title: 'JobTrack',
            description: 'Full-stack job tracking application with user authentication and dashboard',
            fullDescription: 'JobTrack is a full-stack MERN web application designed to help users efficiently manage and monitor their job applications throughout the entire hiring lifecycle. I built a RESTful backend using Node.js and Express.js with secure CRUD operations, input validation, and structured error handling, while designing scalable MongoDB schemas to store application details, company data, and status tracking with optimized queries. On the frontend, I developed a responsive React interface using a component-based architecture to deliver an intuitive dashboard for organizing applications, updating statuses, and visualizing progress, enabling users to streamline their job search process.',
            technologies: [
                <SiReact />,
                <SiExpress />,
                <SiTailwindcss />,
                <SiMongodb />,
                <FaNodeJs />],
            liveLink: 'https://job-track-9ban.onrender.com',
            githubLink: 'https://github.com/itsdran/job-track'
        },
        {
            image: '/resumaid.png',
            title: 'ResumAId: AI Resume Analyzer',
            description: 'AI-powered resume analysis tool with personalized feedback',
            fullDescription: 'ResumAInd is a full-stack AI-powered resume analysis platform that allows users to upload resumes and receive automated, job-specific feedback to improve ATS compatibility and keyword alignment. Built with React and TypeScript, the application integrates Puter.js for cloud file storage and persistent data management, enabling secure resume uploads and real-time preview through PDF-to-image rendering. I incorporated AI models to analyze resume content, evaluate formatting, detect missing keywords, and generate contextual recommendations, helping users optimize their resumes and increase their chances of passing applicant tracking systems.',
            technologies: [
                <SiReact />,
                <SiTypescript />,
                <SiTailwindcss />,
                <TbCloudDataConnection />

            ],
            liveLink: 'https://ai-resume-analyzer-osxk.onrender.com',
            githubLink: 'https://github.com/itsdran/ai-resume-analyzer'
        },
        {
            image: '/spotify-history-viewer.png',
            title: 'Spotify History Viewer',
            description: 'View all unique songs you\'ve listened to on Spotify in one place',
            fullDescription: 'Ever forgotten a song but can\'t remember any lyrics, artist name, tune, or even its cover image? But you know you\'ll recognize it once you see it? Well, I made this tool for exactly that problem. This Spotify History Viewer shows all the songs you\'ve listened to in alphabetical order. Hopefully, you\'ll be able to find those songs you have in mind!',
            technologies: [
                <FaHtml5 />,
                <FaCss3Alt />,
                <SiDjango />,
                <SiTailwindcss />
            ],
            liveLink: null,
            githubLink: 'https://github.com/itsdran/spotify-history-viewer'
        }
    ];

    return (
        <>
            <div className="projects-container">
                <div className="career-header">
                    <h1>My small colection of recent projects</h1>
                    <p>     These are my personal projects that aimed to address and/or solve my personal needs. Hope it's helpful!   </p>
                </div>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div 
                            key={index} 
                            className="project-card"
                            onClick={() => handleShowPreview(project)}
                        >
                            <div className="project-image-container">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-overlay">
                                    <span className="view-project">View Project</span>
                                </div>
                            </div>
                            <div className="project-content">
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-description">{project.description}</p>
                                <div className="project-footer">
                                    <div className="project-tech-icons">
                                        {project.technologies.map((Tech, techIndex) => (
                                            <div key={techIndex} className="tech-icon">
                                                {Tech}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="project-links" onClick={(e) => e.stopPropagation()}>
                                        {project.liveLink && (
                                            <a 
                                                href={project.liveLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link live-link"
                                            >
                                                <FiExternalLink /> Live Site
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a 
                                                href={project.githubLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link github-link"
                                            >
                                                <FiGithub /> GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Preview Modal */}
            {showPreview && selectedProject && (
                <div className="project-preview-modal" onClick={() => setShowPreview(false)}>
                    <div className="project-preview-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="project-close-button" 
                            onClick={() => setShowPreview(false)}
                        >
                            <IoMdClose />
                        </button>
                        <div className="preview-image-container">
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title}
                                className="preview-image"
                            />
                        </div>
                        <div className="preview-details">
                            <h2 className="preview-title">{selectedProject.title}</h2>
                            <p className="preview-description">{selectedProject.fullDescription || selectedProject.description}</p>
                            <div className="preview-tech">
                                <h3>Technologies Used:</h3>
                                <div className="preview-tech-icons">
                                    {selectedProject.technologies.map((Tech, techIndex) => (
                                        <div key={techIndex} className="preview-tech-icon">
                                            {Tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="preview-links">
                                {selectedProject.liveLink && (
                                    <a 
                                        href={selectedProject.liveLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="preview-link live-link"
                                    >
                                        <FiExternalLink /> Check Live Site
                                    </a>
                                )}
                                {selectedProject.githubLink && (
                                    <a 
                                        href={selectedProject.githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="preview-link github-link"
                                    >
                                        <FiGithub /> View on GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Project;