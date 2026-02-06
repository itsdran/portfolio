import React from 'react'

import './Experience.css'

const Experience = () => {

    const experienceData = [
        {
            date: "September 2025 - PRESENT",
            position: "Aspiring Full Stack Developer",
            rolePlace: "Self-learning",
            description: "Studied and practiced full stack development using React, Node.js, and MongoDB."
        },
        {
            date: "September 2025 - PRESENT",
            position: "Data Analyst",
            rolePlace: "Self-learning",
            description: "Studied and practiced data analysis using Python, SQL, and visualization tools like Tableau and Power BI."
        },
        {
            date: "February - March 2025",
            position: "Machine Learning/Python Developer Intern",
            rolePlace: "Linoflap Technology Philippines Inc.",
            description: "Collaborated with a team to integrate ML models into existing applications, enhancing functionality and user experience. Performed and developed Python automation scripts for data preprocessing and analysis, model training, evaluation and optimization to improve accuracy, inference speed, and overall system performance. Assisted in deploying ML models into the production environment through Rest APIs and real-time inference pipelines. Collaborated with cross-functional teams to troubleshoot, debug, and fine-tune machine learning modules for improved system reliability."
        }, 
        {
            date: "July 2023 - April 2024",
            position: "Customer Service Associate",
            rolePlace: "Qualfon Manila",
            description: "While being a student, I also worked as a Customer Service Associate at Qualfon Manila. In this role, I handled customer inquiries, resolved issues, and provided technical support via phone and email. Communicated and educated users on preventive measures against cybersecurity threats such as identity theft and phishing scams, using data-informed risk assessments to deliver appropriate solutions. This experience helped me develop strong communication skills, problem-solving abilities, and the capacity to work effectively in a fast-paced environment."
        },
        {
            date: "2021 - 2025",
            position: "Bachelor of Science in Information Technology",
            rolePlace: "Pamantasan ng Lungsod ng Maynila",
            description: "Studied core information technology topics like database management, data structures, software engineering, and algorithms, and AI. Throughout the course, I worked on various projects like IoT, ML, AI, web applications, database management systems, and mobile applications. These academic projects helped me develop practical skills in programming, problem-solving, and teamwork. I've developed a strong foundation in IT principles and practices, preparing me for a career in the tech industry."
        },
        {
            date: "2018 - 2020",
            position: "Information and Communications Technology",
            rolePlace: "Philippine Christian University",
            description: "Studied the core fundamentals of programming, and media technologies. Gained practical experience through projects and internships, developing skills in problem-solving, teamwork, and communication."
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