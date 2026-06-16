import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Teacher',
      image: '👩‍🏫',
      rating: 5,
      text: 'BookVerse has transformed the way I discover and access books. The online reservation system is incredibly convenient, and the collection is outstanding!',
      color: 'text-blue-600',
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: '👨‍💻',
      rating: 5,
      text: 'As a busy professional, I love how easy it is to manage my reading list and renewals online. The digital membership feature is a game-changer!',
      color: 'text-purple-600',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Student',
      image: '👩‍🎓',
      rating: 5,
      text: 'The book search feature is amazing! I can quickly find research materials for my studies. The staff recommendations have helped me discover so many great books.',
      color: 'text-pink-600',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            What Our Members{' '}
            <span className="text-indigo-600">
              Say
            </span>
          </h2>
          <p className="text-lg text-slate-605 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our community of passionate readers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 text-indigo-600">
                <FormatQuoteIcon sx={{ fontSize: 64 }} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    sx={{ fontSize: 20, color: '#FBBF24' }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-2xl border border-indigo-100">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white border border-slate-200 rounded-3xl p-12 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Join Our Community of Readers
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Become a member today and start your reading journey with access to thousands of books and exclusive benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-sm hover:shadow-md">
              View Membership Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
