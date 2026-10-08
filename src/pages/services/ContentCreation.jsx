
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ContentCreationSection() {
  return (
    <section className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-30 sm:py-30">
      <Helmet>
        <title>Grow your brand & reach with easy, effective content creation | Growthshark</title>
        <meta name="description" content="Engage your audience with content that connects & converts. Increase your reach, build a strong brand, and start growing your online presence today with GrowthShark." />
      </Helmet>
      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
            The Power of <span className="text-sky-300">Content Creation</span> in 2025
          </h2>
          <h3 className="text-2xl font-semibold text-sky-400 mb-6">Did You Know?</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Businesses that consistently publish content experience <strong>55% more website traffic</strong> than those that don’t (HubSpot).
          </p>
        </div>

        {/* Highlighted Quote */}
        <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 hover:scale-105 transition shadow-lg backdrop-blur md:p-12 mb-16 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
            That’s why creating quality content isn’t just important—it’s essential.
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            But without a clear plan, even the best content can fall flat. At GrowthShark, we specialize in crafting impactful content and delivering it at the right time, ensuring your audience stays engaged and your brand remains consistent.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-16 mb-20 items-start">
          {/* Left: Benefits */}
          <div >
            <h3 className="text-3xl font-bold mb-6">
              Why Content Creation & Scheduling Matter
            </h3>
            <div className="space-y-8 text-gray-300">
              <div>
                <h4 className="text-xl font-semibold">💡 Save Time and Resources</h4>
                <p className="text-gray-400">
                  Creating and managing content can be overwhelming, especially when juggling other responsibilities. By outsourcing these tasks, you free up time to focus on your business while we handle the creative process.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">⏰ Maintain Consistency</h4>
                <p className="text-gray-400">
                 Consistency is key to building trust. A well-scheduled content calendar ensures your audience hears from you regularly, keeping your brand top-of-mind.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">📈 Maximize Audience Engagement</h4>
                <p className="text-gray-400">
                 Posting at the right time significantly improves engagement. Our scheduling strategies ensure your content reaches your audience when they’re most active.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">🚀 Streamline Your Marketing</h4>
                <p className="text-gray-400">
                 Content scheduling eliminates the guesswork and chaos of last-minute posts. It brings structure to your marketing efforts, making them more efficient and effective.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Offer List */}
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              What GrowthShark Offers in <br />
              Content Creation & Scheduling Services
            </h3>
            <ul className="space-y-4 text-gray-300 text-base">
              <li className="flex items-start gap-2">
                <GoDotFill className="text-green-500 mt-1 " />
                Custom Content Development: We create high-quality content tailored to your brand voice, goals, and audience preferences. From blogs and articles to social media posts and videos, our content is designed to inform, engage, and convert.
              </li>
              <li className="flex items-start gap-2">
                <GoDotFill className="text-green-500 mt-1" />
                Comprehensive Content Calendar :Our team develops a detailed content calendar, outlining what, where, and when to post. This ensures your messaging is strategic, timely, and cohesive.
              </li>
              <li className="flex items-start gap-2">
                <GoDotFill className="text-green-500 mt-1" />
                Platform-Specific Strategies :Not all platforms are the same, and neither is the content that performs best on them. We tailor content formats and schedules for each platform, whether it’s Instagram, LinkedIn, or your blog.
              </li>
              <li className="flex items-start gap-2">
                <GoDotFill className="text-green-500 mt-1" />
               Advanced Scheduling Tools: We use industry-leading scheduling tools to automate posts and monitor performance. This ensures your content is published consistently without manual intervention.
              </li>
              <li className="flex items-start gap-2">
                <GoDotFill className="text-green-500 mt-1" />
                Performance Analytics :Tracking content performance is crucial to understanding what works. We provide detailed reports with actionable insights, helping you refine your strategy over time.
              </li>
            </ul>
          </div>
        </div>
         {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">How GrowthShark Ensures Content Success</h2>

     <div className="flex flex-wrap justify-center gap-5 mb-16 text-center max-w-6xl mx-auto">
  {/* Card 1 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-semibold mb-2">Understand Your Goals</h3>
    <p>We begin by understanding your business objectives. Whether you want to drive traffic, generate leads, or build brand awareness, your goals shape our content strategy.</p>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-semibold mb-2">Audience Research</h3>
    <p>Knowing your audience is critical. We analyze their demographics, behaviors, and preferences to create content that resonates.</p>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-semibold mb-2">Crafting Compelling Content</h3>
    <p>Our team creates engaging, high-quality content that aligns with your brand voice and speaks directly to your audience’s needs.</p>
  </div>

  {/* Card 4 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-semibold mb-2">Strategic Scheduling</h3>
    <p>We identify the best times to publish content based on your audience’s activity patterns, ensuring maximum reach and engagement.</p>
  </div>

  {/* Card 5 */}
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h3 className="text-xl font-semibold mb-2">Ongoing Optimization</h3>
    <p>Content success requires continuous improvement. We monitor performance metrics like clicks, shares, and conversions to refine your strategy.</p>
  </div>
</div>


      {/* Why Choose Section */}
      <div className="mx-w-6xl mx-auto text-start px-5 bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6  hover:scale-105 transition shadow-lg backdrop-blur mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 mt-5">Why Choose GrowthShark for Content Creation & Scheduling?</h2>
      <ul className="list-disc list-inside space-y-2 mb-12 mt-5">
        <li><strong>Experienced Content Creators:</strong> Our team has extensive experience creating content across industries, from tech and healthcare to retail and hospitality.</li>
        <li><strong>Tailored Strategies:</strong> No two brands are the same, and neither are our strategies. Every piece of content we create is customized to fit your unique goals and audience.</li>
        <li><strong>End-to-End Service:</strong> We handle everything from ideation and creation to scheduling and performance analysis, so you can focus on your business.</li>
        <li><strong>Proven Results:</strong> ● A B2B client saw a 30% increase in website traffic after implementing our content and scheduling strategy. ● A retail brand experienced a 40% boost in engagement on social media with our tailored scheduling plan.</li>
      </ul>
      </div>
      {/* FAQ */}
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
      <div className="space-y-4 mb-12 max-w-6xl mx-auto">
        <details className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center shadow-lg backdrop-blur cursor-pointer">
          <summary className="font-medium">What types of content do you create?</summary>
          <p className="mt-2 text-sm">We create a wide range of content, including blogs, social media posts, videos, infographics, and more.ting 3-5 times per week, depending on their audience and goals.</p>
        </details>
        <details className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center  shadow-lg backdrop-blur cursor-pointer">
          <summary className="font-medium">How far in advance do you schedule content?</summary>
          <p className="mt-2 text-sm">Typically, we plan and schedule content 30-60 days in advance, but we remain flexible to accommodate real-time updates and trends.</p>
        </details>
        <details className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center shadow-lg backdrop-blur cursor-pointer">
          <summary className="font-medium">Can I review the content before it's published?</summary>
          <p className="mt-2 text-sm">Absolutely. We provide drafts for your approval to ensure the content aligns with your vision and goals.</p>
        </details>
        <details className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center  shadow-lg backdrop-blur cursor-pointer">
          <summary className="font-medium">What platforms do you support?</summary>
          <p className="mt-2 text-sm">We create and schedule content for platforms like Instagram, Facebook, LinkedIn, Twitter, blogs, and email newsletters.</p>
        </details>
      </div>

      {/* Final Section */}
      <div className="bg-sky-400 rounded-2xl">
      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black px-6 pt-5">What You Can Expect from GrowthShark</h3>
      <ul className="list-disc list-inside space-y-2 pb-8 px-6 pt-5 text-gray-800">
        <li><strong className="text-black">Consistent content delivery:</strong> Stay top-of-mind with regular, high-quality posts.</li>
        <li><strong className="text-black">Improved Engagement:</strong> Content that connects with your audience and encourages interaction.</li>
        <li><strong className="text-black">Time Savings:</strong> Let us handle the workload so you can focus on your core business.</li>
         <li><strong className="text-black">Measurable Results:</strong> Detailed performance reports to track your progress and optimize your strategy.</li>
      </ul>
    </div>
    <div className="mt-10 bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center shadow-lg backdrop-blur">
      <h3 className="text-xl sm:text-2xl font-semibold text-center mt-10">Let’s Simplify Your Content Marketing</h3>
      <p className="mt-2 text-gray-300 text-center max-w-3xl mx-auto">
        Your audience is waiting for valuable, engaging content. GrowthShark’ content creation and scheduling services make it easy to stay consistent, connect with your audience, and achieve your marketing goals. Contact us today to get started!
      </p>
      <div className="flex gap-4 mt-10 justify-center">
 
<button className="px-6 py-3 bg-sky-300 text-black rounded-md font-semibold hover:bg-sky-400 transition cursor-pointer">
  <Link to="/contact">Contact Us</Link>
</button>
        </div>
        </div>
      </div>
    </section>
  );
}
