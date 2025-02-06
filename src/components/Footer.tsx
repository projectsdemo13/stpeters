import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-primary-950 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
              >
                <Phone className="h-5 w-5 text-secondary-400" />
                <span>(555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
              >
                <Mail className="h-5 w-5 text-secondary-400" />
                <span>info@stpeters.edu</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
              >
                <MapPin className="h-5 w-5 text-secondary-400" />
                <span>123 School Street, City, State 12345</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Admissions', 'Academics', 'Events', 'Gallery','Infrastructure'].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary-400">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: 'Student Portal', path: '/portal' },
                { name: 'Academic Calendar', path: '/calendar' },
                { name: 'School News', path: '/news' },
                { name: 'Careers', path: '/careers' },
                
                
              ].map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={item.path} className="hover:text-secondary-400">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-secondary-400"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          {...fadeInUp}
          className="border-t border-primary-800 mt-8 pt-8 text-center text-sm"
        >
          <p>&copy; {new Date().getFullYear()} St. Peter's Public School. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;