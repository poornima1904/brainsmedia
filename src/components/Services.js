import React from 'react';
import './Services.css';

const services = [
    { title: 'Web Development', description: 'High-quality web development services.', icon: '🌐' },
    { title: 'App Development', description: 'Custom mobile app solutions.', icon: '📱' },
    { title: 'Digital Marketing', description: 'Effective digital marketing strategies.', icon: '📈' }
];

const Services = () => {
    return (
        <div className="services" id="services">
            <h2>Our Services</h2>
            <div className="services-list">
                {services.map((service, index) => (
                    <div key={index} className="service">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <button>Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
