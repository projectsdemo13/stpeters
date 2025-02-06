import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const images = [
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      category: "Campus",
      title: "Main Building"
    },
    {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
      category: "Library",
      title: "Study Area"
    },
    {
      url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
      category: "Students",
      title: "Morning Assembly"
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      category: "Events",
      title: "Annual Day"
    },
    {
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      category: "Facilities",
      title: "Science Lab"
    },
    {
      url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
      category: "Sports",
      title: "Basketball Court"
    },
    {
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      category: "Facilities",
      title: "Computer Lab"
    },
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      category: "Events",
      title: "Sports Day"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      category: "Activities",
      title: "Science Exhibition"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80"
            alt="Gallery Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Photo Gallery
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="text-xl max-w-2xl"
          >
            Capturing moments and memories at St. Peter's
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm mb-1">{image.category}</p>
                      <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary-500 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;