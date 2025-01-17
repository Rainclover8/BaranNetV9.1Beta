"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Input validation
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoader(true);
    emailjs
      .sendForm(
        "service_2sz8rpg",
        "template_1q0lbne",
        e.target as HTMLFormElement,
        "rbrLE2kMjqEklQUPG"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <section className="p-8 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-blue-500 dark:text-indigo-300">
            Contact Me!
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Feel free to reach out!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              value={formData.user_name}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="johnDoe@gmail.com"
              value={formData.user_email}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              placeholder="You are so Handsome!!!"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
              rows={4}
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-400 transition"
            >
              {loader ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {status && (
          <div className="mt-6 text-center text-lg font-semibold text-gray-600 dark:text-gray-400">
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
