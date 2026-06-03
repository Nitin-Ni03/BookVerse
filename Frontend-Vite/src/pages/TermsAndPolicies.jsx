import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { useLocation } from 'react-router-dom';

const TermsAndPolicies = () => {
    const location = useLocation();
    const isPrivacy = location.pathname.includes('privacy');
    const isTerms = location.pathname.includes('terms');

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">
                        {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
                    </h1>

                    <div className="prose prose-indigo max-w-none text-gray-600">
                        <p className="text-lg mb-6">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        {isPrivacy ? (
                            <>
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
                                <p>
                                    We collect information you provide directly to us when you create an account, check out books, or communicate with us. This may include your name, email address, phone number, and reading history.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
                                <p>
                                    We use the information we collect to provide, maintain, and improve our services, including to process transactions, send you notifications about due dates, and personalize your experience.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
                                <p>
                                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                                </p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Aceeptance of Terms</h2>
                                <p>
                                    By accessing or using the BookVerse library system, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. User Responsibilities</h2>
                                <p>
                                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to return borrowed materials by their due dates and pay any applicable fines for late returns or lost items.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Library Rules</h2>
                                <p>
                                    Users must respect library policies regarding loan limits, reservation periods, and the proper care of physical and digital materials. Violation of these rules may result in suspension of borrowing privileges.
                                </p>
                            </>
                        )}

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
                        <p>
                            If you have any questions about these policies, please contact us at <a href="/contact" className="text-indigo-600 hover:text-indigo-500">contact page</a>.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsAndPolicies;
