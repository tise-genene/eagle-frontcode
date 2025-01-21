// src/pages/About.jsx

import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Intro Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-wider mb-4">
            About Eagle Consultancy
          </h1>
        </header>

        {/* Core Values Section */}
        <section className="bg-gray-100 text-gray-800 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description:
                  'We embrace change and strive to create forward-thinking solutions that inspire and empower.',
                icon: '💡',
              },
              {
                title: 'Integrity',
                description:
                  'Honesty and transparency are at the heart of everything we do.',
                icon: '⚖️',
              },
              {
                title: 'Excellence',
                description:
                  'We aim for the highest standards in every project, delivering exceptional results.',
                icon: '🏆',
              },
              {
                title: 'Collaboration',
                description:
                  'We believe in the power of teamwork to overcome challenges and achieve greatness.',
                icon: '🤝',
              },
              {
                title: 'Customer-Centricity',
                description:
                  'Your success is our mission. We align our goals with yours for mutual growth.',
                icon: '💼',
              },
              {
                title: 'Sustainability',
                description:
                  'Committed to practices that benefit future generations and our planet.',
                icon: '🌍',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-5xl">{value.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
