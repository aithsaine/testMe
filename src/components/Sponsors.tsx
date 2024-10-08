import React from 'react';
import { motion } from 'framer-motion';

export default function Sponsors() {
    const sponsors = [
        { name: 'Ibn zohr', logo: 'https://www.uiz.ac.ma/sites/default/files/logo_0.png' },
        { name: 'OFPPT', logo: 'https://www.ofppt.ma/themes/custom/ofppt/assets/images/logo.png' }, // Add OFPPT here
        { name: 'enssup', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Coat_of_arms_of_Morocco.svg/125px-Coat_of_arms_of_Morocco.svg.png' },
        { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
        { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
        { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
        { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },

    ];

    return (
        <div className="w-full overflow-hidden my-10  py-6">
            <h1 className="text-3xl text-teal-300 text-center mb-8">Our Sponsors</h1>
            <motion.div
                className="flex space-x-8"
                initial={{ x: '100%' }}
                animate={{ x: '-100%' }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            >

                {sponsors.map((sponsor, index) => (
                    <div
                        key={`${index}-duplicate`}
                        className="flex flex-col items-center justify-center text-white p-4 rounded-lg mx-14 shadow-lg transform hover:scale-105 transition-transform duration-300"
                        style={{ width: '200px' }}
                    >
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            title={sponsor.name}
                            className="h-24 w-auto object-contain mb-2"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
