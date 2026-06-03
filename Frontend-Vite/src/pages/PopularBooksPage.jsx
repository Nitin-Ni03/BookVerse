import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const PopularBooksPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <div className="bg-gray-900 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <div className="flex items-center justify-center mb-4 text-yellow-400">
                            <TrendingUpIcon fontSize="large" />
                        </div>
                        <h1 className="text-3xl font-bold sm:text-4xl mb-4">Trending Now</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            See what other readers are loving right now.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="space-y-8">
                        {/* Top 3 Featured */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Most Borrowed This Week</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-40">
                                        <div className="w-1/3 bg-gray-200"></div>
                                        <div className="w-2/3 p-4 flex flex-col justify-center">
                                            <span className="text-xs font-bold text-indigo-600 uppercase mb-1"># {item} Trending</span>
                                            <h3 className="font-bold text-gray-900">Bestseller Title {item}</h3>
                                            <p className="text-sm text-gray-500 mb-3">Famous Author</p>
                                            <a href="/login" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">View Details &rarr;</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Time Favorites</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <div key={item} className="text-center group cursor-pointer">
                                        <div className="aspect-[2/3] bg-gray-100 rounded-lg mb-2 group-hover:shadow-lg transition-all duration-300"></div>
                                        <h4 className="font-medium text-gray-900 text-sm truncate">Classic Book {item}</h4>
                                        <p className="text-xs text-gray-500">Author</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PopularBooksPage;
