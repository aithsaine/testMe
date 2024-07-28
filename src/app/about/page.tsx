"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
    return (
        <motion.div
            className="container mx-auto p-8 bg-inherit text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1
                className="text-4xl font-bold mb-6 text-center text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                About Us
            </motion.h1>
            <motion.p
                className="text-lg mb-4 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                Welcome to our online testing platform! Our mission is to provide high-quality, easily accessible online tests
                that help students and professionals alike to gauge their knowledge and improve their skills.
                Our platform offers a variety of multiple-choice questions across different subjects and difficulty levels.
            </motion.p>
            <motion.p
                className="text-lg mb-4 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                Our team is dedicated to continuously updating and expanding our question database to ensure
                that you always have fresh and relevant content to work with. We believe that regular testing
                and practice are key to mastering any subject, and we are here to support you every step of the way.
            </motion.p>
            <motion.p
                className="text-lg text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                Thank you for choosing our platform. If you have any questions or feedback, please don't hesitate
                to reach out to us. Happy learning!
            </motion.p>
        </motion.div>
    );
};

export default AboutUs;
