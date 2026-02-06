import React from 'react'

import './Career.css'

const Career = () => {
    return (
        <div className="career-container" id="career">
            <div className="career-header">
                <h1>My journey report</h1>
                <p> I've had the opportunity to work on a variety of settings - from small personal projects to internships. 
                    I've gained experience in different areas of software development. Here's the timeline of my journey!</p>
            </div>
            <div className="career-timeline">
                <div className="timeline-item">
                    <h2 className="timeline-date">September 2025 - PRESENT</h2>
                    <div className="position">Aspiring Full Stack Developer</div>
                    <h3 className="role-place">Self-learning</h3>
                    <p>Studied and practiced full stack development using React, Node.js, and MongoDB.</p>
                </div>
                <div className="timeline-item">
                    <h2 className="timeline-date">February - March 2025</h2>
                    <div className="position">Machine Learning/Python Developer Intern</div>
                    <h3 className="role-place">Linoflap Technology Philippines Inc.</h3>
                    <p> Collaborated with a team to integrate ML models into existing applications, enhancing functionality and user experience.
                        Performed and developed Python automation scripts for data preprocessing and analysis, model training, evaluation and optimization to improve accuracy, inference speed, and overall system performance.
                        Assisted in deploying ML models into the production environment through Rest APIs and real-time inference pipelines.
                        Collaborated with cross-functional teams to troubleshoot, debug, and fine-tune machine learning modules for improved system reliability.
                    </p>
                </div>
                <div className="timeline-item">
                    <h2 className="timeline-date">July 2023 - April 2024</h2>
                    <div className="position">Customer Service Associate</div>
                    <h3 className="role-place">Qualfon Manila</h3>
                    <p> While being a student, I also worked as a Customer Service Associate at Qualfon Manila. 
                        In this role, I handled customer inquiries, resolved issues, and provided technical support via phone and email.
                        Communicated and educated users on preventive measures against cybersecurity threats such as identity theft and phishing scams, using data-informed risk assessments to deliver appropriate solutions.
                        This experience helped me develop strong communication skills, problem-solving abilities, and the capacity to work effectively in a fast-paced environment.
                    </p>
                </div>
                <div className="timeline-item">
                    <h2 className="timeline-date">2021 - 2025</h2>
                    <div className="position">Bachelor of Science in Information Technology</div>
                    <h3 className="role-place">Pamantasan ng Lungsod ng Maynila</h3>
                    <p> Studied core information technology topics like database management, data structures, software engineering, and algorithms, and AI.
                        Throughout the course, I worked on various projects like IoT, ML, AI, web applications, database management systems, and mobile applications. 
                        These academic projects helped me develop practical skills in programming, problem-solving, and teamwork.
                        I've developed a strong foundation in IT principles and practices, preparing me for a career in the tech industry.
                    </p>
                </div>
                <div className="timeline-item">
                    <h2 className="timeline-date">2018 - 2020</h2>
                    <div className="position">Information and Communications Technology</div>
                    <p> Studied the core fundamentals of programming, and media technologies. 
                        Gained practical experience through projects and internships, developing skills in problem-solving, teamwork, and communication.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Career