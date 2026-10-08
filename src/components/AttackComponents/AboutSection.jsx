import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import img1 from '..//../assets/1.png';
import img2 from '..//../assets/2.png';
import img3 from '..//../assets/3.png';

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
  quodeck
];

const AboutSection = () => {

  //Aboutform connect to backend

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    website: "",
    service: "Social Media Marketing",
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

      //for devlopment only
      // const baseUrl = "http://localhost:5000"

      const res = await fetch(`${baseUrl}/api/aboutus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, mode: "attack" }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          website: "",
          service: "Social Media Marketing",
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
    <section className="relative bg-black text-white px-6 py-6 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className="w-[900px] h-[700px] rounded-full blur-[160px] opacity-80"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.25) 35%, rgba(59,130,246,0.1) 65%, transparent 100%)',
          }}
        />
      </div>

      {/* Header + Form */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Know Your Territory <br /> Before The Hunt
          </h1>
          <p className="text-gray-300">
            Be aware of other 'predators' & your strategy for a strike. <br /> Organize, strategize, and delegate with precision.
          </p>
          <p className="text-gray-300">
            Fill the form below and let our Marketing team identify <br /> your blue ocean strategy for a perfect take down.
          </p>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-[#71b5f0]  bg-opacity-80 rounded-xl p-6 sm:p-8 shadow-lg text-black">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact No"
                  value={formData.contact}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Website URL"
                  value={formData.website}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-black">
                  Service you're interested in
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white"
                >
                  <option>Social Media Marketing</option>
                  <option>SEO</option>
                  <option>Forum Marketing</option>
                  <option>Linkedin Personal Branding</option>
                  <option>Community Marketing</option>
                  <option>Content Marketing Strategy</option>
                  <option>Video Editing & Graphics Designing</option>
                  <option>YouTube SEO</option>
                  <option>Voice-over and Scripting</option>
                  <option>Photo and Videography</option>
                  <option>Translation & Transcription</option>
                </select>
              </div>

              <div>
                <textarea
                  name="requirement"
                  rows="4"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Briefly discuss your requirement"
                ></textarea>
              </div>

              <div>
                <label className="block mb-1 text-sm text-black">
                  What's your monthly recurring revenue?
                </label>
                <select
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white"
                >
                  <option>Less than $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>More than $10,000</option>
                </select>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="py-2 px-6 bg-lime-400   text-black font-semibold rounded-full duration-300 cursor-pointer shadow-lg shadow-black/50 hover:brightness-110 transition"
                >
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
      {/* Logos Slider */}
      <div className="mt-30 relative z-10 ">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#2ea9ff]">Those Who Hunted With Us</h2>
        {/* Left fade */}
        <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-34 bg-gradient-to-r from-black to-transparent z-10"></div>

        {/* Right fade */}
        <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-34 bg-gradient-to-l from-black to-transparent z-10"></div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={60}
          loop={true}
          centeredSlides={false}
          speed={2000} // Adjust for faster/slower motion (8000 = smooth & calm)
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
      < div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 mt-30 mb-20" >
        {/* Text Section */}
        < div className="space-y-6 text-center lg:text-left mx-auto lg:mx-0" >
          <h1 className="text-4xl font-bold text-white">How We Do It.</h1>
          <ul className="list-none space-y-2 text-lg text-gray-300">
            <li>→ Gain Digital Advantage</li>
            <li>→ Results-Oriented Solutions</li>
            <li>→ From Art To Science</li>
          </ul>
        </div >

        {/* Cards Section */}
        < div className="relative lg:h-[500px] flex flex-col items-center gap-12 lg:mb-25 lg:block" >
          {/* Card 1 */}
          < div
            className="lg:absolute lg:left-[-20px] lg:top-[110px] w-[280px] h-[320px] z-[30] bg-cover bg-center p-6 rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] flex flex-col justify-end"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
              <h2 className="text-xl font-semibold text-blue-500">Strategic Insights</h2>
              <p className="text-sm font-medium text-black">
                Explore data-driven perspectives to navigate competitive landscapes effectively.
              </p>
            </div>
          </div >

          {/* Card 2 */}
          < div
            className="lg:absolute lg:left-[270px] lg:top-[0px] w-[280px] h-[320px] z-[20] bg-cover bg-center p-6 rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] flex flex-col justify-end"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
              <h2 className="text-xl font-semibold text-blue-500">Innovative Strategies</h2>
              <p className="text-sm font-medium text-black">
                Unlock unconventional methods to achieve high-growth outcomes.
              </p>
            </div>
          </div >

          {/* Card 3 */}
          < div
            className="lg:absolute lg:left-[270px] lg:top-[330px] w-[280px] h-[320px] z-[10] bg-cover bg-center p-6 rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] flex flex-col justify-end"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
              <h2 className="text-xl font-semibold text-blue-500">Personalized Tactics</h2>
              <p className="text-sm font-medium text-black">
                Customize your execution playbook based on industry and user behavior.
              </p>
            </div>
          </div >
        </div >
      </div >


    </section >
  );
};

export default AboutSection;
