import React from 'react';
import './Education.css';

const educationData = [
    {
        degree: 'B.Tech',
        field: 'Electronics & Communication',
        institution: 'Visvesvaraya Technological University',
        startDate: '2018',
        endDate: '2022',
        grade: '7.1 CGPA'
    }
];

const volunteerData = [
    {
        position: 'Software Developer Intern',
        organization: 'IEEE - YEEP',
        startDate: 'May 2021',
        endDate: 'Aug 2021',
        summary: 'Developed IoT-based healthcare monitoring systems using Embedded C and Arduino.'
    }
];

const publicationsData = [
    {
        name: 'Remote Healthcare Monitoring System',
        publisher: 'Intl Journal of Advanced Scientific Innovation',
        date: 'Jun 2022',
    },
    {
        name: 'Healthcare Data Collection Systems',
        publisher: 'Book Publication (ISBN:978-93-91535-00-1)',
        date: 'Nov 2021',
    }
];

const Education = () => {
    return (
        <section className="education-section terminal-window">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">academic_registry.json</div>
            </div>

            <div className="terminal-content">
                <div className="education-container">
                    <div>
                        <div className="section-title">Education & Certifications</div>
                        <div className="edu-grid">
                            {educationData.map((edu, i) => (
                                <div key={i} className="edu-card">
                                    <h4>{edu.degree} in {edu.field}</h4>
                                    <div className="edu-meta">{edu.institution}</div>
                                    <div className="edu-sub">{edu.startDate} — {edu.endDate} | Grade: {edu.grade}</div>
                                </div>
                            ))}
                            {volunteerData.map((vol, i) => (
                                <div key={i} className="edu-card">
                                    <h4>{vol.position}</h4>
                                    <div className="edu-meta">{vol.organization}</div>
                                    <div className="edu-sub">{vol.startDate} — {vol.endDate} | {vol.summary}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="section-title">Publications & Research</div>
                        <div className="pub-list">
                            {publicationsData.map((pub, i) => (
                                <div key={i} className="pub-item">
                                    <h4>{pub.name}</h4>
                                    <div className="edu-sub">Published via {pub.publisher} • {pub.date}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

