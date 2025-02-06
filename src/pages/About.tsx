import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Target, Heart } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80"
            alt="School building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About St. Peter's
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="text-xl max-w-2xl"
          >
            Building tomorrow's leaders through excellence in education
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              {...fadeInUp}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-primary-500" />
                <h2 className="text-3xl font-bold text-primary-900">Our Vision</h2>
              </div>
              <p className="text-primary-700 text-lg">
                To be a center of excellence in education that nurtures young minds, fosters creativity, 
                and builds character while preparing students for the challenges of tomorrow.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Heart className="h-8 w-8 text-primary-500" />
                <h2 className="text-3xl font-bold text-primary-900">Our Mission</h2>
              </div>
              <p className="text-primary-700 text-lg">
                To provide quality education in a nurturing environment that promotes academic excellence, 
                personal growth, and social responsibility while upholding our core values.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              These principles guide everything we do at St. Peter's Public School
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Academic Excellence",
                description: "Pursuing the highest standards of academic achievement"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Character Development",
                description: "Building strong moral and ethical foundations"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Inclusive Environment",
                description: "Fostering diversity and mutual respect"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Innovation",
                description: "Embracing new ideas and methods in education"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary-500 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary-900">{value.title}</h3>
                <p className="text-primary-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Our History</h2>
              <p className="text-lg text-primary-700">
                Founded in 1950, St. Peter's Public School has been a beacon of educational excellence 
                for over seven decades. What started as a small institution has grown into one of the 
                most respected educational establishments in the region.
              </p>
              <p className="text-lg text-primary-700">
                Through the years, we have maintained our commitment to providing quality education 
                while adapting to changing times and embracing modern educational practices.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="Historic school building"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;