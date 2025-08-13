"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock success/error
    setSubmitStatus('success');
    setIsSubmitting(false);

    // Reset form on success
    if (submitStatus === 'success') {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
      
      // Auto-hide success message
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={inputVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full bg-transparent border-b-2 py-4 px-1 text-lg focus:outline-none transition-colors duration-300 ${
                    errors.fullName ? 'border-red-400' : 'border-gray-300 focus:border-[#C2A770]'
                  }`}
                  placeholder="Full Name"
                />
                {errors.fullName && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute -bottom-6 left-0 text-sm text-red-400"
                  >
                    {errors.fullName}
                  </motion.p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={inputVariants}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full bg-transparent border-b-2 py-4 px-1 text-lg focus:outline-none transition-colors duration-300 ${
                    errors.email ? 'border-red-400' : 'border-gray-300 focus:border-[#C2A770]'
                  }`}
                  placeholder="Email Address"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute -bottom-6 left-0 text-sm text-red-400"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={inputVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-gray-300 py-4 px-1 text-lg focus:outline-none focus:border-[#C2A770] transition-colors duration-300"
                  placeholder="Phone Number"
                />
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={inputVariants}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full bg-transparent border-b-2 resize-none py-4 px-1 text-lg focus:outline-none transition-colors duration-300 ${
                    errors.message ? 'border-red-400' : 'border-gray-300 focus:border-[#C2A770]'
                  }`}
                  placeholder="Tell us your story"
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute -bottom-6 left-0 text-sm text-red-400"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={inputVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-medium text-white bg-[#C2A770] hover:bg-[#C2A770]/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-3 h-5 w-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </motion.div>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center space-x-3 text-green-600"
                >
                  <CheckCircle2 size={20} />
                  <span>Message sent successfully. We'll be in touch soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center space-x-3 text-red-400"
                >
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;