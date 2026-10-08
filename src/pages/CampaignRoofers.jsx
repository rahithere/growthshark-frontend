import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlay, FaPause, FaHammer, FaTools, FaSearchDollar, FaBullseye, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { FaPhoneVolume, FaMapMarkedAlt } from "react-icons/fa";
import ContactForm from '../components/ContactForm';

const evidencePoints = [
      {
            icon: <FaMapMarkedAlt />,
            title: "Invisible to Local Homeowners",
            desc: "Your potential customers are searching for roofing repairs, but they’re finding your competitors. You’re invisible in your own service area."
      },
      {
            icon: <FaSearchDollar />,
            title: "Wasted Marketing Budget",
            desc: "Spending on ads without seeing claims? You're paying for clicks, not contract bookings."
      },
      {
            icon: <FaPhoneVolume />,
            title: "Quiet Phones",
            desc: "Your team is ready, but the phone isn't ringing. You need high-intent repair leads, not just window shoppers."
      },
];

const whyUsPoints = [
      {
            icon: <FaHammer />,
            title: "Profitable PPC",
            desc: "Roofing PPC agency campaigns capture urgent repair and high-value leads."
      },
      {
            icon: <FaTools />,
            title: "Strong Foundations",
            desc: "Your roofing company SEO keeps you at the top of local search results."
      },
      {
            icon: <FaBullseye />,
            title: "Consistent Leads",
            desc: "Connect with homeowners at the exact moment a leak becomes a major concern."
      },
      {
            icon: <FaShieldAlt />,
            title: "Effective Marketing",
            desc: "Roofing marketing services build credibility before the first phone call."
      },
      {
            icon: <FaChartLine />,
            title: "Scalable Growth",
            desc: "Long-term online marketing roofers can scale to grow their business automatically."
      },
];

export default function CampaignRoofers() {

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
                        <title>Digital Marketing for Roofers | GrowthShark</title>
                        <meta name="description" content="Generate consistent, high-intent leads for your roofing business. Expert PPC and Local SEO for roofers." />
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
                                                When Roofs Need Fixing,<br className="hidden md:block" /> Your Phone Should{" "}
                                                <span className="text-[#3bb2ff] ">
                                                      Ring
                                                </span>
                                          </h1>

                                          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                                Have you ever noticed how quickly a leak can escalate? It takes one storm, one cracked shingle, or one blocked gutter for it to turn into a major claim. That’s why roofing businesses are always in demand. Despite this, if you’re lacking clients, it may be time for you to reevaluate how people find and choose your business.
                                          </p>

                                          <p className="text-gray-400 italic">
                                                Although relying on existing clients and random advertising may seem cool, it rarely ever gets the job done. You don't need high efforts for SEO services for roofers; you need a strategy.
                                          </p>

                                          <p className="text-gray-400 italic">
                                                In today's digital-first world, roofing internet marketing is mainly ruled by local search and online visibility. This means that homeowners tend to choose businesses that appear first in their search results. Being simply skilled isn't enough; you have to be easily found.
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
                                                <h2 className="text-2xl font-bold text-white mb-2">Make Every Search Count</h2>
                                                <p className="text-gray-300 max-w-3xl mx-auto">
                                                      Want to connect with the right clients for your roofing business? Growth Shark can help you with that.
                                                </p>
                                                <p className="text-gray-300 max-w-3xl mx-auto mt-4">
                                                      Through our customized SEO services for roofers, SEO for roofing contractors, SEO for roofing company, roofing digital marketing services, roofing digital marketing company, roofing PPC services, roofing PPC company, and roofing social media marketing, you will see a spike in your qualified leads like never before.
                                                </p>
                                                <p className="text-gray-300 max-w-3xl mx-auto mt-4">
                                                      At Growth Shark, we take out the guesswork and go for roofing company marketing strategies that actually work. No matter if you are looking for roofing internet marketing, PPC for roofing companies, roofer online marketing, or digital marketing for roofing contractors, we will be there to back you up. With our help, you will be able to ensure your company becomes visible when and where it matters most.
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
                                                      What an Optimized&nbsp;<span className="text-[#3bb2ff]">Plan Achieves:</span>
                                                </span>
                                                <span className="lg:hidden block">
                                                      What an Optimized<br />
                                                      <span className="text-[#3bb2ff]">Plan Achieves:</span>
                                                </span>
                                          </h3>

                                          <div className="space-y-4 pt-6 pb-8 text-left inline-block">
                                                {[
                                                      "Your roofing company SEO keeps you at the top of local search results.",
                                                      "Roofing PPC agency campaigns capture urgent repair and high-value leads.",
                                                      "Roofing marketing services build credibility before the first phone call.",
                                                      "Competitors no longer take the jobs you deserve."
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
                                                This is the kind of structured digital marketing roofers can need, and we can offer.
                                          </p>

                                    </div>
                              </section>

                              {/* ---------------- WHY US ---------------- */}
                              <section className="mt-24 text-center">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Roofing Contractors Trust Growth Shark?</h3>
                                    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                                          We are a trusted support among roofing contractor marketing agency facilities because we understand your requirements first and design our plan later. You can opt for roofer SEO services, roofers marketing services, roofing company marketing agency, advertising roofing business, or digital marketing for roofing companies from us, and we will approach every service with the same precision, keeping your market and goals in mind.
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
                                          <h3 className="text-4xl font-bold text-white mb-6">Take the Guesswork Out of Roofing Leads</h3>
                                          <p className="text-xl sm:text-2xl font-bold text-white mb-6 pt-10">
                                                Don't let your roofing digital marketing or PPC for roofers stay irrelevant for too long when a 15-minute consultation with Growth Shark can uncover gaps you're missing.
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
                                                Contact us today to learn more!
                                          </a>
                                          <ContactForm source="roofers" />

                                          <p className="text-gray-200 text-lg mt-4">
                                                and let's help your roofing business get the visibility and high-value leads it truly deserves.
                                          </p>
                                    </div>
                              </section>

                        </main>
                  </div>
            </div>
      );
}
