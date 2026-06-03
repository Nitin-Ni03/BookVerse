import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const PublicBooksPage = () => {
    // Placeholder data for books
    const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Classic', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Classic', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800' },
        { id: 3, title: '1984', author: 'George Orwell', category: 'Dystopian', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800' },
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Romance', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800' },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', category: 'Classic', image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800' },
        { id: 6, title: 'Lord of the Rings', author: 'J.R.R. Tolkien', category: 'Fantasy', image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800' },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                {/* Header */}
                <div className="bg-indigo-600 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h1 className="text-3xl font-bold sm:text-4xl mb-4">Browse Our Collection</h1>
                        <p className="text-indigo-100 max-w-2xl mx-auto">
                            Explore thousands of books from our extensive library.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Filters (Visual Only) */}
                    <div className="flex flex-wrap gap-4 mb-8 justify-center">
                        {['All', 'Classics', 'Sci-Fi', 'Romance', 'Mystery', 'History'].map((genre) => (
                            <button key={genre} className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-700 transition-colors">
                                {genre}
                            </button>
                        ))}
                    </div>

                    {/* Books Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {books.map((book) => (
                            <div key={book.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="aspect-[2/3] relative overflow-hidden bg-gray-100">
                                    <img src={book.image} alt={book.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-4">
                                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">{book.category}</span>
                                    <h3 className="text-lg font-bold text-gray-900 mt-1 mb-1 truncate">{book.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{book.author}</p>
                                    <a
                                        href="/login"
                                        className="block w-full text-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
                                    >
                                        Log in to Borrow
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="flex justify-center mt-12 space-x-2">
                        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">Previous</button>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">1</button>
                        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">2</button>
                        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">3</button>
                        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">Next</button>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PublicBooksPage;
