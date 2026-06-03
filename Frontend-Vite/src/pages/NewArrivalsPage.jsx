import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import StarIcon from '@mui/icons-material/Star';

const NewArrivalsPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h1 className="text-3xl font-bold sm:text-4xl mb-4">New Arrivals</h1>
                        <p className="text-indigo-100 max-w-2xl mx-auto">
                            Fresh off the press! Check out the latest additions to our library.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Placeholders for new books */}
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div key={item} className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden relative">
                                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                                <div className="aspect-[3/4] bg-gray-200"></div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 truncate">New Arrival Title {item}</h3>
                                    <p className="text-gray-500 text-sm">Author Name</p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <div className="flex text-yellow-500">
                                            {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ fontSize: 16 }} />)}
                                        </div>
                                    </div>
                                    <a href="/login" className="mt-4 block text-center w-full py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors text-sm">Reserve Now</a>
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

export default NewArrivalsPage;
