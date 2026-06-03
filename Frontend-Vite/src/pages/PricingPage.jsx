import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import CheckIcon from '@mui/icons-material/Check';

const PricingPage = () => {
    const plans = [
        {
            name: 'Basic',
            price: 'Free',
            features: ['Borrow up to 2 books at a time', '14-day loan period', 'Access to general collection', 'Email notifications'],
            button: 'Sign Up Free',
            highlight: false
        },
        {
            name: 'Premium',
            price: '₹499/mo',
            features: ['Borrow up to 10 books at a time', '30-day loan period', 'Access to premium collection', 'Priority reservations', 'No late fees (grace 3 days)'],
            button: 'Get Premium',
            highlight: true
        },
        {
            name: 'Family',
            price: '₹999/mo',
            features: ['Up to 5 member profiles', 'Borrow up to 25 books total', 'Child safety controls', 'Extended 45-day loan period', 'Dedicated support'],
            button: 'Get Family Plan',
            highlight: false
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <div className="bg-indigo-900 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h1 className="text-3xl font-bold sm:text-5xl mb-6">Simple, Transparent Pricing</h1>
                        <p className="text-indigo-200 max-w-2xl mx-auto text-xl">
                            Choose the plan that fits your reading habits. No hidden fees.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan) => (
                            <div key={plan.name} className={`bg-white rounded-2xl shadow-xl overflow-hidden border ${plan.highlight ? 'border-indigo-500 ring-4 ring-indigo-500 ring-opacity-20' : 'border-gray-200'} flex flex-col`}>
                                {plan.highlight && <div className="bg-indigo-600 text-white text-center py-2 text-sm font-bold tracking-wide uppercase">Most Popular</div>}
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline mb-6">
                                        <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start">
                                                <CheckIcon className="text-green-500 mr-3 flex-shrink-0" fontSize="small" />
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 bg-gray-50 pt-0 border-t border-gray-100 mt-auto">
                                    <a href="/register" className={`block w-full text-center py-3 rounded-lg font-bold transition-colors mt-8 ${plan.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'}`}>
                                        {plan.button}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PricingPage;
