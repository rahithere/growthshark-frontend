import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlay, FaPause, FaWrench, FaTools, FaSearchDollar, FaBullseye, FaChartLine } from "react-icons/fa";
import { FaPhoneVolume, FaMapMarkedAlt } from "react-icons/fa";
import ContactForm from '../components/ContactForm';

const evidencePoints = [
      {
            icon: <FaMapMarkedAlt />,
            title: "Zero Local Presence",
            desc: "Your potential customers are searching for local plumbers, but they’re finding your competitors. You’re invisible in your own service area."
      },
      {
            icon: <FaSearchDollar />,
            title: "Unproductive Ad Spend",
            desc: "Spending on ads without seeing calls? You're paying for clicks, not emergency pipe repairs."
      },
      {
            icon: <FaPhoneVolume />,
            title: "Quiet Phones",
            desc: "Your team is ready, but the phone isn't ringing. You need high-intent emergency leads, not just tire-kickers."
      },
];

const whyUsPoints = [
      {
            icon: <FaWrench />,
            title: "Profitable PPC",
            desc: "Profitable PPC for plumbing companies that generates actual calls and bookings."
      },
      {
            icon: <FaTools />,
            title: "Strong Foundations",
            desc: "Strong plumber internet marketing foundations to ensure customers find you when they need help."
      },
      {
            icon: <FaBullseye />,
            title: "Consistent Leads",
            desc: "Consistent plumber marketing leads that help your business grow month after month."
      },
      {
            icon: <FaSearchDollar />,
            title: "Effective Marketing",
            desc: "Effective plumbing PPC marketing campaigns that convert clicks into high-value emergency calls."
      },
      {
            icon: <FaChartLine />,
            title: "Scalable Growth",
            desc: "Long-term online marketing plumbers can scale to grow their business automatically."
      },
];

export default function CampaignPlumbers() {

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
                        <title>Digital Marketing for Plumbers | GrowthShark</title>
                        <meta name="description" content="Generate consistent, high-intent leads for your plumbing business. Expert PPC and Local SEO for plumbers." />
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
                                                Doing Solid Plumbing Work, <br className="hidden md:block" /> Still Waiting on the{" "}
                                                <span className="text-[#3bb2ff] ">
                                                      Phone to Ring?
                                                </span>
                                          </h1>

                                          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                                If you are running a plumbing business, handling the work may not be the biggest challenge. Why? Because these issues don't just disappear. The real reason businesses lose jobs in this case is simple. It's because someone else showed up first, and the only solution here is appearing at the exact moment someone needs plumbing.
                                          </p>

                                          <p className="text-gray-400 italic">
                                                Word of mouth and traditional advertising for plumbers can only get you so far. But that doesn't mean the issue here is effort; it is direction. Although frustrating, it is entirely fixable.
                                          </p>

                                          <p className="text-gray-400 italic">
                                                Today, the plumbing industry gets more validation locally, and is fast-moving & search driven. Every customer tends to select options that appear first tijdens during search results, just like us. Although not always the best, they are the most visible, giving them an edge.
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
                                                <h2 className="text-2xl font-bold text-white mb-2">Your Plumbing Business Deserves Better Leads</h2>
                                                <p className="text-gray-300 max-w-3xl mx-auto">
                                                      Growth Shark can help you build demand that actually converts. Our specialization in digital marketing for plumbers will not only help you generate consistent and high-intent leads but also position your business to appear exactly when customers need it. With our assistance, you will get to succeed in local marketing for plumbers, plumber PPC, and smart content marketing for plumbers.
                                                </p>
                                                <p className="text-gray-300 max-w-3xl mx-auto mt-4">
                                                      We do not just guess the best way to advertise a plumbing business; we take the time to personalize a system that works perfectly for your needs. Our search marketing for plumbers brings visibility, online marketing for plumbers builds trust, and targeted advertising for plumbers helps turn every Google search into a booked job for you.
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
                                                      What the Right&nbsp;<span className="text-[#3bb2ff]">Strategy Changes:</span>
                                                </span>
                                                <span className="lg:hidden block">
                                                      What the Right<br />
                                                      <span className="text-[#3bb2ff]">Strategy Changes:</span>
                                                </span>
                                          </h3>

                                          <div className="space-y-4 pt-6 pb-8 text-left inline-block">
                                                {[
                                                      "Your plumbing company appears at the top of local searches.",
                                                      "Your website answers customer questions before they call.",
                                                      "PPC for plumbers brings emergency and high-value service calls.",
                                                      "Competitors stop capturing the leads you should be getting."
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
                                                This is the kind of structured digital marketing plumbers can need, and we can offer.
                                          </p>

                                    </div>
                              </section>

                              {/* ---------------- WHY US ---------------- */}
                              <section className="mt-24 text-center">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Plumbing Companies Choose Growth Shark?</h3>
                                    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                                          We understand the depths of plumbing contractor marketing and act accordingly. We provide speed, clarity, and local dominance without relying on generic campaigns.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                                          {whyUsPoints.map((item, index) => (
                                                <div
                                                      key={index}
                                                      className={`bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:bg-white/[0.07] transition duration-300 h-full lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}
                                                >
                                                      <div className="text-lime-400 text-3xl mb-4">{item.icon}</div>
                                                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                                      <p className="text-sm text-gray-400">{item.desc}</p>
                                                </div>
                                          ))}
                                    </div>
                              </section>

                              {/* ---------------- CTA SECTION ---------------- */}
                              <section id="hunt-section" className="relative bg-black text-white px-6 py-16 max-w-6xl mx-auto ">
                                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                                          <div className="w-[300px] h-[300px] bg-sky-400/20 rounded-full blur-3xl"></div>
                                    </div>

                                    <div className="relative z-10 text-center">
                                          <h3 className="text-4xl font-bold text-white mb-6">A Clear Path Forward</h3>
                                          <p className="text-xl sm:text-2xl font-bold text-white mb-6 pt-10">
                                                Has your plumbing business marketing felt inconsistent or unpredictable lately?
                                          </p>

                                          <p className="text-lg text-gray-300 mb-8">
                                                If so, let Growth Shark bring clarity. A short consultation with us will help you identify gaps you've never noticed before in your plumber PPC company strategy.
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
                                                Book your free 15-minute consultation with Growth Shark today.
                                          </a>
                                          <ContactForm source="plumbers" />

                                          <p className="text-gray-200 text-lg mt-4">
                                                and let's help your plumbing practice get the visibility and high-value calls it truly deserves.
                                          </p>
                                    </div>
                              </section>

                        </main>
                  </div>
            </div>
      );
}
