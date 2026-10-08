import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlay, FaPause, FaSearchDollar, FaBullseye, FaChartLine, FaUserMd, FaHospital, FaPhoneVolume, FaMapMarkedAlt } from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";
import ContactForm from '../components/ContactForm';

const evidencePoints = [
      {
            icon: <FaMapMarkedAlt />,
            title: "Lack of Visibility",
            desc: "Running a dental clinic is not an easy responsibility. In reality, it is the lack of visibility at the right time that holds you back."
      },
      {
            icon: <FaSearchDollar />,
            title: "Wasted Marketing Effort",
            desc: "Many try online marketing for dental practice, and yet fail to see results. Marketing without a clear plan is the same as wasting your efforts."
      },
      {
            icon: <FaPhoneVolume />,
            title: "Unpredictable Patient Flow",
            desc: "Appointment slots staying open at your clinic should definitely come as a surprise. You need consistent, high-intent leads."
      },
];

const whyUsPoints = [
      {
            icon: <FaTooth />,
            title: "Trust & Credibility",
            desc: "As a dental office marketing company, we understand that patients want trust, accuracy, and credibility when it comes to oral health."
      },
      {
            icon: <FaUserMd />,
            title: "Expert Support",
            desc: "Our support includes dental internet marketing services, dental practice marketing, and dental office alignment."
      },
      {
            icon: <FaHospital />,
            title: "Long-term Growth",
            desc: "We apply dental clinic digital marketing for steady and long-term growth, prioritizing client retention."
      },
      {
            icon: <FaBullseye />,
            title: "Accurate Strategy",
            desc: "We respect that using dental marketing services that pay attention to strategies instead of short-term tricks yields the best results."
      },
      {
            icon: <FaChartLine />,
            title: "Reliable Results",
            desc: "Experience rapid results and thrive like no other with our marketing strategy dental clinic support."
      },
];

export default function CampaignDental() {

      const videoRef = useRef(null);
      const [isPlaying, setIsPlaying] = useState(true);

      const scrollToCTA = () => {
            document.getElementById('hunt-section').scrollIntoView({ behavior: 'smooth' });
      };

      const togglePlayPause = () => {
            if (videoRef.current) {
                  if (isPlaying) {
                        videoRef.current.pause();
                  } else {
                        videoRef.current.play();
                  }
                  setIsPlaying(!isPlaying);
            }
      };

      return (
            <div className="bg-black text-white min-h-screen font-sans selection:bg-lime-400 selection:text-black">

                  {/* <Helmet>
                        <title>Digital Marketing for Dental Practices | GrowthShark</title>
                        <meta name="description" content="Generate consistent, high-intent leads for your dental clinic. Expert PPC and Local SEO for dentists." />
                        <script type="text/javascript">
                              {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ujciv7yv6q");
          `}
                        </script>
                  </Helmet> */}

                  <div className="relative overflow-hidden">

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(132,204,22,0.15),transparent_30%)] pointer-events-none" />

                        <main className="relative max-w-6xl mx-auto px-6 pb-20 pt-16 md:pt-24">

                              {/* ---------------- HERO SECTION ---------------- */}
                              <section className="text-center space-y-8 mb-24 lg:mt-10 mt-20">

                                    <div className="space-y-6 max-w-4xl mx-auto">
                                          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                                                Patients Are Searching. <br className="hidden md:block" /> Finding Your Clinic Is{" "}
                                                <span className="text-[#3bb2ff] ">
                                                      the Hard Part.
                                                </span>
                                          </h1>

                                          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                                Running a dental clinic is not an easy responsibility. Along with requiring attention, precision, and consistency, it needs appointments. Today, the need for dental care is ever-growing, so appointment slots staying open at your clinic should definitely come as a surprise.
                                          </p>

                                          <p className="text-gray-400 italic">
                                                But what do you think is holding you back? Limited availability, shorter clinic hours, or uneven patient flow? In reality, it is the lack of visibility at the right time.
                                          </p>

                                          <p className="text-gray-400 italic">
                                                You may want to rely on referrals or simple advertising for dental offices, but they aren't enough. Many also try online marketing for dental practice, and yet fail to see results. It's because marketing your dental practice without a clear plan is the same as wasting your efforts.
                                          </p>

                                          <p className="text-gray-400 italic">
                                                Since patients look for clinics online nowadays, reviews and first impressions matter most. That's why dental practice online marketing takes precedence.
                                          </p>

                                          {/* ------------ VIDEO SECTION WITH CONTROLS ------------ */}
                                          <div className="w-full flex justify-center mb-10 relative">
                                                {/* <video
                                                      ref={videoRef}
                                                      src="/lawyer.mp4" // Placeholder video
                                                      className="rounded-xl w-full border border-white/10"
                                                      autoPlay
                                                      loop
                                                      playsInline
                                                      onPlay={() => setIsPlaying(true)}
                                                      onPause={() => setIsPlaying(false)}
                                                /> */}

                                                <button
                                                      onClick={togglePlayPause}
                                                      className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl transition-opacity duration-300 group"
                                                      aria-label={isPlaying ? "Pause video" : "Play video"}
                                                >
                                                      <div className={`p-4 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/30 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 group-hover:scale-110'}`}>
                                                            {isPlaying ? (
                                                                  <FaPause className="text-white text-xl" />
                                                            ) : (
                                                                  <FaPlay className="text-white text-xl translate-x-[2px]" />
                                                            )}
                                                      </div>
                                                </button>
                                          </div>
                                          {/* ------------ END VIDEO SECTION ------------ */}

                                          <div className="mt-8">
                                                <h2 className="text-2xl font-bold text-white mb-2">A More Structured Way to Grow a Dental Practice</h2>
                                                <p className="text-gray-300 max-w-3xl mx-auto">
                                                      Do you want to grow your business with focused digital marketing for dental practices that actually align with how patients search? If yes, Growth Shark helps you do exactly that. We use clarity and consistency to scale new dental office marketing to fill appointment slots reliably.
                                                </p>
                                                <p className="text-gray-300 max-w-3xl mx-auto mt-4">
                                                      From digital marketing for dental office, internet marketing for dental practice, and dental online marketing services to dental digital marketing services, marketing strategies for dental practices, and marketing strategies for dental offices, we can do it all. Not only that, but we also build each plan with your clinic's goals in mind, so that you can experience rapid results.
                                                </p>
                                                <p className="text-gray-300 max-w-3xl mx-auto mt-4">
                                                      Along with dental practice digital marketing, we apply dental practice advertising, dental clinic online marketing, and dental clinic digital marketing for steady and long-term growth.
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                                          <button
                                                onClick={scrollToCTA}
                                                className="px-8 py-4 rounded-full bg-lime-400 text-black font-bold text-lg shadow-[0_0_30px_rgba(132,204,22,0.4)] hover:shadow-[0_0_40px_rgba(132,204,22,0.6)] hover:brightness-110 transition transform hover:-translate-y-1 cursor-pointer"
                                          >
                                                Book Consultation
                                          </button>
                                    </div>

                              </section>

                              {/* ---------------- ADVANTAGE SECTION ---------------- */}
                              <section className="mt-24 bg-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">

                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />

                                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                                          <div className="w-72 sm:w-96 h-72 sm:h-96 bg-[#2ea9ff]/20 rounded-full blur-3xl"></div>
                                    </div>

                                    <div className="relative z-10 text-center space-y-4">

                                          <div className="inline-block text-lime-400 text-xs font-bold tracking-widest uppercase">
                                                The GrowthShark Advantage
                                          </div>

                                          <h3 className="text-5xl md:text-6xl font-bold leading-tight flex flex-col justify-center items-center">
                                                <span className="hidden lg:block">
                                                      What Changes When&nbsp;<span className="text-[#3bb2ff]">Strategy Is Clear?</span>
                                                </span>
                                                <span className="lg:hidden block">
                                                      What Changes When<br />
                                                      <span className="text-[#3bb2ff]">Strategy Is Clear?</span>
                                                </span>
                                          </h3>

                                          <div className="space-y-4 pt-6 pb-8 text-left inline-block">
                                                {[
                                                      "Patients understand your services before they contact you.",
                                                      "Dental clinic promotion supports long-term growth.",
                                                      "Dental clinic publicity reaches the right local audience.",
                                                      "Marketing for dental clinic becomes predictable."
                                                ].map((point, i) => (
                                                      <div key={i} className="flex items-start gap-4 text-xl md:text-2xl text-white font-normal">
                                                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-lime-400 mt-1">
                                                                  <div className="text-lime-400 text-2xl">✓</div>
                                                            </div>
                                                            <span className="text-gray-200">{point}</span>
                                                      </div>
                                                ))}
                                          </div>

                                          <p className="text-xl text-white pt-2">
                                                This is the kind of structured digital marketing dental clinics can need, and we can offer.
                                          </p>

                                    </div>
                              </section>

                              {/* ---------------- WHY US ---------------- */}
                              <section className="mt-24 text-center">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Do Dental Clinics Work With Growth Shark?</h3>
                                    <p className="text-gray-400 max-w-2xl mx-auto mb-5">
                                          As a dental office marketing company, we understand that patients want trust, accuracy, and credibility when it comes to oral health. Therefore, we respect that using our dental marketing services that pay attention to strategies instead of short-term tricks.
                                    </p>
                                    <p className="text-gray-400 max-w-2xl mx-auto mb-5">
                                          Our support includes dental internet marketing services, dental practice marketing, dental practice marketing companies, and internal marketing dental office alignment because we prioritize client retention.
                                    </p>
                                    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                                          With our marketing strategy dental clinic support, your clinic will thrive like no other!
                                    </p>

                                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                          {whyUsPoints.map((item, index) => (
                                                <div
                                                      key={index}
                                                      className={`bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:bg-white/[0.07] transition duration-300 ${index === 4 ? "lg:col-start-2 lg:col-span-2" : ""}`}
                                                >
                                                      <div className="text-lime-400 text-3xl mb-4">{item.icon}</div>
                                                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                                      <p className="text-sm text-gray-400">{item.desc}</p>
                                                </div>
                                          ))}
                                    </div> */}
                              </section>

                              {/* ---------------- CTA SECTION ---------------- */}
                              <section id="hunt-section" className="relative bg-black text-white px-6 py-16 max-w-6xl mx-auto ">
                                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                                          <div className="w-[300px] h-[300px] bg-sky-400/20 rounded-full blur-3xl"></div>
                                    </div>

                                    <div className="relative z-10 text-center">
                                          <h3 className="text-4xl font-bold text-white mb-6">A Practical Next Step</h3>
                                          <p className="text-xl sm:text-2xl font-bold text-white mb-6 pt-10">
                                                When evaluating how to grow your dental practice, keep in mind that a short consultation with us can help with certainty.
                                          </p>

                                          <p className="text-lg text-gray-300 mb-8">
                                                Let us review your current digital marketing for dental clinic to bring back your visibility quickly.
                                          </p>

                                          <p className="text-xl text-white font-semibold mb-10">
                                                Take 15 minutes to talk through what is holding your visibility back and where Growth Shark can help.
                                          </p>

                                          <a
                                                href="https://calendly.com/proriterz101/30min"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2  text-lime-300 lg:font-bold px-10 py-4 rounded-full text-lg duration-300 font-semibold"
                                          >
                                                Contact us today to know more about what we can do for you!
                                          </a>
                                          <ContactForm source="dental" />

                                          <p className="text-gray-200 text-lg mt-4">
                                                and let's help your dental clinic get the visibility and patient flow it truly deserves.
                                          </p>
                                    </div>
                              </section>

                        </main>
                  </div>
            </div>
      );
}
