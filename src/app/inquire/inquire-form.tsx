"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // submit logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-6 max-w-lg text-left"
    >
      {/* Name */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
        />
      </div>

      {/* Email ID */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
        />
      </div>

      {/* Contact No */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Contact No</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
        />
      </div>

      {/* Your Message */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2 resize-none"
        />
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="px-6 py-3 bg-neutral-200 text-black uppercase tracking-wide text-sm"
      >
        Send Your Inquiry
      </motion.button>
    </form>
  );
}
