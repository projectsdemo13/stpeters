import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, FileText, HelpCircle, CheckCircle2, Calendar, Users } from 'lucide-react';

const Admissions = () => {
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
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=2000&q=80"
            alt="Students walking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Join Our Community
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="text-xl max-w-2xl"
          >
            Begin your journey towards excellence at St. Peter's Public School
          </motion.p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Admission Process</h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              A step-by-step guide to joining St. Peter's Public School
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText className="h-6 w-6" />,
                title: "1. Application",
                description: "Fill out the online application form with required details"
              },
              {
                icon: <ClipboardList className="h-6 w-6" />,
                title: "2. Document Submission",
                description: "Submit necessary documents and previous academic records"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "3. Interview",
                description: "Attend student and parent interview with school administration"
              },
              {
                icon: <CheckCircle2 className="h-6 w-6" />,
                title: "4. Confirmation",
                description: "Receive admission confirmation and complete the enrollment process"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-primary-500 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary-900">{step.title}</h3>
                <p className="text-primary-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Required Documents</h2>
              <ul className="space-y-4">
                {[
                  "Completed application form",
                  "Birth certificate",
                  "Previous school records",
                  "Passport size photographs",
                  "Transfer certificate (if applicable)",
                  "Medical records",
                  "Proof of residence"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    {...fadeInUp}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary-500" />
                    <span className="text-primary-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Age Criteria</h2>
              <div className="space-y-4">
                {[
                  { grade: "Pre-Primary", age: "3-4 years" },
                  { grade: "Primary (Grade 1)", age: "5-6 years" },
                  { grade: "Middle School", age: "10-13 years" },
                  { grade: "Secondary", age: "14-15 years" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                  >
                    <span className="font-semibold text-primary-900">{item.grade}</span>
                    <span className="text-primary-700">{item.age}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <HelpCircle className="h-8 w-8 text-primary-500" />
              <h2 className="text-3xl font-bold text-primary-900">Frequently Asked Questions</h2>
            </div>
            <p className="text-lg text-primary-700">
              Find answers to common questions about our admission process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "When do admissions open?",
                answer: "Admissions typically open in January for the academic year starting in April."
              },
              {
                question: "Is there an entrance test?",
                answer: "Yes, we conduct a basic assessment test for grades 2 and above."
              },
              {
                question: "What is the class size?",
                answer: "We maintain a student-teacher ratio of 25:1 to ensure individual attention."
              },
              {
                question: "Are mid-term admissions possible?",
                answer: "Yes, subject to seat availability and meeting admission criteria."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{faq.question}</h3>
                <p className="text-primary-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Need More Information?</h2>
            <p className="text-lg text-primary-700 mb-8">
              Contact our admissions office for any queries or assistance
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors duration-300">
                Contact Admissions
              </button>
              <button className="bg-white text-primary-900 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;