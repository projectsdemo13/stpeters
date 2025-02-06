import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
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
            src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="text-xl max-w-2xl"
          >
            We're here to help and answer any questions you might have
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              {...fadeInUp}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div {...fadeInUp}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <MapPin className="h-6 w-6" />,
                        title: "Address",
                        content: "123 School Street, City Name, State 12345"
                      },
                      {
                        icon: <Phone className="h-6 w-6" />,
                        title: "Phone",
                        content: "(555) 123-4567"
                      },
                      {
                        icon: <Mail className="h-6 w-6" />,
                        title: "Email",
                        content: "info@stpeters.edu"
                      },
                      {
                        icon: <Clock className="h-6 w-6" />,
                        title: "Office Hours",
                        content: "Monday - Friday: 8:00 AM - 4:00 PM"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-primary-500">{item.icon}</div>
                        <div>
                          <h3 className="font-semibold text-primary-900">{item.title}</h3>
                          <p className="text-primary-700">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-900 mb-6">Map Location</h2>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7611.460560678798!2d78.480119!3d17.472619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a7843983845%3A0x276f65e561881eae!2sSt.%20Peter&#39;s%20High%20School!5e0!3m2!1sen!2sin!4v1738831492856!5m2!1sen!2sin" 
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;