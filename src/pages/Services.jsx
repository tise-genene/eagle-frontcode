import React from 'react';

const Services = () => {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-indigo-900 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <header className="text-center text-white mb-16">
          <h1 className="text-5xl font-extrabold mb-6 tracking-wide leading-tight">
            Our Exceptional Services
          </h1>
          <p className="text-lg max-w-4xl mx-auto opacity-80">
            At Eagle Consultancy, we offer a diverse range of services designed to propel your business to new heights. Explore our expertise and discover how we can assist you.
          </p>
        </header>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Web Development',
              description: 'Crafting stunning, responsive websites tailored to your unique needs.',
              icon: '🌐',
            },
            {
              title: 'Mobile App Development',
              description: 'Building feature-rich mobile applications for Android and iOS platforms.',
              icon: '📱',
            },
            {
              title: 'Digital Marketing',
              description: 'Driving your online presence through SEO, social media, and more.',
              icon: '📈',
            },
            {
              title: 'Business Consultation',
              description: 'Helping you navigate complex business challenges with expert advice.',
              icon: '💼',
            },
            {
              title: 'Data Analysis',
              description: 'Transforming data into actionable insights for smarter decisions.',
              icon: '📊',
            },
            {
              title: 'IT Support',
              description: 'Providing reliable IT solutions to keep your business running seamlessly.',
              icon: '🖥️',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 duration-500"
            >
              <div className="text-6xl text-teal-500 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
