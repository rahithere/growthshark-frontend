import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CopywritingSection() {
  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-30 sm:py-30">
    <section className="max-w-6xl mx-auto ">
      <Helmet>
        <title>Grow your brand & reach with easy, effective content creation | Growthshark</title>
        <meta name="description" content="Transform your content with professional copywriting services with Growthshark. Drive engagement & sales and start growing your brand now!" />
      </Helmet>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
        The Power of <span className="text-sky-300">Copywriting</span> in 2025
      </h2>

      {/* Did You Know */}
      <div className="mb-12">
        <h3 className="text-2xl  mb-2 text-sky-300 font-bold text-center">Did You Know?</h3>
        <p className="mb-4 text-gray-300 text-center max-w-4xl mx-auto">
          that 87% of consumers are more likely to buy from a brand with consistent and engaging messaging (Lucidpress)? That businesses that consistently publish content experience 55% more website traffic than those that don’t (HubSpot).
        </p>
        <p className="text-gray-300 text-center max-w-4xl mx-auto">
          What makes brands like Apple, Nike, or Coca-Cola stand out beyond their products? The words. Apple’s “Think Different,” Nike’s “Just Do It,” and Coca-Cola’s evocative storytelling all stem from powerful copywriting that captures attention, informs, and drives action.
        </p>
      </div>

      {/* Transform Message */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4 max-w-4xl mx-auto text-center">
          The right words can transform how people perceive your brand and motivate them to engage, buy, and stay loyal
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto text-center">
          At GrowthShark, we believe in the business power of words that resonate, inspire, and convert. Whether you’re launching a product, running a campaign, or revamping your website, our copywriting services ensure your message cuts through the noise and makes an impact.
        </p>
      </div>

      {/* Why Copywriting Matters */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Why Professional Copywriting Matters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h4 className="text-xl font-semibold mb-2">Words Shape First Impressions</h4>
            <p className="text-gray-300">
              Your website, emails, ads, and social media are often the first interaction people have with your business. <strong>38% of users stop engaging with content if it isn’t visually or textually appealing </strong>(Adobe).
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h4 className="text-xl font-semibold mb-2">Clarity in a Crowded Market</h4>
            <p className="text-gray-300">
              Every industry is crowded, with countless competitors vying for attention. Strong copy cuts through the noise by clearly articulating your unique value. Companies that communicate clearly are <strong>3x more likely</strong> to convert leads (Forrester).
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h4 className="text-xl font-semibold mb-2">Emotional Connection Drives Loyalty</h4>
            <p className="text-gray-300">
             Great copy doesn’t just sell—it makes people feel something. Businesses that emotionally connect with their audience outperform competitors by <strong>85% in sales growth</strong> (Gallup).
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h4 className="text-xl font-semibold mb-2">Boost ROI Across Channels</h4>
            <p className="text-gray-300">
              Whether you’re remarketing ads or sending emails, good copy directly impacts your bottom line. For example, <strong>Emails with strong subject lines</strong> have a <strong>50% higher open rate</strong> (Campaign Monitor).
              <br/>
              <strong>Well-written landing pages</strong> see conversion rates up to <strong>15% higher</strong> than the average (Unbounce).
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl px-5 my-5">
        <h3 className="text-2xl font-bold py-10">What GrowthShark Offers in Copywriting Services</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-300 pb-10">
          <li>
            <strong>Website Copywriting:</strong>  {" "}Your website is your digital storefront. We craft clear, persuasive copy that turns visitors into customers. Example: A SaaS client saw a 30% increase in sign-ups after we rewrote their homepage copy to focus on customer pain points and benefits.
          </li>
          <li>
            <strong>Email Copywriting:</strong> {" "}  From subject lines to CTAs, every word in your email matters. We write emails that stand out in crowded inboxes and drive action. Results: Clients see average email open rates improve by 25% and click-through rates increase by 20% after implementing our copy.
          </li>
          <li>
            <strong>Ad Copywriting:</strong> 
             {" "}Whether it’s Google Ads, Facebook, or LinkedIn, we create ad copy that grabs attention and drives clicks. Example: A retail client’s ad campaign delivered a 5x return on ad spend (ROAS) with copy that emphasized urgency and value.
          </li>
          <li>
            <strong>Social Media Copywriting:</strong> 
            {" "}We craft captions, headlines, and posts that are tailored to your audience and platform, ensuring maximum engagement.
          </li>
          <li>
            <strong>Sales Pages and Landing Pages:</strong> {" "}We specialize in writing high-converting sales pages that communicate value and drive immediate action. Example: A landing page for an e-learning platform achieved a 40% increase in sign-ups with our optimized copy.
          </li>
        </ul>
      </div>
      <section className="max-w-6xl mx-auto mb-20 ">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Approach to Copywriting</h2>
       
        <div className="flex flex-wrap justify-center gap-5 mb-16">
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h4 className="text-xl font-semibold mb-2">Research-Driven Insights</h4>
    <p className="text-gray-300">
     Good copy starts with understanding your audience. We dive deep into their needs, challenges, and motivations, ensuring every word we write speaks directly to them.
    </p>
  </div>
  
  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h4 className="text-xl font-semibold mb-2">Focus on Benefits, Not Features</h4>
    <p className="text-gray-300">
     Customers don’t just want to know what you do—they want to know how it will help them. We highlight the benefits of your product or service, making it clear why you’re the best choice.
    </p>
  </div>

  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h4 className="text-xl font-semibold mb-2">Tone and Voice Alignment</h4>
    <p className="text-gray-300">
      Whether your brand voice is professional, playful, or somewhere in between, we adapt our writing to match your unique style.
    </p>
  </div>

  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h4 className="text-xl font-semibold mb-2">Storytelling that Resonates</h4>
    <p className="text-gray-300">
      Stories sell. We use storytelling techniques to connect emotionally with your audience, making your brand more relatable and memorable.
    </p>
  </div>

  <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[32%] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h4 className="text-xl font-semibold mb-2">Clear Call to Action (CTA)</h4>
    <p className="text-gray-300">
      Every piece of copy we create includes a strong CTA, guiding your audience toward the next step—whether that’s making a purchase, signing up, or getting in touch.
    </p>
  </div>
</div>

      </section>

      {/* Section 2: Why Choose GrowthShark */}
      <section className="max-w-6xl mx-auto mb-20 bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-start hover:scale-105 transition shadow-lg backdrop-blur">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose GrowthShark for Copywriting?</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>
            <strong>Experience Across Industries:</strong> From technology and healthcare to e-commerce and education, we’ve written for diverse sectors, tailoring our approach to meet each client’s unique needs.
          </li>
          <li>
            <strong>Proven Results:</strong> Our copy doesn’t just sound good—it delivers measurable outcomes. ● A fashion brand saw a 50% increase in online sales after we reworked their product descriptions. ● A B2B tech company doubled their lead conversions with an optimized email sequence.
          </li>
          <li>
            <strong>Data-Driven Creativity:</strong>  We combine creativity with analytics, ensuring that your copy is not only engaging but also backed by data.
          </li>
          <li>
            <strong>End-to-End Support:</strong> :From brainstorming to final edits, we handle the entire copywriting process, so you can focus on running your business.
          </li>
        </ul>
      </section>

      {/* Section 3: FAQs */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQs About Copywriting Services</h2>
        <div className="space-y-4">
          <details className=" bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center  shadow-lg backdrop-blur cursor-pointer">
            <summary className="font-medium">How is copywriting different from content writing?</summary>
            <p className="mt-2 text-gray-300">
               While content writing focuses on informing and educating, copywriting is designed to persuade and drive action. It’s ideal for ads, sales pages, and emails.
            </p>
          </details>
          <details className=" bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center  shadow-lg backdrop-blur cursor-pointer ">
            <summary className="font-medium">Can you match my brand’s tone of voice?</summary>
            <p className="mt-2 text-gray-300">
             Absolutely. Whether your brand is fun, formal, or somewhere in between, we’ll adapt our writing to reflect your unique identity.
            </p>
          </details>
          <details className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center  shadow-lg backdrop-blur cursor-pointer ">
            <summary className="font-medium">How long does it take to create copy?</summary>
            <p className="mt-2 text-gray-300">
              Depending on the scope, we typically deliver projects within 5-10 business days.
            </p>
          </details>
          <details className=" cursor-pointer bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center  shadow-lg backdrop-blur">
            <summary className="font-medium">Do you offer revisions?</summary>
            <p className="mt-2 text-gray-300">
             Yes, we offer multiple revisions to ensure the final copy aligns with your vision.
            </p>
          </details>
        </div>
      </section>

      {/* Section 4: Results + CTA */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Results You Can Expect</h2>
        <p className="text-lg text-gray-300 mb-8">
         Here’s what you can achieve with GrowthShark’ copywriting services:
        </p>
        <ul className="text-gray-300 mb-12 space-y-2 max-w-4xl mx-auto">
          <li><strong>Increased Conversions:</strong> Clients see an average of <strong>20-40% improvement </strong>in sales or leads after implementing our copy.</li>
          <li><strong>Stronger Brand Messaging:</strong> Consistent, compelling communication across all channels.</li>
          <li><strong>Higher Engagement:</strong> Copy that captures attention and keeps your audience interested.</li>
        </ul>

        <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center  shadow-lg backdrop-blur">
          <h3 className="text-2xl font-semibold mb-4">Let’s Start Crafting Copy That Converts</h3>
          <p className="mb-6 text-gray-300">
           Your audience is waiting to hear from you. Let GrothShark help you communicate your value and drive results with expert copywriting. Contact us today for a free consultation and take the first step toward better communication.
          </p>
        <div className="flex gap-4 justify-center mt-10">
     
<button className="px-6 py-3 bg-sky-300 text-black rounded-md font-semibold hover:bg-sky-400 transition cursor-pointer">
  <Link to="/contact">Contact Us</Link>
</button>
        </div>
        </div>
      </section>
    </section>
    </div>
  );
}
