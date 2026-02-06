import React from 'react';

import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPython, 
        FaPhp, FaLaravel, FaNodeJs, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiExpress,  SiDjango, SiTableau, SiVercel, 
        SiRender, SiMysql, SiFirebase, SiMongodb, SiSqlite, SiR } from 'react-icons/si';
import { RiFileExcel2Fill } from "react-icons/ri";
import { BsFileBarGraphFill } from "react-icons/bs";

import './TechStack.css';

const TechStack = () => {
    const techCategories = [
        {
            title: "Frontend Development",
            technologies: [
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "Bootstrap", icon: <FaBootstrap /> },
                { name: "React", icon: <FaReact /> }
            ]
        },
        {
            title: "Backend Development",
            technologies: [
                { name: "Python", icon: <FaPython /> },
                { name: "PHP", icon: <FaPhp /> },
                { name: "Laravel", icon: <FaLaravel /> },
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "Django", icon: <SiDjango /> }
            ]
        },
        {
            title: "Data Analysis",
            technologies: [
                { name: "Python", icon: <FaPython /> },
                { name: "R Programming", icon: <SiR /> },
                { name: "MS Excel", icon: <RiFileExcel2Fill /> },
                { name: "Tableau", icon: <SiTableau /> },
                { name: "Power BI", icon: <BsFileBarGraphFill /> }
            ]
        },
        {
            title: "Cloud & DevOps",
            technologies: [
                { name: "Vercel", icon: <SiVercel /> },
                { name: "Render", icon: <SiRender /> }
            ]
        },
        {
            title: "Tools",
            technologies: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "GitHub", icon: <FaGithub /> },
                { name: "GitHub", icon: <FaGithub /> }
            ]
        },
        {
            title: "Databases & Tools",
            technologies: [
                { name: "MySQL", icon: <SiMysql /> },
                { name: "Firebase", icon: <SiFirebase /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "SQLite", icon: <SiSqlite /> },
            ]
        }
    ];

    return (
        <div className="tech-stack-container">
            <h1 className="tech-stack-title">Tech Stack</h1>
            <div className="tech-stack-content">
                {techCategories.map((category, index) => (
                    <div key={index} className="tech-category">
                        <h3 className="category-title">{category.title}</h3>
                        <div className="tech-grid">
                            {category.technologies.map((tech, techIndex) => (
                                <div key={techIndex} className="tech-item">
                                    <div className="tech-icon">{tech.icon}</div>
                                    <span className="tech-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;