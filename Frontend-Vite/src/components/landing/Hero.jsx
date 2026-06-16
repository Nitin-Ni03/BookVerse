import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              <span>Welcome to BookVerse</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Your Gateway to{' '}
              <span className="text-indigo-600">
                Endless Knowledge
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl">
              Discover, reserve, and enjoy thousands of books from our extensive collection.
              Join our community of readers and experience seamless library management.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/books"
                className="group inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>Explore Books</span>
                <ArrowForwardIcon className="ml-2 group-hover:translate-x-1 transition-transform" sx={{ fontSize: 20 }} />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-sm"
              >
                <MenuBookIcon className="mr-2 text-slate-500" sx={{ fontSize: 20 }} />
                <span>Login</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span>10,000+ Books</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span>5,000+ Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span>24/7 Access</span>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration/Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Subtle decorative background circle */}
              <div className="absolute inset-0 bg-indigo-50 rounded-3xl transform rotate-3 scale-105 blur-sm"></div>

              {/* Main container */}
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
                <div className="space-y-6">
                  {/* Mock search bar */}
                  <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-400 flex-shrink-0"></div>
                    <div className="h-4 bg-slate-200 rounded w-40"></div>
                  </div>
                  
                  {/* Mock book rows */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-slate-50/50 rounded-xl border border-slate-100">
                      <div className="w-10 h-14 bg-indigo-100 rounded-md flex-shrink-0"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-slate-300 rounded w-3/4"></div>
                        <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                      </div>
                      <div className="h-6 px-2.5 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full flex items-center">Available</div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-slate-50/50 rounded-xl border border-slate-100">
                      <div className="w-10 h-14 bg-pink-100 rounded-md flex-shrink-0"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-slate-300 rounded w-2/3"></div>
                        <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                      </div>
                      <div className="h-6 px-2.5 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full flex items-center">Reserved</div>
                    </div>
                  </div>

                  {/* Clean static badge */}
                  <div className="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-xl text-sm font-semibold text-center border border-indigo-100">
                    📚 Discover 10k+ Volumes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
