import { FaInbox, FaBullhorn, FaChartLine, FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
const EmailCampaigns = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white py-20 px-6 ">
      <div className=" sm:py-15 max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          The Power of <span className="text-sky-300">Email Campaigns</span> in 2025
        </h1>

        {/* Did You Know Box */}
        <div className=" mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2 text-sky-300"> Did You Know?</h2>
          <p className="text-gray-300 max-w-4xl mx-auto">
            Email marketing offers a staggering ROI of <strong>4200%</strong>, making every $1 spent return up to $42. It remains one of the most effective channels to engage and convert your audience.
          </p>
        </div>

        {/* What Are Email Campaigns */}
        <div className="mb-12  max-w-6xl mx-auto text-center bg-sky-400 rounded-2xl shadow-2xl p-6">
          <h2 className="text-3xl font-bold mb-4 text-black">What Are Email Campaigns?</h2>
          <p className="text-gray-800">
            Email campaigns are targeted messages sent to a user’s inbox to build relationships, drive engagement, and encourage conversions.
            They can range from promotional messages to personalized sequences with specific goals.
          </p>
        </div>

        {/* Why Email Campaigns Matter */}
        <div className="mb-12  max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Email Campaigns Matter</h2>
          <p className="text-gray-300">
            With email usage still massive and consistent across demographics, businesses use campaigns to directly connect, inform, and convert their audiences.
          </p>
        </div>

       {/* Benefits Cards */}
<div className="flex flex-wrap justify-center gap-7 mb-16 max-w-6xl mx-auto">

  {/* Card 1 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[23%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <FaInbox className="text-3xl text-[#2ea9ff] mb-4" />
    <h3 className="text-xl font-semibold mb-2">Direct Access to Your <br/>Audience</h3>
    <p className="text-gray-300">
      Emails land directly in your customer's inbox—unlike social algorithms—ensuring reliable reach.
    </p>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[23%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <FaBullhorn className="text-3xl text-[#2ea9ff] mb-4" />
    <h3 className="text-xl font-semibold mb-2">Personalization <br/>Opportunities</h3>
    <p className="text-gray-300">
      Personalized emails increase click-through rates by 14% and conversions by 10%, boosting engagement.
    </p>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[23%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <FaChartLine className="text-3xl text-[#2ea9ff] mb-4" />
    <h3 className="text-xl font-semibold mb-2">High Conversion <br/>Rates</h3>
    <p className="text-gray-300">
      Email campaigns consistently outperform other channels, with 66% of consumers purchasing based on email marketing.
    </p>
  </div>

  {/* Card 4 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[23%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <FaDollarSign className="text-3xl text-[#2ea9ff] mb-4" />
    <h3 className="text-xl font-semibold mb-2">Cost <br/>Effectiveness</h3>
    <p className="text-gray-300">
      One of the most affordable ways to engage a large audience while achieving unmatched ROI.
    </p>
  </div>
</div>


        {/* Services Section */}
        <div className='bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 mb-10 max-w-6xl mx-auto'>
          <h2 className="text-3xl font-bold mb-6 text-white">GrowthShark Email Campaign Services</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li><strong>Campaign Strategy & Planning:</strong> Custom strategies based on your audience and goals.</li>
            <li><strong>List Building & Segmentation:</strong> We segment lists by behavior, location, interests, and more.</li>
            <li><strong>Compelling Content:</strong> Personalized copy and design that converts.</li>
            <li><strong>Automation & Drip Sequences:</strong> Smart campaigns that run on autopilot.</li>
            <li><strong>Testing & Optimization:</strong> A/B testing for subject lines, layouts, and CTAs to boost performance.</li>
            <li><strong>Detailed Reporting:</strong> We track open rates, CTRs, and ROI to fine-tune campaigns.</li>
          </ul>
        </div>

        {/* Services List */}
        <div className='max-w-6xl mx-auto'>
        <h2 className="text-3xl font-bold mb-6">GhorthShark Email Campaign Services</h2>
        <ul className="list-none space-y-4 mb-16">
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Strategy & Planning:</strong> Custom strategies tailored to your business model and audience.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>List Building & Segmentation:</strong> Smart list strategies based on behavior, demographics, and preferences.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Compelling Content Creation:</strong> Engaging emails that spark curiosity and drive action.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Email Design & Automation:</strong> Beautiful, responsive emails with automated delivery workflows.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>A/B Testing:</strong> Optimize performance by testing subject lines, content, and CTAs.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Performance Tracking:</strong> Track open rates, click-throughs, and conversions for continuous improvements.</p>
          </li>
        </ul>
      </div>
        {/* Campaign Types */}
        <h2 className="text-3xl font-bold  text-center mb-10">Types of Email Campaigns We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">

          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Welcome Emails</h3>
            <p className="text-gray-300">
              Make a strong first impression with onboarding emails that introduce your brand and drive engagement.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Nurture Campaigns</h3>
            <p className="text-gray-300">
              Keep your audience engaged over time with product updates, exclusive tips, and value-packed content.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Re-Engagement Campaigns</h3>
            <p className="text-gray-300">
              Win back inactive subscribers with compelling campaigns designed to reignite interest.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Promotional Campaigns</h3>
            <p className="text-gray-300">
              Drive sales with time-limited offers, seasonal deals, and personalized product promos.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Abandoned Cart Emails</h3>
            <p className="text-gray-300">
              Recover lost revenue with reminders and incentives for customers who didn’t complete their checkout.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Event Invitations</h3>
            <p className="text-gray-300">
              Promote webinars, sales events, or product launches with compelling invitations and follow-ups.
            </p>
          </div>
        </div>

        {/* Benefits List */}
        <div className='max-w-6xl mx-auto'>
        <h2 className="text-3xl font-bold mb-6">How Email Campaigns Benefit Your Business</h2>
        <ul className="list-none space-y-4 mb-10">
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Build Stronger Relationships:</strong> Personalized engagement leads to trust and loyalty.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Drive More Sales:</strong> Guide your audience through the buyer journey with timely, targeted content.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Boost Brand Awareness:</strong> Consistent emails keep your brand top-of-mind.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Cost-Effective Marketing:</strong> One of the highest ROI channels available for marketers today.</p>
          </li>
        </ul>
        </div>

          {/* Title */}
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Real-World Examples of <br className="hidden md:block" />
          <span className="text-sky-300">Effective Email Campaigns</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">

          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">
              Welcome Series for an E-Commerce Brand
            </h3>
            <p className="text-gray-300">
              An online fashion retailer implemented a welcome series that boosted first-time purchases by <strong>20%</strong> within two months.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">
              Re-Engagement Campaign for a Subscription Service
            </h3>
            <p className="text-gray-300">
              A subscription box brand re-engaged inactive users with personalized discounts, achieving a <strong>35% reactivation rate</strong>.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">
              Product Launch Emails for a Tech Brand
            </h3>
            <p className="text-gray-300">
              A tech company used teaser and launch emails to drive <strong>40% of pre-orders</strong> through email marketing alone.
            </p>
          </div>
        </div>

        {/* Why Choose GrowthShark */}
        <h2 className="text-3xl font-bold mb-6">Why Choose GrowthShark for Email Campaigns?</h2>
        <ul className="list-none space-y-4 mb-16">
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Tailored Strategies:</strong> Campaigns built around your brand, audience, and goals.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Creative Execution:</strong> Eye-catching copy and professional designs that convert.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Advanced Technology:</strong> Automation, A/B testing, and real-time reporting.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Proven Results:</strong> Boosted engagement, conversions, and revenue across industries.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Dedicated Support:</strong> End-to-end guidance to ensure your success.</p>
          </li>
        </ul>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold mb-4">Start Your Email Campaigns Today</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your audience is waiting. With GrowthShark, you gain the full power of email to build trust, boost conversions, and grow your brand. Let’s talk strategy and results—no fluff.
        </p>
        <div className="flex gap-4 justify-center mt-10">

<button className="px-6 py-3 bg-sky-300 text-black rounded-md font-semibold hover:bg-sky-400 transition cursor-pointer">
  <Link to="/contact">Contact Us</Link>
</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCampaigns;
