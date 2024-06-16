import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  // Mail Validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // { Request handler }
  const handleSubmit = () => {
    let validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!message.trim()) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div
      id="contact"
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto ">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Contact Us
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 text-black dark:text-white bg-white dark:bg-gray-900 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <input
            data-aos="fade-up"
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 text-black dark:text-white bg-white dark:bg-gray-900 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <textarea
            data-aos="fade-up"
            placeholder="Enter your message"
            className="w-full p-3 h-32 text-black dark:text-white bg-white dark:bg-gray-900 rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
          <button
            data-aos="fade-up"
            className="w-full p-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
