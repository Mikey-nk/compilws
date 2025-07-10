import React, { useState } from "react";
import "../App.css"; // Use your main CSS file

function Contact() {
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${form.firstName}, your message has been sent!`);
        setForm({ firstName: "", lastName: "", email: "", message: "" });
    };

    return (
        <div>
            <div className="contact-hero">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-main">
                <h2>Let’s Start a Conversation</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <p>
                            Interested in working together or have a question? <br />
                            Fill out the form or reach me directly at:<br />
                            <a href="mailto:your.email@example.com">your.email@example.com</a>
                        </p>
                        <p>
                            <strong>Location:</strong> Your City, Country<br />
                            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
                        </p>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-note">Please note: all fields are required.</div>
                        <div className="contact-row">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;