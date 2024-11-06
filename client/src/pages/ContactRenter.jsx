import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/contact.scss";
const ContactRenter = () => {
    const location = useLocation();
    const { renterEmail } = location.state || {}; // Get the renter's email
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contact/send-email', {
                ...formData,
                renterEmail,
            });
            alert('Message sent successfully!');
            navigate('/');
        } catch (error) {
            console.error('Failed to send message', error);
            alert('Failed to send message.');
        }
    };

    return (
        <div className="contact-renter">
            <h2>Contact Renter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactRenter;
