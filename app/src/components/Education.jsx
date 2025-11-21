import React from 'react';
import './Education.css';

const educationData = [
    {
        degree: 'Bachelor',
        field: 'Electronics and Communication Engineering',
        institution: 'Visvesvaraya Technological University',
        startDate: '2018',
        endDate: '2022',
        grade: '7.1'
    }
];

const volunteerData = [
    {
        position: 'Software Developer Intern',
        organization: 'IEEE - Young Engineers Entrepreneurship Program',
        startDate: '5/1/2021',
        endDate: '8/1/2021',
        summary: 'Led development of an IoT-based Remote Healthcare Monitoring System for real-time tracking of patient vitals.',
        highlights: [
            'Built sensor interfacing using Arduino IDE and embedded C'
        ]
    }
];

const publicationsData = [
    {
        name: 'Remote Healthcare Monitoring System',
        publisher: 'International Journal of Advanced Scientific Innovation',
        date: '1 Jun 2022',
        summary: 'IoT-based system for monitoring patient vitals, enabling remote real-time healthcare.'
    },
    {
        name: 'Remote Healthcare Monitoring System',
        publisher: 'Book Publication (ISBN:978-93-91535-00-1)',
        date: '1 Nov 2021',
        summary: 'Published in a book describing physiological data collection for healthcare.'
    }
];

const Education = () => {
    return (
        <section className="education-section terminal-window slide-in-up">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">credentials.json</div>
            </div>

            <div className="terminal-content">
                <div className="command-line">
                    <span className="prompt">mritunjay@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="command"> cat ~/education/credentials.json | jq '.'</span>
                </div>

                {/* Education */}
                <div className="json-section">
                    <div className="json-line">
                        <span className="text-yellow">"education"</span>
                        <span className="text-white">: [</span>
                    </div>
                    {educationData.map((edu, index) => (
                        <div key={index} className="json-object">
                            <div className="json-line indent-1">{'{'}</div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"degree"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{edu.degree} in {edu.field}"</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"institution"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{edu.institution}"</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"period"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{edu.startDate} - {edu.endDate}"</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"grade"</span>
                                <span className="text-white">: </span>
                                <span className="text-purple">{edu.grade}</span>
                            </div>
                            <div className="json-line indent-1">{'}'}</div>
                        </div>
                    ))}
                    <div className="json-line">
                        <span className="text-white">],</span>
                    </div>
                </div>

                {/* Volunteer */}
                <div className="json-section">
                    <div className="json-line">
                        <span className="text-yellow">"volunteer_experience"</span>
                        <span className="text-white">: [</span>
                    </div>
                    {volunteerData.map((vol, index) => (
                        <div key={index} className="json-object">
                            <div className="json-line indent-1">{'{'}</div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"position"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{vol.position}"</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"organization"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{vol.organization}"</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"period"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{vol.startDate} - {vol.endDate}"</span>
                            </div>
                            <div className="json-line indent-1">{'}'}</div>
                        </div>
                    ))}
                    <div className="json-line">
                        <span className="text-white">],</span>
                    </div>
                </div>

                {/* Publications */}
                <div className="json-section">
                    <div className="json-line">
                        <span className="text-yellow">"publications"</span>
                        <span className="text-white">: [</span>
                    </div>
                    {publicationsData.map((pub, index) => (
                        <div key={index} className="json-object">
                            <div className="json-line indent-1">{'{'}</div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"title"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{pub.name}"</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"publisher"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{pub.publisher}"</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"date"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{pub.date}"</span>
                            </div>
                            <div className="json-line indent-1">
                                {'}'}
                                {index < publicationsData.length - 1 ? ',' : ''}
                            </div>
                        </div>
                    ))}
                    <div className="json-line">
                        <span className="text-white">]</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
