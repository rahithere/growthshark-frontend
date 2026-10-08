import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function InstagramMarketingSection() {
  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-30 sm:py-30">
      <Helmet>
        <title>Increase Followers & Engagement on Instagram | Growthshark</title>
        <meta name="description" content="Build your brand and connect with Millennial & Gen-Z audiences with Growthshark. Launch your Instagram marketing strategy now!" />
      </Helmet>
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">The Power of <span  className="text-sky-300">Instagram Marketing</span> in 2025</h1>
          <p className="text-xl font-semibold text-sky-300">Did You Know?</p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With over 2 billion active monthly users, Instagram drives 83% of consumers to discover new products and services, making it a critical platform for brand growth.
          </p>
        </div>

        {/* Intro */}
        <div className="space-y-6 max-w-6xl mx-auto text-center bg-sky-400 rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-black">Instagram has become the go-to space for connecting with audiences.</h2>
          <p className="text-gray-800">
            It’s where your customers are scrolling, shopping, and sharing. But standing out in a sea of content takes more than just pretty pictures. At GrowthShark, we deliver measurable results.
          </p>
        </div>

        {/* Why it's a must */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Instagram Marketing Is a Must for Your Business</h2>
        </div>

        {/* 4 Feature Boxes */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2 text-sky-300">Massive Audience <br/>Potential</h3>
            <p className="text-gray-300">
              Instagram’s user base is diverse and perfect for targeting millennials and  <br/>Gen Z.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2 text-sky-300">Content That <br/>Connects</h3>
            <p className="text-gray-300">
              Instagram leads in engagement with reels, carousels, and interactive content.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2 text-sky-300">Personalization & <br/>Segmentation</h3>
            <p className="text-gray-300">
              Reach the right audience with tailored messaging, stories, and dynamic ads.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-2 text-sky-300">Automation That <br/>Makes Sense</h3>
            <p className="text-gray-300">
              Smart automation delivers your message when it matters the most.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="space-y-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">What GrowthShark Offers in Instagram Marketing Services?</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-semibold text-sky-300 mb-2">Account Management</h3>
              <p className="text-gray-300">
                Strategic planning and daily execution to keep your account fresh and engaging.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-semibold text-sky-300 mb-2">Content Creation</h3>
              <p className="text-gray-300">
                High-quality images, videos, stories, and reels tailored to your brand.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-semibold text-sky-300 mb-2">Growth Strategy</h3>
              <p className="text-gray-300">
                We focus on real engagement, not vanity metrics. Grow with purpose.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-semibold text-sky-300 mb-2">Performance Tracking</h3>
              <p className="text-gray-300">
                Measure what matters. Optimize your ROI through insightful analytics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-semibold text-sky-300 mb-2">Influencer Collaborations</h3>
              <p className="text-gray-300">
                We connect you with the right influencers to amplify your brand’s voice.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-semibold text-sky-300 mb-2">Hashtag & Trend Strategy</h3>
              <p className="text-gray-300">
                Boost reach by using optimized hashtags and staying on-trend.
              </p>
            </div>
          </div>
        </div>
 {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            How GrowthShark Creates Impactful Instagram Strategies
          </h2>
        </div>

        {/* Strategy Boxes */}
<div className="flex flex-wrap justify-center gap-5  mb-20 ">
  {/* Card 1 */}
  <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 w-full sm:w-[45%] lg:w-[32%]">
    <h3 className="text-xl font-semibold text-sky-300 mb-2">Understand Your Goals</h3>
    <p className="text-gray-300">
      Whether launching a new product or building a brand, we align strategy with your objectives.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 w-full sm:w-[45%] lg:w-[32%]">
    <h3 className="text-xl font-semibold text-sky-300 mb-2">Audience Insights</h3>
    <p className="text-gray-300">
      We analyze your audience’s preferences, behaviors, and interests to create resonant content.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 w-full sm:w-[45%] lg:w-[32%]">
    <h3 className="text-xl font-semibold text-sky-300 mb-2">Creative Content Development</h3>
    <p className="text-gray-300">
      From reels to carousels, we create engaging, platform-specific content that drives attention.
    </p>
  </div>

  {/* Card 4 */}
  <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 w-full sm:w-[45%] lg:w-[32%]">
    <h3 className="text-xl font-semibold text-sky-300 mb-2">Leveraging Instagram Features</h3>
    <p className="text-gray-300">
      Maximize reach using IGTV, shoppable posts, and stories designed to keep your audience engaged.
    </p>
  </div>

  {/* Card 5 */}
  <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 w-full sm:w-[45%] lg:w-[32%]">
    <h3 className="text-xl font-semibold text-sky-300 mb-2">Continuous Optimization</h3>
    <p className="text-gray-300">
      We monitor trends and tweak campaigns regularly for maximum long-term performance.
    </p>
  </div>
</div>


        {/* Why Choose Us */}
        <div className="space-y-6 ">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose GrowthShark for Instagram Marketing?</h2>
          <ul className="list-disc list-inside  text-gray-300 text-left space-y-2">
            <li><strong className="text-white">Experience Across Industries:</strong> From fashion to tech and more, we’ve helped diverse brands succeed.</li>
            <li><strong className="text-white">Proven Results:</strong> Our team delivers measurable, trackable results.</li>
            <li><strong className="text-white">Tailored Strategies:</strong> Every campaign is customized to your business goals and audience.</li>
            <li><strong className="text-white">End-to-End Support:</strong> From content to campaign management, we do it all.</li>
          </ul>
        </div>

        {/* FAQ Section – Static Accordion Look */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="max-w-6xl mx-auto space-y-4 text-center">

            <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl ">
              <div className="px-6 py-4 text-lg font-medium text-sky-300">
                How often should I post on Instagram?
              </div>
              <div className="px-6 pb-4 text-gray-300 text-sm">
                We recommend posting consistently 3–5 times per week to stay active and engaging.
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl  ">
              <div className="px-6 py-4 text-lg font-medium text-sky-300">
                Can you help with Instagram Ads?
              </div>
              <div className="px-6 pb-4 text-gray-300 text-sm">
                Yes! We manage ad campaigns from setup to optimization, targeting the right audience for best ROI.
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl ">
              <div className="px-6 py-4 text-lg font-medium text-sky-300">
                Is Instagram Marketing effective for small businesses?
              </div>
              <div className="px-6 pb-4 text-gray-300 text-sm">
                Absolutely! Small businesses thrive on Instagram through community building, local targeting, and engagement.
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl  ">
              <div className="px-6 py-4 text-lg font-medium text-sky-300">
                Do you create Instagram Reels?
              </div>
              <div className="px-6 pb-4 text-gray-300 text-sm">
                Yes, we script, design, and produce scroll-stopping Instagram Reels that grab attention and deliver results.
              </div>
            </div>

          </div>
        </div>

        {/* Final CTA Box */}
        <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6   max-w-6xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s Grow Your Brand on Instagram</h2>
          <p className="text-gray-300">
            Your audience is scrolling—let’s make sure they stop and engage with your brand. We’ll create campaigns that drive action and deliver real results.
          </p>
            <div className="flex gap-4 justify-center mt-10">
         
<button className="px-6 py-3 bg-sky-300 text-black rounded-md font-semibold hover:bg-sky-400 transition cursor-pointer">
  <Link to="/contact">Contact Us</Link>
</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramMarketingSection;
