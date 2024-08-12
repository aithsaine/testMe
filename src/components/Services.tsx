import React, { useEffect, useRef, useState } from 'react';
import { FcBiomass, FcBullish, FcFlashOn, FcPortraitMode } from "react-icons/fc";
import { motion, useAnimation } from "framer-motion";

export default function Services() {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    const cardCount = 4;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };

        handleResize();
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
                            transition: { delay: index * 0.3 }
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
        }, 3000);

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
                <ul className='space-y-1 list-disc list-inside text-gray-300'>
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
                    There are more than 10,000 questions in more than 100 modules such as Arabic, French, programming, PHP, Python, science, math, and more.
                </p>
            ),
        },
        {
            Icon: FcBullish,
            title: 'Improve Your Skills',
            content: (
                <p className='text-gray-300'>
                    Here with us, we can help you improve your technical skills and be better than you are now.
                </p>
            ),
        },
    ];

    return (
        <section className='w-full p-6 bg-gradient-to-b from-gray-900 to-black'>
            <h1 className="text-3xl text-teal-300 text-center mb-8">Explore Our Modules</h1>
            <div ref={ref} className='relative w-full overflow-hidden'>
                <div className='flex items-center justify-between p-4'>
                    <button
                        onClick={handlePrev}
                        className='text-teal-300 hover:text-teal-500 transition-colors duration-300'
                    >
                        &lt;
                    </button>
                    <div className='relative h-full flex-1 flex overflow-hidden'>
                        <div className='flex h-full transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(currentIndex * 100) / visibleCards}%)` }}>
                            {cards.map(({ Icon, title, content }, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={controls}
                                    className="flex-none h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg text-left text-gray-200 mx-2"
                                    style={{ backdropFilter: "blur(20px)" }}
                                >
                                    <div className='relative flex items-center justify-center h-16 w-16 mb-4 mx-auto'>
                                        <Icon className='w-full h-full text-teal-400' />
                                    </div>
                                    <h2 className='text-lg font-semibold text-center mb-2'>{title}</h2>
                                    <div className='text-sm text-center'>
                                        {content}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={handleNext}
                        className='text-teal-300 hover:text-teal-500 transition-colors duration-300'
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}
