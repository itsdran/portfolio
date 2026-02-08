import React from 'react'

import './Experience.css'

const Experience = () => {

    const experienceData = [
        {
            date: "September 2025 - PRESENT",
            position: "Full Stack Developer",
            rolePlace: "Self-learning",
            description: "Further developing my full stack development using the MERN Stack, Laverel (PHP), and Django. I am also developing and deploying personal projects to apply my skills and build a portfolio to showcase my work to potential employers."
        },
        {
            date: "September 2025 - PRESENT",
            position: "Data Analyst",
            rolePlace: "Self-learning",
            description: "Studied and practiced data analysis using Python, SQL, and visualization tools like Tableau and Power BI. "
        },
        {
            date: "February - March 2025",
            position: "Machine Learning/Python Developer Intern",
            rolePlace: "Linoflap Technology Philippines Inc.",
            description: "During my internship, I've developed CV and ML models, wrote automation scripts to streamline data processing using Python."
        }, 
        {
            date: "July 2023 - April 2024",
            position: "Customer Service Associate",
            rolePlace: "Qualfon Manila",
            description: "While being a student, I also worked where I provided technical support and assistance to customers, advised how to deal with cybersecurity threats like identity theft and fraud."
        },
        {
            date: "2021 - 2025",
            position: "Bachelor of Science in Information Technology",
            rolePlace: "Pamantasan ng Lungsod ng Maynila",
            description: "Studied core information technology topics like database management, data structures, software engineering, and algorithms, and AI."
        },
        {
            date: "2018 - 2020",
            position: "Information and Communications Technology",
            rolePlace: "Philippine Christian University",
            description: "Studied the core fundamentals of programming, and media technologies."
        }
    ]

    return (
        <div className="experience-container" id="career">
            <div className="experience-timeline">
                {experienceData.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <h2 className="timeline-date">{item.date}</h2>
                        <div className="position">{item.position}</div>
                        <h3 className="role-place">{item.rolePlace}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience