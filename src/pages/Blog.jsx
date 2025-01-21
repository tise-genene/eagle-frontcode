import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: '5 Tips for Growing Your Business Online',
      snippet:
        'Discover effective strategies to expand your online presence and reach your target audience...',
      image: '/assets/images/blog1.jpg',
      date: 'January 10, 2025',
      link: '/blog/5-tips-growing-business',
    },
    {
      title: 'The Importance of Data-Driven Decision Making',
      snippet:
        'Learn how leveraging data can drive smarter business decisions and improve performance...',
      image: '/assets/images/blog2.jpg',
      date: 'January 15, 2025',
      link: '/blog/data-driven-decisions',
    },
    {
      title: 'Top Web Development Trends in 2025',
      snippet:
        'Stay ahead of the curve by exploring the latest trends and technologies shaping the web development world...',
      image: '/assets/images/blog3.jpg',
      date: 'January 20, 2025',
      link: '/blog/web-development-trends',
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12 tracking-wider">
          Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-500"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-72 object-cover object-center transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                  <p className="text-sm text-white">{post.date}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 leading-tight mb-4">{post.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{post.snippet}</p>
                <a
                  href={post.link}
                  className="inline-block text-lg font-medium text-yellow-400 hover:text-yellow-500 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
