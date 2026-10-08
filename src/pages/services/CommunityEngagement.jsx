import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CommunityEngagement() {
  const cardStyle =
    "bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300";
     const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-30 sm:py-30">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
            The Power of<span className="text-sky-300"> Community Engagement </span>in 2025
          </h2>
          <h3 className="text-2xl font-semibold text-sky-400 mb-6">Did You Know?</h3>
          <p className="text-gray-300 text-lg">
            Most customers leave not because of poor products but due to a lack of meaningful connection with the brand. If your audience feels ignored, their loyalty—and their spending—goes elsewhere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold mb-4 leading-snug">
              At <span className="text-sky-400">GrowthShark</span>, we turn passive audiences into thriving communities
            </h3>
            <h4 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-4">
              Why Community Engagement Matters
            </h4>
          </div>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Whether it’s through personalized responses, interactive campaigns, or building dedicated spaces for your audience, we ensure your brand isn’t just seen but loved. Let’s make sure your community becomes your greatest asset, not an untapped opportunity.
            </p>
          </div>
        </div>
        <h3 className="text-3xl text-center font-bold">Why Community Engagement Matters</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[ 
            ["Builds Trust That Converts", "Engaging directly with your audience shows them you care about their voice. Brands that interact authentically with their community enjoy 2x higher retention rates than those that don’t."],
            ["Drives Organic Growth", "Satisfied and engaged community members naturally advocate for your brand. Word-of-mouth referrals from an engaged audience account for 28% of sales growth in active communities (Hootsuite)."],
            ["Improves Brand Sentiment", "A responsive and attentive brand creates positive experiences. Regular engagement ensures your brand is associated with care and authenticity, even in times of crisis."]
          ].map(([title, desc], i) => (
            <div key={i} className={cardStyle}>
              <h5 className="font-bold text-xl text-sky-300 mb-2">{title}</h5>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        {/* Section 1: What GrowthShark Offers */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">
        What GrowthShark Offers in Community Engagement Services
      </h2>

      <ul className="space-y-4 text-lg">
        <li className="flex items-start gap-2">
          <FaCheck className="text-green-600 mt-1" />
          <span>
            <strong>Social Media Engagement:</strong> Your audience is talking—are you listening? We actively monitor and manage your social channels, ensuring every comment, mention, and direct message gets a thoughtful, timely response.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheck className="text-green-600 mt-1" />
          <span>
            <strong>Community Growth Strategies:</strong> Growing your community isn’t just about increasing numbers—it’s about attracting the right people. We implement strategies to bring in members who genuinely align with your brand values and vision.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheck className="text-green-600 mt-1" />
          <span>
            <strong>Interactive Campaigns:</strong> Interactive content sparks conversations. From polls and quizzes to live Q&A sessions, we design campaigns that get people talking and sharing.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheck className="text-green-600 mt-1" />
          <span>
            <strong>Feedback Collection & Analysis:</strong> We turn customer feedback into actionable insights. By listening closely to your community, we help you refine your products, services, and messaging.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheck className="text-green-600 mt-1" />
          <span>
            <strong>Crisis Management:</strong> Every brand faces challenges, but how you respond matters most. We manage sensitive situations with professionalism, ensuring your audience feels heard and respected while protecting your brand reputation.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheck className="text-green-600 mt-1" />
          <span>
            <strong>Online Community Building:</strong> Whether it’s Facebook groups, Slack channels, or private forums, we create and manage dedicated spaces where your audience can connect, interact, and grow closer to your brand.
          </span>
        </li>
      </ul>

      {/* Section 2: How GrowthShark Builds Engaged Communities */}
      <h2 className="text-3xl sm:text-4xl font-bold mt-20 mb-12 text-center">
  How GrowthShark Builds Engaged Communities
</h2>

<div className="flex flex-wrap justify-center gap-5 max-w-7xl mx-auto">
  {/* Card 1 */}
  <div className="w-full sm:w-[48%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 text-center">
    <h3 className="text-2xl font-bold mb-2 leading-tight  text-sky-300">
      Understand Your <br /> Audience
    </h3>
    <p className="text-gray-300">
      We take a deep dive into who your audience is, analyzing demographics, behaviors, and preferences to create strategies that resonate.
    </p>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[48%] lg:w-[32%] text-center bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-2xl font-bold mb-2 leading-tight text-sky-300">
      Creating a Personalized Plan
    </h3>
    <p className="text-gray-300">
      No two communities are alike. We build a tailored engagement strategy that aligns with your goals, whether it’s improving retention, increasing engagement, or driving advocacy.
    </p>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[48%] lg:w-[32%] text-center bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-2xl font-bold mb-2 leading-tight  text-sky-300">
      Crafting Content That Connects
    </h3>
    <p className="text-gray-300">
      Engagement starts with great content. From relatable posts to thought-provoking discussions, we create content that encourages meaningful interaction.
    </p>
  </div>

  {/* Card 4 */}
  <div className="w-full sm:w-[48%] lg:w-[32%]  text-center bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-2xl font-bold mb-2 leading-tight  text-sky-300">
      Real-Time <br /> Interaction
    </h3>
    <p className="text-gray-300">
      We respond to your audience’s questions, comments, and concerns promptly, ensuring they feel valued and connected to your brand.
    </p>
  </div>

  {/* Card 5 */}
  <div className="w-full sm:w-[48%] lg:w-[32%]  text-center bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-2xl font-bold mb-2 leading-tight  text-sky-300">
      Ongoing <br /> Improvement
    </h3>
    <p className="text-gray-300">
      Engagement strategies aren’t static. We track metrics like sentiment, activity, and growth, refining our approach to keep your community thriving.
    </p>
  </div>
</div>

       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Why Choose GrowthShark for Community Engagement?
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
            <li><strong>Proven Track Record:</strong> We’ve helped brands build engaged communities that drive loyalty and growth.</li>
            <li><strong>Customized Strategies:</strong> Strategies built from scratch to meet your specific needs.</li>
            <li><strong>Measurable Results:</strong> Not just engagement—retention, referrals, and sentiment too.</li>
            <li><strong>End-to-End Management:</strong> From content to metrics—we handle it all.</li>
          </ul>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            FAQs About Community Engagement Services
          </h2>

          {/* FAQ Items (NO map used) */}
          <div className="border-b border-gray-300 pb-3">
            <button
              onClick={() => toggleFAQ(0)}
              className="text-left w-full text-lg font-medium flex justify-between items-center"
            >
              What platforms do you support?
              <span>{openIndex === 0 ? "▲" : "▼"}</span>
            </button>
            {openIndex === 0 && (
              <p className="text-gray-300 mt-2">
                We support platforms like Facebook, LinkedIn, Reddit, and niche forums.
              </p>
            )}
          </div>

          <div className="border-b border-gray-300 pb-3">
            <button
              onClick={() => toggleFAQ(1)}
              className="text-left w-full text-lg font-medium flex justify-between items-center"
            >
              How often do you interact with the community?
              <span>{openIndex === 1 ? "▲" : "▼"}</span>
            </button>
            {openIndex === 1 && (
              <p className="text-gray-300 mt-2">
                Daily or as per engagement plan to keep communities active.
              </p>
            )}
          </div>

          <div className="border-b border-gray-300 pb-3">
            <button
              onClick={() => toggleFAQ(2)}
              className="text-left w-full text-lg font-medium flex justify-between items-center"
            >
              Can you help build a new community?
              <span>{openIndex === 2 ? "▲" : "▼"}</span>
            </button>
            {openIndex === 2 && (
              <p className="text-gray-300 mt-2">
                Yes! We specialize in building communities from the ground up.
              </p>
            )}
          </div>

          <div className="border-b border-gray-300 pb-3">
            <button
              onClick={() => toggleFAQ(3)}
              className="text-left w-full text-lg font-medium flex justify-between items-center"
            >
              How do you handle negative feedback?
              <span>{openIndex === 3 ? "▲" : "▼"}</span>
            </button>
            {openIndex === 3 && (
              <p className="text-gray-300 mt-2">
                With empathy and professionalism—every comment is an opportunity.
              </p>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            What Results Can You Expect from GrowthShark?
          </h2>

          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Consistent Content Delivery:</strong> Stay top-of-mind with high-quality posts.</li>
            <li><strong>Improved Engagement:</strong> Content that sparks interaction.</li>
            <li><strong>Time Savings:</strong> We handle the workload so you can focus elsewhere.</li>
            <li><strong>Measurable Results:</strong> Reports that track and improve performance.</li>
            <li><strong>Improved Engagement Rates:</strong> Watch your community grow.</li>
            <li><strong>37% Higher Retention:</strong> Through consistent meaningful engagement.</li>
            <li><strong>Enhanced Reputation:</strong> Through thoughtful interactions.</li>
            <li><strong>Organic Growth:</strong> Satisfied members attract new ones.</li>
          </ul>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Let’s Build a Thriving Community Together
          </h2>
          <p className="text-gray-300">
            Your community is your greatest asset—if nurtured correctly. Let GrowthShark help you build a thriving, loyal audience that strengthens your brand and drives long-term growth.
          </p>
          <div className="flex gap-4">
    
<button className="px-6 py-3 bg-sky-300 text-black rounded-md font-semibold hover:bg-sky-400 transition cursor-pointer">
  <Link to="/contact">Contact Us</Link>
</button>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}