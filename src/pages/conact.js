import React, { useState } from "react";
function Contact() {
    const [form, setForm] = useState({ name: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks ${form.name}, we received your message.`);
        setForm({ name: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name-input">Name:</label>
                <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="message-input">Message:</label>
                <textarea
                    id="message-input"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">Send</button>
        </form>
    );
}
export default Contact;
