import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FacebookMarketing2025 = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-30 sm:py-28">
      <Helmet>
        <title>Grow Your Brand with Facebook Marketing – Get Started Today</title>
        <meta name="description" content="Reach your ideal audience and boost engagement with expert Facebook marketing. Start growing your brand now!" />
      </Helmet>
      <div className="max-w-6xl mx-auto space-y-20" >

        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          The Power of <span className="text-sky-300">Facebook Marketing</span> in 2025
        </h1>

        {/* Did You Know */}
        <div className=" mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-sky-300"> Did You Know?</h2>
          <p className="text-gray-300">
            Facebook remains the largest social media platform with over <strong>2.9 billion active users</strong>, making it a crucial place to connect with your audience and drive measurable results.
          </p>
        </div>

        {/* Big Statement + Why It Matters */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-sky-400 rounded-2xl shadow-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Facebook is more than just a social media platform—
              <br className="hidden md:block" />
              it’s a marketplace, a discovery tool, and a branding hub all in one.
            </h3>
            <p className="text-gray-800">
              Whether you’re a small business or large enterprise, it’s time your business meets them where they are—on Facebook. From brand awareness to lead generation, we help you win on the world’s biggest stage.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6  shadow-lg backdrop-blur">
            <h3 className="text-2xl font-bold mb-4">
              Why Facebook Marketing Is Crucial for Your Business
            </h3>
            <p className="text-gray-300">
              Our proven strategies focus on organic reach and laser-targeted ads, helping you engage users and convert followers into loyal customers—all while tracking ROI.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

          {/* Card 1 */}
          <div className=" bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 text-center">
            <h4 className="text-xl font-semibold mb-2 text-sky-300 ">Unmatched Audience Reach</h4>
            <p className="text-gray-300 text-center">
              Facebook lets you reach billions, allowing precise audience targeting across all demographics.
            </p>
          </div>

          {/* Card 2 */}
          <div className=" bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
            <h4 className="text-xl font-semibold mb-2 text-sky-300 text-center">Precision <br/> Targeting</h4>
            <p className="text-gray-300 text-center">
              Target users by age, interests, behavior, and location—getting your ads in front of the right eyes at the right time.
            </p>
          </div>

          {/* Card 3 */}
          <div className=" bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 text-center">
            <h4 className="text-xl font-semibold mb-2 text-sky-300">Cost-Effective Advertising</h4>
            <p className="text-gray-300">
              Compared to traditional media, Facebook ads are affordable, scalable, and result-driven for all budgets.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
            <h4 className="text-xl font-semibold mb-2 text-sky-300 text-center">Performance <br/> Analytics</h4>
            <p className="text-gray-300 text-center">
              Real-time metrics let you measure performance and ROI with clarity—adjust and scale as needed.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <h2 className="text-3xl font-bold mb-8">Our Facebook Marketing Services</h2>
        <ul className="list-none space-y-5 text-gray-300">
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#1877f2] mt-1" />
            <p><strong>Facebook Ad Campaigns:</strong> Custom campaigns tailored to meet your business goals—lead gen, sales, or brand growth.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#1877f2] mt-1" />
            <p><strong>Content Creation:</strong> We design scroll-stopping creatives that build trust and generate conversions.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#1877f2] mt-1" />
            <p><strong>Audience Targeting & Retargeting:</strong> Reach new users and re-engage past visitors using Facebook's powerful targeting tools.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#1877f2] mt-1" />
            <p><strong>Page Management:</strong> Optimize your page for engagement with regular posts, reels, and story strategies aligned to your brand.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#1877f2] mt-1" />
            <p><strong>Performance Tracking:</strong> Track, measure, and optimize every campaign based on data—not guesswork.</p>
          </li>
        </ul>
         <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center mb-10">
          How GrowthShark Creates <span className="text-sky-300">Winning Facebook Campaigns</span>
        </h2>

        {/* Strategy Steps - Grid */}
        <div className="flex flex-wrap justify-center gap-5 mb-20 max-w-6xl mx-auto">

  {/* Card 1 */}
  <div className="w-full sm:w-[90%] md:w-[40%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-bold mb-2">Goal Setting</h3>
    <p className="text-gray-300">
      Define the campaign goal—more leads, more sales, brand awareness. This guides the entire strategy.
    </p>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[90%] md:w-[40%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-bold mb-2">Audience Research</h3>
    <p className="text-gray-300">
      We research your ideal customer, analyzing interests, location, behaviors, and pain points for hyper-targeted messaging.
    </p>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[90%] md:w-[40%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-bold mb-2">Ad Design & Content Creation</h3>
    <p className="text-gray-300">
      Our creatives are built to stop the scroll—engaging visuals and copy that connect emotionally and convert.
    </p>
  </div>

  {/* Card 4 */}
  <div className="w-full sm:w-[90%] md:w-[40%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-bold mb-2">A/B Testing</h3>
    <p className="text-gray-300">
      Headlines, visuals, CTAs—we test it all to discover what drives the best click-through and conversion rates.
    </p>
  </div>

  {/* Card 5 */}
  <div className="w-full sm:w-[90%] md:w-[40%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
    <p className="text-gray-300">
      Facebook’s algorithm evolves daily—we continuously monitor and adjust campaigns to stay ahead.
    </p>
  </div>
</div>

        {/* Why Instagram */}
        <h2 className="text-3xl font-bold mb-6">Why Choose GrowthShark for Instagram Marketing?</h2>
        <ul className="space-y-4 text-gray-300 mb-12">
          <li className="flex gap-3">
            <FaCheckCircle className="text-[#1877f2] mt-1" />
            <p><strong>Industry Expertise:</strong> From retail to SaaS, we understand platform-specific nuances and user behavior.</p>
          </li>
          <li className="flex gap-3">
            <FaCheckCircle className="text-[#1877f2] mt-1" />
            <p><strong>Data-Driven Strategy:</strong> We don’t guess—we analyze. Every creative decision is backed by performance data.</p>
          </li>
          <li className="flex gap-3">
            <FaCheckCircle className="text-[#1877f2] mt-1" />
            <p><strong>Comprehensive Support:</strong> From planning to reporting, we handle everything so you can focus on running your business.</p>
          </li>
        </ul>

        {/* FAQs */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-16">
          <details className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center">
            <summary className="cursor-pointer font-medium">Is Facebook Marketing suitable for small businesses?</summary>
            <p className="mt-2 text-gray-300">Yes! Facebook ads can be scaled for any budget while still reaching the right audience.</p>
          </details>
          <details className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center">
            <summary className="cursor-pointer font-medium">How long does it take to see results?</summary>
            <p className="mt-2 text-gray-300">Typically within 2–6 weeks depending on ad spend, industry, and strategy.</p>
          </details>
          <details className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center">
            <summary className="cursor-pointer font-medium">Do you handle ad creatives?</summary>
            <p className="mt-2 text-gray-300">Yes. Our team handles visual and written creatives designed to boost engagement and conversions.</p>
          </details>
        </div>

        {/* Results Section */}
        <h2 className="text-3xl font-bold mb-6">What You Can Expect from GrowthShark</h2>
        <div className="text-gray-300 mb-20">
          <p><strong className="text-white">Higher Engagement:</strong> Our campaigns increase likes, shares, saves, and DMs from your audience.</p>
          <p><strong className="text-white">Improved ROI:</strong> Clients working with us often see an average 3x return within their first three months.</p>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold mb-4">Let’s Take Your Facebook Marketing to the Next Level</h2>
          <p className="text-lg text-gray-300 mb-4">
            Whether you're just getting started or ready to scale, we’ll craft campaigns that deliver results. Book your free strategy call today.
          </p>
        <div className="flex gap-4 justify-center mt-10">
         
<button className="px-6 py-3 bg-sky-300 text-black rounded-md font-semibold hover:bg-sky-400 transition cursor-pointer">
  <Link to="/contact">Contact Us</Link>
</button>
        </div>
        </div>

      </div>
      </div>
    </section>
  );
};

export default FacebookMarketing2025;
