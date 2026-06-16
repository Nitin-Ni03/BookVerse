import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';
import PaymentIcon from '@mui/icons-material/Payment';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SecurityIcon from '@mui/icons-material/Security';

const Features = () => {
  const features = [
    {
      icon: SearchIcon,
      title: 'Smart Book Search',
      description: 'Find your perfect book with our advanced search filters. Search by title, author, genre, or ISBN.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: EventIcon,
      title: 'Online Reservation',
      description: 'Reserve books online and pick them up at your convenience. Get instant notifications.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: PaymentIcon,
      title: 'Secure Payments',
      description: 'Integrated payment gateway for membership fees and fines. Multiple payment options available.',
      color: 'text-fuchsia-600',
      bgColor: 'bg-fuchsia-50',
    },
    {
      icon: PeopleIcon,
      title: 'Digital Membership',
      description: 'Manage your membership digitally. Track borrowed books, due dates, and reading history.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: BookmarkIcon,
      title: 'Personal Library',
      description: 'Create your reading lists, save favorites, and get personalized recommendations.',
      color: 'text-violet-600',
      bgColor: 'bg-violet-50',
    },
    {
      icon: SecurityIcon,
      title: 'Secure & Private',
      description: 'Your data is encrypted and secure. We respect your privacy and protect your information.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Key{' '}
            <span className="text-indigo-600">
              Features
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Experience modern library management with features designed for book lovers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl ${feature.bgColor} mb-6`}>
                  <Icon className={feature.color} sx={{ fontSize: 32 }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 text-lg">
            Ready to explore our features?
          </p>
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
