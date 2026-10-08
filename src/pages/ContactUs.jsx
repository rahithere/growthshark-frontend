import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone } from "lucide-react";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // ✅ Ensure no double slash in URL
      const baseUrl = import.meta.env.VITE_API_URL.replace(/\/+$/, "");

      //for develoment
      // const baseUrl = "http://localhost:5000"
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // ✅ Check if response is not OK
      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        let errorMessage;

        if (contentType?.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.message || "Unknown error";
        } else {
          errorMessage = await response.text(); // probably HTML error page
        }

        console.error("Error:", errorMessage);
        setStatus(`Error: ${errorMessage}`);
        return;
      }

      // ✅ Success case
      const data = await response.json();
      console.log("Success:", data.message);
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Error sending message. Please try again.");
    }
  }

  return (
    <section className="text-white pt-30 bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] relative overflow-hidden">
      <Helmet>
        <title>Get in Touch & Take Your Business to the Next Level at GrowthShark</title>
        <meta name="description" content="Contact our expert team for tailored digital marketing solutions. Reach out now and start growing your brand with GrowthShark." />
      </Helmet>
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-96 h-96 bg-sky-500 rounded-full blur-3xl absolute -top-20 -left-20"></div>
        <div className="w-96 h-96 bg-blue-800 rounded-full blur-3xl absolute bottom-0 right-0"></div>
      </div>

      <div className="relative px-6 z-10">
        {/* Heading */}
        <h2 className="text-sky-300 text-lg font-semibold mb-2 text-center">Contact</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Get in touch</h3>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Info */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg space-y-6 ">
            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform">
              <Mail className="w-6 h-6 text-sky-400" />
              <a href="mailto:marketing@growthshark.io" className="text-lg hover:underline">
                marketing@growthshark.io
              </a>
            </div>
            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform">
              <Mail className="w-6 h-6 text-sky-400" />
              <a href="mailto:diptesh@growthshark.io" className="text-lg hover:underline">
                diptesh@growthshark.io
              </a>
            </div>
            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform">
              <Phone className="w-6 h-6 text-sky-400" />
              <a href="tel:+918348296083" className="text-lg hover:underline">
                +91 83482 96083
              </a>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#71b5f0] backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-800 focus:border-sky-400 outline-none py-2 text-black placeholder-gray-900 transition w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={form.email}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-800 focus:border-sky-400 outline-none py-2 text-black placeholder-gray-900 transition w-full"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-800 focus:border-sky-400 outline-none py-2 text-black placeholder-gray-800 transition resize-none"
              rows="4"
              required
            ></textarea>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-800 italic">
                *We promise not to disclose your personal <br /> information to third parties.
              </p>
              <button
                type="submit"
                className="bg-lime-400  shadow-lg shadow-black/50 hover:brightness-110  text-black font-semibold py-3 px-6 rounded-lg transition cursor-pointer"
              >
                Send Message
              </button>
            </div>
            {status && <p className="text-sm mt-2">{status}</p>}
          </form>
        </div>

        {/* Map */}
        <div className="m-12 w-full h-[450px] max-w-6xl mx-auto">
          <iframe
            title="Bardhaman Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49642.585803087815!2d87.82504918794346!3d23.246215328212315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f849d1ea7e5efd%3A0x4ce71a0a521f8b0e!2sBardhaman%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1754377415094!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
