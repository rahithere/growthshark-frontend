import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import img4 from '..//../assets/4.png';
import img5 from '..//../assets/5.png';
import img6 from '..//../assets/6.png';

import tempcon from '..//../assets/tempcon.png';
import Solinas from '..//../assets/Solinas.png';
import sofyrus from '..//../assets/sofyrus.png';
import Sidepath from '..//../assets/Sidepath.png';
import Scoop from '..//../assets/Scoop.png';
import S_IB from '..//../assets/S_IB.png';
import roshni_sanghvi from '..//../assets/roshni_sanghvi.png';
import Rise_hydroponics from '..//../assets/Rise_hydroponics.png';
import rentpost from '..//../assets/rentpost.png';
import quodeck from '..//../assets/quodeck.png';

const logos = [
  tempcon,
  Solinas,
  sofyrus,
  Sidepath,
  Scoop,
  S_IB,
  roshni_sanghvi,
  Rise_hydroponics,
  rentpost,
  quodeck,
];

const AboutSection = () => {

  //Aboutform connect to backend

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    website: "",
    service: "Email Gatekeeping",
    requirement: "",
    revenue: "Less than $5,000",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const baseUrl = import.meta.env.VITE_API_URL

      // for devlopment
      // const baseUrl = "http://localhost:5000"
      const res = await fetch(`${baseUrl}/api/aboutus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, mode: "stealth" }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          website: "",
          service: "Email Gatekeeping",
          requirement: "",
          revenue: "Less than $5,000",
        });
      } else {
        setMessage(`${data.message}`);
      }
    } catch (error) {
      setMessage("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="text-white px-6 py-6 overflow-hidden">
      {/* Header + Form */}
      <div className="max-w-6xl mx-auto flex gap-8 relative z-10 flex-col lg:flex-row">
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Before You Hunt, Get <br /> In <span className="text-[#74c0f4]">Stealth Mode</span>
          </h1>
          <p className="text-gray-300">
            Successful companies never hunt blind— they organize, <br /> strategize, and delegate
            with precision. Our Executive <br /> Assistants streamline your operations
            behind-the-scenes, <br /> prepping you for the perfect strike.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="backdrop-blur-md bg-[#71b5f0]  transition-transform duration-300 border border-white/10 p-6 bg-opacity-80 rounded-xl  shadow-lg text-black ">
            <form className='space-y-6 ' onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact No"
                  value={formData.contact}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
                <input
                  type="text"
                  name="website"
                  placeholder="Website URL"
                  value={formData.website}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
              </div>

              <div>
                <label className="block mb-1 text-sm text-black">Service you're interested in:</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white">
                  <option>Email Gatekeeping</option>
                  <option>Calendar Coordination</option>
                  <option>Call Gatekeeping</option>
                  <option>Market Research</option>
                  <option>Client Intelligence</option>
                  <option>Social Media Management</option>
                  <option>Manual Outreach</option>
                  <option>Document Preparation</option>
                  <option>Task Delegation</option>
                </select>
              </div>


              <textarea
                name="requirement"
                rows="4"
                value={formData.requirement}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
                placeholder="Briefly discuss your requirement">
              </textarea>

              <div>
                <label className="block mb-1 text-sm text-black">
                  What's your monthly recurring revenue?
                </label>
                <select
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white">
                  <option>Less than $5,000</option>
                  <option>$5,000-$10,000</option>
                  <option>More than $10,000</option>
                </select>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="py-2 px-6 bg-lime-400   text-black font-semibold rounded-full duration-300 cursor-pointer shadow-lg shadow-black/50 hover:brightness-110 transition">
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              {message && (
                <p className="text-center text-sm mt-4">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Auto Slider for Logos */}
      <div className="mt-30 relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#2ea9ff]">Those Who Hunted With Us</h2>

        {/* Side Blur */}
        <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-34  bg-gradient-to-r from-[#0b223f] to-transparent z-20 "></div>
        <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-34 bg-gradient-to-l from-[#0b223f] to-transparent z-20 "></div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={60}
          loop={true}
          centeredSlides={false}
          speed={1000} // Adjust for faster/slower motion (8000 = smooth & calm)
          allowTouchMove={false}
          freeMode={{ enabled: false }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Optional: pauses when hovering the slider
          }}
          modules={[Autoplay]}
          className="swiper-logos"
        >
          {/* Duplicate logos multiple times for perfect seamless loop */}
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <SwiperSlide
              key={i}
              className="!w-auto px-4 py-8 transition-all duration-500"
            >
              <div className="group relative">
                <img
                  src={logo}
                  alt={`Partner logo ${i + 1}`}
                  className="
              h-14 w-auto mx-auto
              opacity-50 grayscale 
              transition-all duration-700 ease-out
              group-hover:opacity-100 group-hover:grayscale-0 
              group-hover:scale-125
              group-hover:-translate-y-4
              drop-shadow-lg
              filter hover:drop-shadow-2xl
            "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
    .group:hover img {
      animation: float 1.0s ease-in-out infinite;
    }
  `}</style>
      </div>

      {/* Cards Section */}
      {/* Cards Section Heading */}
      <div className="text-center max-w-6xl mx-auto mt-20 mb-20 ">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          The <span className="text-[#49b9ff]">Stealth Formula</span> Of Ours,
          <br /> Is Based On
        </h2>
      </div>


      {/* Cards Grid */}
      <div className="relative  flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto mb-10">

        {/* Card 1 */}
        <div
          className="w-full max-w-xs h-[350px] rounded-2xl shadow-lg bg-cover bg-center flex items-end p-6"
          style={{ backgroundImage: `url(${img4})` }}
        >
          <div className="w-full bg-white/20 backdrop-blur-md p-5 rounded-xl border border-white/30">
            <h3 className="text-xl font-semibold text-[#2ea9ff] mb-2">Strategic Insights</h3>
            <p className="text-sm font-medium text-black">
              Explore data-driven perspectives to navigate competitive landscapes effectively.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="w-full max-w-xs h-[350px] rounded-2xl shadow-lg bg-cover bg-center flex items-end p-6"
          style={{ backgroundImage: `url(${img5})` }}
        >
          <div className="w-full bg-white/20 backdrop-blur-md p-5 rounded-xl border border-white/30">
            <h3 className="text-xl font-semibold text-[#2ea9ff] mb-2">Innovative Strategies</h3>
            <p className="text-sm font-medium text-black">
              Unlock unconventional methods to achieve high-growth outcomes.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="w-full max-w-xs h-[350px] rounded-2xl shadow-lg bg-cover bg-center flex items-end p-6"
          style={{ backgroundImage: `url(${img6})` }}
        >
          <div className="w-full bg-white/20 backdrop-blur-md p-5 rounded-xl border border-white/30">
            <h3 className="text-xl font-semibold text-[#2ea9ff] mb-2">Personalized Tactics</h3>
            <p className="text-sm font-medium text-black">
              Customize your execution playbook based on industry and user behavior.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
