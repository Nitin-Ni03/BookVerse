import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const CategoriesPage = () => {
    const categories = [
        { name: 'Fiction', count: '10,000+', color: 'bg-blue-100 text-blue-700' },
        { name: 'Non-Fiction', count: '5,000+', color: 'bg-green-100 text-green-700' },
        { name: 'Sci-Fi & Fantasy', count: '3,500+', color: 'bg-purple-100 text-purple-700' },
        { name: 'Mystery', count: '2,800+', color: 'bg-red-100 text-red-700' },
        { name: 'Thrillers', count: '3,200+', color: 'bg-orange-100 text-orange-700' },
        { name: 'Romance', count: '4,100+', color: 'bg-pink-100 text-pink-700' },
        { name: 'History', count: '1,500+', color: 'bg-yellow-100 text-yellow-700' },
        { name: 'Science', count: '1,200+', color: 'bg-cyan-100 text-cyan-700' },
        { name: 'Biographies', count: '2,000+', color: 'bg-teal-100 text-teal-700' },
        { name: 'Children', count: '4,500+', color: 'bg-indigo-100 text-indigo-700' },
        { name: 'Young Adult', count: '3,000+', color: 'bg-violet-100 text-violet-700' },
        { name: 'Self-Help', count: '900+', color: 'bg-rose-100 text-rose-700' },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <div className="bg-gray-50 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl font-bold sm:text-4xl text-gray-900 mb-4">Browse by Genre</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Dive into your favorite subjects or discover something entirely new.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {categories.map((cat) => (
                            <a href={`/books?category=${cat.name}`} key={cat.name} className={`p-6 rounded-xl ${cat.color} bg-opacity-50 hover:bg-opacity-70 transition-all duration-200 transform hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center shadow-sm`}>
                                <div className="mb-3 p-3 bg-white rounded-full bg-opacity-60">
                                    <AutoStoriesIcon fontSize="large" />
                                </div>
                                <h3 className="font-bold text-lg mb-1">{cat.name}</h3>
                                <p className="text-sm opacity-80">{cat.count} Books</p>
                            </a>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CategoriesPage;
