"use client";
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');
        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus(result.message || 'Message sent successfully');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="bg-gray-900 text-white py-16 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
                    <p className="text-lg mb-8">Have any questions or feedback? I'd love to hear from you!</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full pl-3 pr-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent h-32 resize-none"
                                required
                            ></textarea>
                            <FaPaperPlane className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-cyan-500 text-white rounded-md font-semibold hover:bg-cyan-600 transition-all duration-300 ease-in-out flex items-center justify-center"
                            >
                                {loading ? <ImSpinner8 className="animate-spin mr-2" /> : null}
                                Send Message
                            </button>
                        </div>
                        {status && <p className="text-lg mt-4">{status}</p>}
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactMe;
