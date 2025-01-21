import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      designation: 'CEO, TechCorp',
      quote:
        'Eagle Tutorials transformed our team\'s skills and productivity. Their tailored approach to education is unparalleled.',
      image: '/assets/images/testimonial1.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Founder, Creative Co.',
      quote:
        'The mentorship and support we received from Eagle Tutorials exceeded our expectations. Highly recommended!',
      image: '/assets/images/testimonial2.jpg',
    },
    {
      name: 'Mark Johnson',
      designation: 'Product Manager, InnovateX',
      quote:
        'Eagle Tutorials provided the tools and guidance needed to tackle real-world challenges effectively.',
      image: '/assets/images/testimonial3.jpg',
    },
  ];

  return (
    <div className="relative py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden">
          <div className="testimonials-container flex animate-carousel hover:animate-none">
            {/* Duplicate testimonials to create infinite scroll effect */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card flex-shrink-0 bg-white shadow-lg rounded-full p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl mx-6"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400"
                />
                <h3 className="text-xl font-semibold text-gray-700">{testimonial.name}</h3>
                <p className="text-sm text-indigo-600 mb-4">{testimonial.designation}</p>
                <p className="text-gray-600">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles for the Carousel */}
      <style jsx>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonials-container {
          display: flex;
          gap: 0;
          animation: carousel 10s linear infinite;
        }

        .testimonials-container:hover {
          animation-play-state: paused; /* Stop movement when hovered */
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 250px; /* Adjust card width */
          border-radius: 9999px;
          padding: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: scale(1.05); /* Slight zoom on hover */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Increased shadow on hover */
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
