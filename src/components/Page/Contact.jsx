import React, { useState } from 'react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Success/error message state
  const [responseMessage, setResponseMessage] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Basic form validation
    if (name && email && message) {
      // You can replace this section with an API call to send feedback
      console.log('Form submitted:', formData);
      setResponseMessage('Thank you for your feedback! We will get back to you soon.');
      // Clear the form
      setFormData({ name: '', email: '', message: '' });
    } else {
      setResponseMessage('Please fill out all fields before submitting.');
    }
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-[80%] mx-auto py-16">
      {/* Contact Us Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>

      {/* Contact Information */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us. You can use the form below to send us a message or contact us via email.
        </p>

        <div className="flex flex-col sm:flex-row mt-8">
          {/* Address */}
          <div className="mb-8 sm:mb-0 sm:mr-16">
            <h3 className="text-xl font-semibold text-gray-700">Address</h3>
            <p className="text-gray-600">123 Tech Street, Suite 456<br />City, State, 12345</p>
          </div>
          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600 mb-4">info@techsite.com</p>
            <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send Us Feedback</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Response Message */}
          {responseMessage && (
            <div className={`p-4 text-white mb-4 ${responseMessage.includes('Thank') ? 'bg-green-500' : 'bg-red-500'}`}>
              {responseMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
          >
            Send Feedback
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
