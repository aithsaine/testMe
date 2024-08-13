"use client"
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-200 py-8 border-t border-gray-700">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-6 md:space-y-4">
                {/* Branding and Copyright */}
                <div className="text-center">
                    <p className="text-xl font-semibold mb-2">
                        Ismail Ait Hsaine
                    </p>
                    <p className="text-sm mb-2">
                        © {new Date().getFullYear()} Ismail Ait Hsaine. All rights reserved.
                    </p>
                    <p className="text-sm">
                        Designed and developed by <span className="font-semibold">Ismail Ait Hsaine</span>
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/ismail-ait-hsaine-557840244" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://github.com/aithsaine" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://x.com/isma3iltatawi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                        <FaTwitter size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
