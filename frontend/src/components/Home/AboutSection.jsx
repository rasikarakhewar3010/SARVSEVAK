'use client';

import { motion } from 'framer-motion';
import { FiFeather, FiUsers, FiMessageSquare } from 'react-icons/fi';
import { FaHandsHelping } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="relative py-18 px-6 md:px-12 bg-gradient-to-b from-white to-rose-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-16 left-10 w-36 h-36 rounded-full bg-rose-100 blur-3xl"></div>
        <div className="absolute bottom-8 right-12 w-48 h-48 rounded-full bg-[#FF9933]/20 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-[#FF9933]/10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-rose-500 to-[#FF9933] font-serif text-center">
            About Sarvsevak
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#FF9933] to-rose-500 rounded-full mt-4 mb-8"></div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center">
            <span className="font-bold text-[#FF9933]">Sarvsevak</span> is a student-led initiative aiming to promote service,
            human connection, and open conversations. Built with dedication and heart, we use technology to connect citizens and communities.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mt-6">
            Our goal is to empower local action, strengthen community ties, and encourage dialogue — all starting from the grassroots.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: 'Seva (Service)',
              desc: 'Join hands with us in small acts of service that bring real change. We connect volunteers with local causes and student-run drives.',
              color: '#FF9933',
              icon: <FaHandsHelping size={28} />,
              stats: '1,000+ volunteer hours logged'
            },
            {
              title: 'Sambandh (Connection)',
              desc: 'We help students and citizens connect through projects, events, and shared causes, building genuine community bonds.',
              color: '#FB7185', // rose-500
              icon: <FiUsers size={28} />,
              stats: '20+ student communities engaged'
            },
            {
              title: 'Samvaad (Dialogue)',
              desc: 'We encourage meaningful discussions through forums, blogs, and meetups in 10+ Indian languages.',
              color: '#F43F5E', // rose-600
              icon: <FiMessageSquare size={28} />,
              stats: '10+ languages supported'
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              style={{ borderTop: `5px solid ${item.color}` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: `${item.color}20` }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold ml-4" style={{ color: item.color }}>
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{item.desc}</p>
              <p className="text-sm font-medium" style={{ color: item.color }}>
                {item.stats}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-800 mb-6 font-medium">
            Want to contribute and grow with us?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#FF9933] to-rose-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            Join the Sarvsevak Community
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
