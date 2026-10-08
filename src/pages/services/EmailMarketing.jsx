import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const EmailMarketing2025 = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white py-30 px-6 ">
      <Helmet>
        <title>Launch Email Marketing Campaigns to Engage & Conversion | Growthshark</title>
        <meta name="description" content="Reach your audience with targeted email marketing that converts. Start your campaigns today with Growthshark to increase leads and revenue!" />
      </Helmet>
      <div className="max-w-6xl mx-auto ">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          The Power of <span className="text-sky-300">Email Marketing</span> in 2025
        </h1>

        {/* Did You Know */}
        <div className=" mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2 text-sky-300">Did You Know?</h2>
          <p className="text-gray-300">
            Email marketing revenue is projected to grow by a staggering <strong>287% worldwide</strong> from 2004 to 2032.
            <br />
            And 95% of marketers say email marketing delivers excellent ROI.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-sky-400 rounded-2xl shadow-2xl p-6">
            <h3 className="text-2xl font-semibold mb-2 text-black">Think about the last time you checked your inbox</h3>
            <p className="text-gray-800">
              Between all those newsletters and promos, some emails stood out — maybe it was the discount, maybe it was just a great subject line.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6  shadow-lg backdrop-blur">
            <h3 className="text-2xl font-semibold mb-2">
              Remember when email marketing meant sending the same message to everyone?
            </h3>
            <p className="text-gray-300">
              Those days are gone. Modern email marketing thrives on personalization and automation, delivering targeted experiences that actually convert.
            </p>
          </div>
        </div>

        {/* Building Blocks */}
        <h2 className="text-3xl font-bold mb-8 text-center">The Building Blocks of Successful Email Marketing</h2>
      {/* Benefits Cards */}
<div className="flex flex-wrap justify-center gap-7 mb-20 max-w-6xl mx-auto">

  {/* Card 1 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[23%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-semibold mb-2">Subject Lines That Spark Interest</h3>
    <p className="text-gray-300">
      Grab attention instantly with personalized, curiosity-driven subject lines.
    </p>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[23%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-semibold mb-2">Content That <br/>Connects</h3>
    <p className="text-gray-300">
      Deliver real value with content that speaks to your audience’s needs and emotions.
    </p>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[23%]  bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-semibold mb-2">Personalization and Segmentation</h3>
    <p className="text-gray-300">
      Use data to send the right message to the right person at the right time.
    </p>
  </div>

  {/* Card 4 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[23%]  bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-semibold mb-2">Automation That Makes Sense</h3>
    <p className="text-gray-300">
      Smart automation saves time and increases relevance, with behavior-based flows and dynamic content.
    </p>
  </div>
</div>
      <div>
        {/* Why Choose Us */}
        <h2 className="text-3xl font-bold mb-6">Why Choose GrowthShark for Email Marketing?</h2>
        <ul className="list-none space-y-4">
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Expert Content Creation:</strong> Emails that resonate, crafted by professionals who know how to drive engagement.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>All-in-One Execution:</strong> From list building to automation and analytics, we manage your full email workflow.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Data-Driven Strategy:</strong> We build campaigns backed by insights, not guesswork — and it shows in the results.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Omnichannel Integration:</strong> Emails work in harmony with your broader digital marketing goals.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Performance Focused:</strong> We prioritize open rates, CTRs, and ROI with every campaign we build.</p>
          </li>
        </ul>
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center  backdrop-blur">
        <p className="text-base text-gray-300 max-w-2xl">
          Ready to take your email marketing to the next level? Let’s create content that performs.
        </p>
        <div className="flex gap-4">
        
<button className="px-6 py-3 bg-sky-300 text-black rounded-md font-semibold hover:bg-sky-400 transition cursor-pointer">
  <Link to="/contact">Contact Us</Link>
</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default EmailMarketing2025;
