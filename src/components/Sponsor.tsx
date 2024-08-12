import React from 'react';
import { motion } from 'framer-motion';

type SponsorProps = {
    logo: string;
    name: string;
    animationDelay: number;
};

export default function Sponsor({ logo, name, animationDelay }: SponsorProps) {
    return (
        <motion.div
            className="p-4 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { delay: animationDelay } }}
        >
            <img src={logo} alt={name} className="w-20 h-20 object-contain" />
        </motion.div>
    );
}
