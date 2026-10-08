import {  FaSearch, FaTools, FaChartLine, FaClipboardCheck, FaComments, FaHeart, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
const FeedbackManagement = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto spac-y-15">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          The Power of <span className="text-sky-300">Feedback & Review Management</span> in 2025
        </h2>

        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-gray-300">
          90% of consumers read reviews before purchasing, and positive reviews drive 31% higher revenue. At GrowthShark, we help you monitor, analyze, and respond to customer feedback that grows trust and improves business performance.
        </p>

        {/* Description Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-sky-400 rounded-2xl shadow-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-black">What Is Feedback & Review Management?</h3>
            <p className="text-gray-800">
              It’s more than just replying to reviews—it's about extracting insights, improving your services, and nurturing brand trust across platforms like Google, Yelp, Amazon, and social media.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6  shadow-lg backdrop-blur">
            <h3 className="text-2xl font-bold mb-4">Why Feedback Management Matters</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Customers are 4× more likely to trust businesses with positive reviews.</li>
              <li>Boosts credibility and trust across all digital channels.</li>
              <li>Helps prevent customer churn through proactive engagement.</li>
              <li>Turns negative reviews into improvement opportunities.</li>
            </ul>
          </div>
        </div>

        {/* Service Cards */}
        <h3 className="text-3xl font-bold mb-10 text-center">GrowthShark Feedback & Review Services</h3>
 <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-5">

        {/* Card 1 */}
        <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
          <FaSearch className="text-sky-300 text-2xl mb-3" />
          <h4 className="text-xl font-semibold mb-2">Review Monitoring</h4>
          <p className="text-gray-300 text-sm">
            Track reviews across Google, Yelp, Amazon, Facebook, and more so you never miss a customer mention.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
          <FaComments className="text-sky-300 text-2xl mb-3" />
          <h4 className="text-xl font-semibold mb-2">Review Response Management</h4>
          <p className="text-gray-300 text-sm">
            We write professional, on-brand replies to positive and negative reviews to reinforce your values.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
          <FaClipboardCheck className="text-sky-300 text-2xl mb-3" />
          <h4 className="text-xl font-semibold mb-2">Feedback Collection</h4>
          <p className="text-gray-300 text-sm">
            Use surveys, follow-up emails, and SMS to gather direct insights from your audience.
          </p>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
          <FaHeart className="text-sky-300 text-2xl mb-3" />
          <h4 className="text-xl font-semibold mb-2">Sentiment Analysis</h4>
          <p className="text-gray-300 text-sm">
            Analyze tone and language of reviews to detect trends, customer pain points, and brand perception.
          </p>
        </div>

        {/* Card 5 */}
        <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
          <FaTools className="text-sky-300 text-2xl mb-3" />
          <h4 className="text-xl font-semibold mb-2">Reputation Repair</h4>
          <p className="text-gray-300 text-sm">
            If your brand has negative press, we help restore image through strategic review management and outreach.
          </p>
        </div>

        {/* Card 6 */}
        <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
          <FaChartLine className="text-sky-300 text-2xl mb-3" />
          <h4 className="text-xl font-semibold mb-2">Custom Reporting</h4>
          <p className="text-gray-300 text-sm">
            Get tailored reports on review trends, satisfaction ratings, and actionable improvement insights.
          </p>
        </div>

        {/* Card 7 */}
        <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
          <FaClipboardList className="text-sky-300 text-2xl mb-3" />
          <h4 className="text-xl font-semibold mb-2">Platform Optimization</h4>
          <p className="text-gray-300 text-sm">
            Ensure your business listings are optimized across review platforms to attract and convert.
          </p>
        </div>

      </div>
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur mt-10 mb-10">
          <h3 className="text-2xl font-bold mb-4">Let’s Turn Reviews into Revenue</h3>
          <p className="text-gray-300 mb-6">
            Ready to take control of your brand reputation? Let GrowthShark manage your reviews and feedback strategy for lasting impact.
          </p>
          
        </div>
         {/* Why Choose GrowthShark */}
        <div className="mt-5 mb-10">
          <h2 className="text-4xl font-bold mb-10 text-center">Why Choose GrowthShark?</h2>
         <div className="flex flex-wrap justify-center gap-5">
  {/* Card 1 */}
  <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h4 className="text-xl font-semibold mb-2">Tailored Strategies</h4>
    <p className="text-sm text-gray-300">
      Every brand is unique. We build strategies tailored to your audience and goals.
    </p>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h4 className="text-xl font-semibold mb-2">Proven Expertise</h4>
    <p className="text-sm text-gray-300">
      With years of experience across sectors, we handle feedback and reputation confidently.
    </p>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h4 className="text-xl font-semibold mb-2">Advanced Tools</h4>
    <p className="text-sm text-gray-300">
      We use cutting-edge analytics, sentiment tracking, and reporting for complete transparency.
    </p>
  </div>

  {/* Card 4 */}
  <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h4 className="text-xl font-semibold mb-2">Proactive Approach</h4>
    <p className="text-sm text-gray-300">
      We address issues before they escalate. Our proactive strategy keeps your reputation safe.
    </p>
  </div>

  {/* Card 5 */}
  <div className="w-full sm:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h4 className="text-xl font-semibold mb-2">Transparent Reporting</h4>
    <p className="text-sm text-gray-300">
      Get regular insights with detailed review summaries and actionable reports.
    </p>
  </div>
</div>

        </div>

        {/* How We Handle Negative Reviews */}
        <div>
          <h2 className="text-4xl font-bold mb-10 text-center">How We Handle Negative Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
              <h4 className="text-xl font-semibold mb-2">Immediate Action</h4>
              <p className="text-sm text-gray-300">
                We respond promptly to concerns to show empathy and build trust with dissatisfied customers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
              <h4 className="text-xl font-semibold mb-2">Empathy and Professionalism</h4>
              <p className="text-sm text-gray-300">
                Every reply is crafted to demonstrate understanding, politeness, and your brand’s commitment to quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
              <h4 className="text-xl font-semibold mb-2">Solutions-Oriented</h4>
              <p className="text-sm text-gray-300">
                We provide actionable solutions and work with customers to resolve issues effectively.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
              <h4 className="text-xl font-semibold mb-2">Learn and Improve</h4>
              <p className="text-sm text-gray-300">
                Every complaint is a chance to grow. We use review data to optimize your offerings and customer experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center  backdrop-blur">
        <p className="text-base text-gray-300 max-w-2xl">
          Ready to take your Feedback & Review ? Let’s create content that performs.
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

export default FeedbackManagement;
