import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Calendar, GraduationCap, Palette, Activity } from 'lucide-react';

const Academics = () => {
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
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=2000&q=80"
            alt="Library"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Academic Excellence
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="text-xl max-w-2xl"
          >
            Nurturing minds through comprehensive education and innovative learning
          </motion.p>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Curriculum</h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              A balanced approach to education that focuses on academic excellence, personal growth, and skill development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Primary Section",
                grades: "Grades 1-5",
                description: "Foundation years focusing on core subjects and developmental activities"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Middle Section",
                grades: "Grades 6-8",
                description: "Advanced learning with introduction to specialized subjects"
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Secondary Section",
                grades: "Grades 9-12",
                description: "Comprehensive preparation for board examinations and higher education"
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-primary-500 mb-4">{section.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary-900">{section.title}</h3>
                <div className="text-sm text-secondary-500 mb-3">{section.grades}</div>
                <p className="text-primary-700">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Special Programs</h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              Enriching educational experiences beyond the standard curriculum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="h-6 w-6" />,
                title: "Arts & Crafts",
                description: "Fostering creativity through various art forms"
              },
              {
                icon: <Activity className="h-6 w-6" />,
                title: "Sports Program",
                description: "Comprehensive physical education and sports training"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Leadership Development",
                description: "Building tomorrow's leaders through practical experiences"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900">{program.title}</h3>
                </div>
                <p className="text-primary-700">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Calendar className="h-8 w-8 text-primary-500" />
              <h2 className="text-3xl font-bold text-primary-900">Academic Calendar</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  month: "April",
                  events: [
                    "New Academic Year Begins",
                    "Parent-Teacher Meeting",
                    "Annual Sports Day"
                  ]
                },
                {
                  month: "July",
                  events: [
                    "First Term Examinations",
                    "Science Exhibition",
                    "Independence Day Celebrations"
                  ]
                },
                {
                  month: "December",
                  events: [
                    "Annual Day Celebration",
                    "Winter Break",
                    "Final Term Preparations"
                  ]
                }
              ].map((period, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-white p-6 rounded-lg shadow"
                >
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">{period.month}</h3>
                  <ul className="space-y-2">
                    {period.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        <span className="text-primary-700">{event}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Academics;