import React from "react";
import Layout from "../components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
          Get in <span className="text-amber-700 underline">Touch</span> ✉️
        </h1>

        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-10 border border-amber-100">
          <form
            action="https://formspree.io/f/mdkwbzbw" 
            method="POST"
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-700 to-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:from-amber-800 hover:to-amber-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
