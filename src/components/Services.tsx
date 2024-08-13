import React from 'react';
import { FcBiomass, FcBullish, FcFlashOn, FcPortraitMode, FcGlobe, FcCollaboration } from "react-icons/fc";

export default function Services() {
    const cards = [
        {
            Icon: FcFlashOn,
            title: 'Variety of Question Types',
            content: (
                <ul className='space-y-1 list-disc list-inside text-gray-300'>
                    <li>Multiple-choice</li>
                    <li>True/False</li>
                    <li>Short answer</li>
                    <li>And more...</li>
                </ul>
            ),
        },
        {
            Icon: FcPortraitMode,
            title: 'User-Friendly Interface',
            content: (
                <p className='text-gray-300'>
                    Intuitive and easy-to-navigate design for a seamless user experience.
                </p>
            ),
        },
        {
            Icon: FcBiomass,
            title: 'A Lot of Questions',
            content: (
                <p className='text-gray-300'>
                    Explore over 10,000 questions across 100+ modules, including programming, languages, math, and more.
                </p>
            ),
        },
        {
            Icon: FcBullish,
            title: 'Improve Your Skills',
            content: (
                <p className='text-gray-300'>
                    Enhance your technical skills with our diverse and challenging questions.
                </p>
            ),
        },
        {
            Icon: FcGlobe,
            title: 'Access Anytime, Anywhere',
            content: (
                <p className='text-gray-300'>
                    Take tests from any device, anywhere in the world, at any time.
                </p>
            ),
        },
        {
            Icon: FcCollaboration,
            title: 'Collaborative Learning',
            content: (
                <p className='text-gray-300'>
                    Engage with peers and share knowledge through collaborative tools.
                </p>
            ),
        },
    ];

    return (
        <section className='w-full p-6 bg-gradient-to-br '>
            <h1 className="text-4xl font-bold text-teal-300 text-center mb-12">Explore Our Modules</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {cards.map(({ Icon, title, content }, index) => (
                    <div
                        key={index}
                        className="p-6 bg-gray-800 bg-opacity-60 rounded-xl shadow-2xl text-left text-gray-200"
                        style={{
                            backdropFilter: 'blur(10px)',
                            backgroundImage: 'url("/path/to/mud-texture.jpg")', // Replace with your mud texture image path
                            backgroundSize: 'cover',
                            backgroundBlendMode: 'multiply'
                        }}
                    >
                        <div className='flex items-center justify-center h-16 w-16 mb-4 mx-auto'>
                            <Icon className='w-full h-full text-teal-400' />
                        </div>
                        <h2 className='text-2xl font-semibold text-center mb-4'>{title}</h2>
                        <div className='text-sm text-center'>
                            {content}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
