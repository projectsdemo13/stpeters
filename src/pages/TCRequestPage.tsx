import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, Loader2, ArrowRight } from 'lucide-react';

const TCRequestPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus('idle');

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          'service_4gpbwi8',
          'template_kxdyreo',
          form.current,
          '4OnEACCR69rG1JSpv'
        );
        console.log(result.text);
        setFormStatus('success');
        form.current.reset();
      } catch (error) {
        console.error(error);
        setFormStatus('error');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/5 to-primary/5 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-secondary p-6">
            <h1 className="text-2xl font-bold text-white text-center">
              Transfer Certificate Request
            </h1>
          </div>
          
          <div className="p-6">
            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-600 rounded-md">
                Request sent successfully! We will process your request shortly.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
                Failed to send request. Please try again or contact support.
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Reason for TC Request
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={3}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary"
                  required 
                />
              </div>

              <div>
                <label htmlFor="adharNumber" className="block text-sm font-medium text-gray-700">
                  Aadhaar Number
                </label>
                <input 
                  type="text" 
                  id="adharNumber" 
                  name="adharNumber"
                  pattern="[0-9]{12}"
                  maxLength={12}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary"
                  placeholder="Enter 12-digit Aadhaar number"
                  required 
                />
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input 
                  type="date" 
                  id="dob" 
                  name="dob"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary"
                  required 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="class" className="block text-sm font-medium text-gray-700">
                    Class
                  </label>
                  <select 
                    id="class" 
                    name="class"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary"
                    required
                  >
                    <option value="" disabled selected>Select Class</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={`Class ${i + 1}`}>Class {i + 1}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="section" className="block text-sm font-medium text-gray-700">
                    Section
                  </label>
                  <select 
                    id="section" 
                    name="section"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary"
                    required
                  >
                    <option value="" disabled selected>Select Section</option>
                    {['A', 'B', 'C', 'D'].map((section) => (
                      <option key={section} value={section}>Section {section}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className={`group w-full flex items-center justify-center py-3 px-4 rounded-md text-white text-sm font-medium
                    relative overflow-hidden transition-all duration-300
                    ${isLoading ? 'bg-secondary-400' : 'bg-secondary-400 hover:bg-secondary-400/90'}`}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    whileHover={{ scale: 1.5, rotate: 15 }}
                  />
                  
                  {isLoading ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center"
                    >
                      <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                      Processing...
                    </motion.div>
                  ) : (
                    <motion.div
                      className="flex items-center"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Request
                      <motion.div
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TCRequestPage;