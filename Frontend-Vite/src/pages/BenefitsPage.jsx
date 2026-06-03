import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import RedeemIcon from '@mui/icons-material/Redeem';

const BenefitsPage = () => {
    const benefits = [
        {
            title: 'Unlimited Access',
            description: 'Read as much as you want. Our digital shelves never close, and our physical doors are open 7 days a week.',
            icon: LocalLibraryIcon,
        },
        {
            title: 'Exclusive Events',
            description: 'Get priority access to author signings, reading workshops, and kids storytelling sessions.',
            icon: EventAvailableIcon,
        },
        {
            title: 'Rewards Program',
            description: 'Earn points for every book you read and review. Redeem them for fine waivers or merch.',
            icon: RedeemIcon,
        },
        {
            title: 'Premium Support',
            description: 'Our expert librarians are here to help you research, find rare books, or recommend your next favorite read.',
            icon: VerifiedUserIcon,
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <div className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-indigo-600 font-bold tracking-wide uppercase mb-2">Why Join?</h2>
                            <h1 className="text-3xl font-bold sm:text-5xl text-gray-900 mb-6">More Than Just Books</h1>
                            <p className="text-gray-600 max-w-2xl mx-auto text-xl">
                                Become a member today and unlock a world of knowledge, entertainment, and community.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {benefits.map((benefit) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={benefit.title} className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <Icon />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                            <p className="text-gray-500 text-lg leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-16 text-center">
                            <a href="/register" className="inline-block px-10 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:-translate-y-1">
                                Become a Member
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BenefitsPage;
