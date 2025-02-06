import React from 'react';
import { motion } from 'framer-motion';
import { Building2, BookOpen, Dumbbell, Microscope, Laptop, Music, Bus, Utensils } from 'lucide-react';

const Infrastructure = () => {
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
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80"
            alt="School Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            World-Class Infrastructure
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="text-xl max-w-2xl"
          >
            State-of-the-art facilities to support holistic education
          </motion.p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Facilities</h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              Modern amenities designed to enhance learning and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Library",
                description: "Extensive collection of books, digital resources, and study areas",
                image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <Microscope className="h-8 w-8" />,
                title: "Science Labs",
                description: "Well-equipped laboratories for physics, chemistry, and biology",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <Laptop className="h-8 w-8" />,
                title: "Computer Lab",
                description: "Modern computer facilities with latest software and internet access",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <Dumbbell className="h-8 w-8" />,
                title: "Sports Complex",
                description: "Indoor and outdoor sports facilities with professional equipment",
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <Music className="h-8 w-8" />,
                title: "Auditorium",
                description: "Multi-purpose hall for cultural events and performances",
                image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Smart Classrooms",
                description: "Technology-enabled classrooms for interactive learning",
                image: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&w=800&q=80"
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-primary-500">{facility.icon}</div>
                    <h3 className="text-xl font-semibold text-primary-900">{facility.title}</h3>
                  </div>
                  <p className="text-primary-700">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Additional Services</h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              Supporting facilities to ensure comfort and convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Bus className="h-6 w-6" />,
                title: "Transportation",
                description: "Safe and comfortable bus service covering major routes",
                features: [
                  "GPS-enabled buses",
                  "Trained drivers and conductors",
                  "Regular maintenance",
                  "Emergency response system"
                ]
              },
              {
                icon: <Utensils className="h-6 w-6" />,
                title: "Cafeteria",
                description: "Hygienic and nutritious meals prepared in modern kitchen",
                features: [
                  "Balanced menu planning",
                  "Fresh ingredients",
                  "Dietary considerations",
                  "Regular health inspections"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900">{service.title}</h3>
                </div>
                <p className="text-primary-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      <span className="text-primary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;