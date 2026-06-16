import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useEffect, useState } from 'react';

const Stats = () => {
  const stats = [
    {
      icon: MenuBookIcon,
      value: 10000,
      suffix: '+',
      label: 'Books Available',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: PeopleIcon,
      value: 5000,
      suffix: '+',
      label: 'Active Members',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: EmojiEventsIcon,
      value: 50,
      suffix: '+',
      label: 'Award Winning',
      color: 'text-fuchsia-600',
      bgColor: 'bg-fuchsia-50',
    },
    {
      icon: TrendingUpIcon,
      value: 98,
      suffix: '%',
      label: 'Satisfaction Rate',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Our Impact in{' '}
            <span className="text-indigo-600">
              Numbers
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Join thousands of satisfied readers who trust BookVerse for their reading journey.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} Icon={stat.icon} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-indigo-100 border-4 border-white flex items-center justify-center text-indigo-600 font-bold text-sm"
                >
                  {i === 4 ? '+' : '👤'}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-slate-900">1,200+</p>
              <p className="text-slate-600">New members joined this month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simplified static StatCard component
const StatCard = ({ stat, Icon, index }) => {
  return (
    <div
      id={`stat-${index}`}
      className="group relative bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Icon */}
      <div className={`inline-flex p-4 rounded-xl ${stat.bgColor} mb-6`}>
        <Icon className={stat.color} sx={{ fontSize: 32 }} />
      </div>

      {/* Value */}
      <div className="mb-2">
        <span className="text-4xl font-bold text-slate-900">
          {stat.value.toLocaleString()}
        </span>
        <span className={`text-4xl font-bold ${stat.color}`}>
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-slate-600 font-medium">{stat.label}</p>
    </div>
  );
};

export default Stats;
