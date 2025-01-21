import React, { useState } from "react";

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How to book a tutor?",
      answer:
        "To book a tutor, simply browse available tutors, select one that fits your needs, and click the 'Book Now' button to schedule a session.",
    },
    {
      question: "How does payment work?",
      answer:
        "Payments are processed securely through our platform. You can pay using credit/debit cards or other supported methods after booking your session.",
    },
    {
      question: "Can I switch tutors?",
      answer:
        "Yes, you can switch tutors at any time. Just browse for another tutor and book a session with them.",
    },
    {
      question: "How are tutors vetted?",
      answer:
        "All tutors undergo a thorough vetting process, including background checks and qualifications verification, to ensure quality and safety.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-teal-600 to-indigo-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-12">Frequently Asked Questions</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 shadow-lg rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-lg font-semibold transition-all duration-300 hover:text-indigo-500"
              >
                <span className="flex-1 text-left">{faq.question}</span>
                <span className="text-indigo-500 text-2xl">{activeIndex === index ? "−" : "+"}</span>
              </button>

              {activeIndex === index && (
                <div className="mt-4 text-gray-700 text-base transition-all duration-500 ease-in-out opacity-100 max-h-screen">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .faq-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .faq-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15);
        }

        .faq-card button {
          transition: all 0.3s ease;
        }

        .faq-card button:hover {
          color: #4c6ef5;
        }

        .faq-card .answer {
          opacity: 0;
          max-height: 0;
          transition: all 0.3s ease;
        }

        .faq-card.open .answer {
          opacity: 1;
          max-height: 500px;
        }
      `}</style>
    </section>
  );
};

export default FAQsSection;
