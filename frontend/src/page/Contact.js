import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have questions or want to make a reservation? We’d love to hear from you! Fill out the form below or reach us through our contact details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> 123 Foodie Street, Gourmet City, FL 12345
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong> contact@foodiesdelight.com
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Visit Us</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096167!2d144.95592831553288!3d-37.817209742545606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2z5pel5pys44CB44Co44Kk44Oz44Kw44OI44K344Op44K144OI44Kw44Op44O844OJ44Oh44O844Oq44Kz44Kw44OI44O8!5e0!3m2!1sen!2sau!4v1635748859791!5m2!1sen!2sau"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Foodies Delight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
