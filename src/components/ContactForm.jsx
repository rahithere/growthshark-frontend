import React, { useState } from "react";

const ContactForm = ({ source }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Remove trailing slash if present
      const baseUrl = import.meta.env.VITE_API_URL.replace(/\/+$/, "");

      // for development
      // const baseUrl = "http://localhost:5000"

      const response = await fetch(`${baseUrl}/api/mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, source }),
      });

      // Read response safely
      const contentType = response.headers.get("content-type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || "Server returned non-JSON response");
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-[#71b5f0] p-8 rounded-2xl w-full max-w-2xl shadow-2xl">
        <p className="text-black mb-10 font-semibold">Or Fillup The Form Below </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-800 outline-none py-2 text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-800 outline-none py-2 text-black"
              required
            />
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-800 outline-none py-2 text-black resize-none"
            required
          />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
            <p className="text-xs italic text-gray-800 text-center lg:text-left">
              *We promise not to disclose your personal information.
            </p>
            <button
              type="submit"
              className="w-full lg:w-auto bg-lime-400 hover:bg-lime-500 text-black font-bold py-3 px-6 rounded-xl"
            >
              Send Message
            </button>
          </div>

          {status && (
            <p className="text-center text-sm font-semibold">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;