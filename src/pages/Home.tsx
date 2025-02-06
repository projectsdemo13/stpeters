import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Excellence in Education",
      description: "Comprehensive curriculum focused on academic excellence and personal growth"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Faculty",
      description: "Dedicated teachers committed to nurturing young minds"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Rich Activities",
      description: "Diverse range of extracurricular activities and sports"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure for optimal learning"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80"
            alt="School building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Welcome to St. Peter's<br />Public School
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 max-w-2xl"
            >
              Nurturing minds, building character, and inspiring excellence in education since 1950.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/admissions"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md flex items-center space-x-2 transition-all duration-300 hover:scale-105 transform"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="bg-white hover:bg-gray-100 text-primary-900 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 transform"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-primary-900 mb-4"
            >
              Why Choose St. Peter's?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-primary-700 max-w-2xl mx-auto"
            >
              We provide a nurturing environment where students can grow academically, socially, and personally.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary-900">{feature.title}</h3>
                <p className="text-primary-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-primary-900 mb-4"
            >
              Latest News & Events
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-primary-700 max-w-2xl mx-auto"
            >
              Stay updated with the latest happenings at St. Peter's
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
                title: "Annual Sports Day",
                date: "March 15, 2024",
                description: "Join us for our annual sports day celebration featuring various athletic events and competitions."
              },
              {
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
                title: "Science Fair 2024",
                date: "April 5, 2024",
                description: "Students showcase their innovative science projects and experiments."
              },
              {
                image: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?auto=format&fit=crop&w=800&q=80",
                title: "Art Exhibition",
                date: "April 20, 2024",
                description: "Discover the creative talents of our students at the annual art exhibition."
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-secondary-600 mb-2">{event.date}</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary-900">{event.title}</h3>
                  <p className="text-primary-700 mb-4">{event.description}</p>
                  <Link
                    to="/events"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;