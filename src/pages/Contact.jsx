import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl font-extrabold text-center text-white mb-12 tracking-wider">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 text-lg mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-lg mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-lg mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-lg mb-2">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <p className="text-gray-600">
                  <strong>Address:</strong> 123 Eagle St, Addis Ababa, Ethiopia
                </p>
              </li>
              <li>
                <p className="text-gray-600">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@eagleconsultancy.com"
                    className="text-teal-400 hover:text-teal-500 transition-colors duration-300"
                  >
                    info@eagleconsultancy.com
                  </a>
                </p>
              </li>
              <li>
                <p className="text-gray-600">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+251912345678"
                    className="text-teal-400 hover:text-teal-500 transition-colors duration-300"
                  >
                    +251 912 345 678
                  </a>
                </p>
              </li>
            </ul>

            {/* Embedded Map */}
            <div className="mt-6">
              <iframe
                title="Eagle Consultancy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.934210290347!2d39.155980015318575!3d9.012148992529598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b89b2d80c3a85%3A0x42a0c7c47257db2f!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1616426758798!5m2!1sen!2set"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
