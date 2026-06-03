import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                {/* Hero Section */}
                <div className="bg-indigo-50 py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
                            Empowering Minds, <br />
                            <span className="text-indigo-600">One Book at a Time</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-8">
                            BookVerse is more than just a library management system. We are a community dedicated to the preservation and dissemination of knowledge in the digital age.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="/login"
                                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10 transition-colors duration-200"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                                <div className="prose text-gray-600 text-lg space-y-6">
                                    <p>
                                        Founded in 2024, BookVerse started with a simple idea: make libraries more accessible, efficient, and engaging for everyone.
                                    </p>
                                    <p>
                                        We believe that technology should bridge the gap between traditional reading habits and modern convenience. Our platform streamlines the borrowing process, helps discovers new genres, and fosters a love for reading across all generations.
                                    </p>
                                    <p>
                                        Today, we serve thousands of readers and help manage diverse collections with ease, security, and a touch of magic.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                {/* Placeholder for an image or illustration */}
                                <div className="absolute inset-0 flex items-center justify-center bg-indigo-100">
                                    <MenuBookIcon sx={{ fontSize: 80, color: '#4F46E5' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats / Values Section */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <MenuBookIcon className="text-indigo-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Extensive Collection</h3>
                                <p className="text-gray-600">Access to over 100,000+ distinct titles across various genres.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <PeopleIcon className="text-indigo-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Community First</h3>
                                <p className="text-gray-600">Built for readers, by readers. We value our community's feedback.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <EmojiEventsIcon className="text-indigo-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Award Winning</h3>
                                <p className="text-gray-600">Recognized for excellence in digital library services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
