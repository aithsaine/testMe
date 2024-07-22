"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FcBiomass, FcBullish, FcFlashOn, FcPortraitMode } from "react-icons/fc";
import { motion, useAnimation } from "framer-motion";


export default function Services() {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3); // Default to 3 visible cards

    const cardCount = 4; // Number of cards

    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(window.innerWidth < 640 ? 1 : 3);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start((index) => ({
                            opacity: 1,
                            y: 0,
                            transition: { delay: index * 0.5 }
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (cardCount - visibleCards + 1));
        }, 2000); // Change card every 5 seconds

        return () => clearInterval(interval);
    }, [cardCount, visibleCards]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (cardCount - visibleCards + 1)) % (cardCount - visibleCards + 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (cardCount - visibleCards + 1));
    };

    const cards = [
        {
            Icon: FcFlashOn,
            title: 'Variety of Question Types',
            content: (
                <ul className='space-y-1 list-disc list-inside text-gray-200'>
                    <li>multiple-choice</li>
                    <li>true/false</li>
                    <li>short answer</li>
                    <li>and more...</li>
                </ul>
            ),
        },
        {
            Icon: FcPortraitMode,
            title: 'User-Friendly Interface',
            content: (
                <p className='text-gray-200'>
                    Intuitive and easy-to-navigate design for a seamless user experience.
                </p>
            ),
        },
        {
            Icon: FcBiomass,
            title: 'A Lot of Questions',
            content: (
                <p className='text-gray-200'>
                    There are more than 10,000 questions in more than 100 modules such as Arabic, French, programming, PHP, Python, science, math, and more.
                </p>
            ),
        },
        {
            Icon: FcBullish,
            title: 'Improve Your Skills',
            content: (
                <p className='text-gray-200'>
                    Here with us, we can help you improve your technical skills and be better than you are now.
                </p>
            ),
        },
    ];

    return (
        <section className='w-full p-6'>
            <h1 className="text-xl text-teal-300">What available modules?</h1>
            <div ref={ref} className='relative w-full overflow-hidden'>
                <div style={{ height: "300px" }} className='flex items-center justify-between p-4'>
                    <button
                        onClick={handlePrev}
                        style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}
                        className='h-full rounded text-white p-6 text-center font-bold text-4xl z-10'
                    >
                        {'<'}
                    </button>
                    <div className='relative h-full flex-1 flex overflow-hidden'>
                        <div className='flex h-full transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(currentIndex * 100) / visibleCards}%)` }}>
                            {cards.map(({ Icon, title, content }, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={controls}
                                    className="flex-none h-full w-full md:w-1/3 p-2 font-bold text-left text-slate-200  rounded mx-2"
                                    style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}
                                >
                                    <Icon className='w-full opacity-10 -z-40 absolute h-full inline-block' />
                                    <h1 className='text-center uppercase py-4'>{title}</h1>
                                    <div className='space-y-1 list-disc list-inside text-gray-200'>
                                        {content}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={handleNext}
                        style={{ backdropFilter: "blur(60px)", boxShadow: "0px 0px 10px rgba(227,228,237,0.37)", border: "2px solid rgba(255,255,255,0.18)" }}
                        className='h-full rounded text-white p-6 text-center font-bold text-4xl z-10'
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </section>
    );
}
