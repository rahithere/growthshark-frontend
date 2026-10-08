import { Link } from "react-router-dom";
export default function CommunityManagement() {
  return (
    <section className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-30 sm:py-30">
      <div className="px-6 ">
      {/* Section Intro */}
      <div className="text-left ">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8  text-center">
          The Power of <span className="text-sky-300">Community Management </span>in 2025
        </h2>
        <h3 className="text-2xl font-semibold mb-2 text-sky-300 text-center">Did You Know?</h3>
        <p className="text-lg leading-relaxed text-gray-300 text-center mb-15 max-w-5xl mx-auto">
          Communities with strong engagement can increase customer retention rates by up to 90%! That’s right—creating and nurturing a vibrant, engaged audience is one of the most effective ways to build a sustainable business.
        </p>
      </div>

      {/* What / Why / How Section */}
      <div className="flex flex-col gap-8 text-left mb-20 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-2xl font-bold mb-3 text-sky-300 text-center">What Is Community Management?</h3>
         <div className="my-5">
           <p className="text-gray-300 leading-relaxed ">
            Community management is all about fostering meaningful connections between your brand and your audience. It’s not just answering comments or posting on social media—it’s about building relationships, creating value, and encouraging genuine interactions.<br/>
          </p>
          <p className="text-gray-300 leading-relaxed pt-3">
            At <strong>GrowthShark</strong>, community management is more than a service—it’s our passion. We help brands like yours cultivate loyal communities that amplify your message, boost engagement, and drive real results. Whether it’s a social media group, a forum, or a private membership platform, we’ll transform your audience into an engaged community.
          </p>
         </div>
        </div>
        <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-2xl font-bold mb-3 text-sky-300 text-center">Why Community Management Is a Game-Changer</h3>
         <div className="text-gray-300 leading-relaxed my-5">
  <ul className="list-disc list-inside space-y-1">
    <li>75% of consumers prefer brands that connect with them personally.</li>
    <li>Engaged communities lead to 233% higher profitability.</li>
    <li>Brands with communities grow faster and retain longer.</li>
  </ul>
</div>

        </div>
        <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-2xl font-bold mb-3 text-sky-300 text-center">How GrowthShark Can Help</h3>
          <p className="text-gray-300 leading-relaxed my-5">
            From strategy to moderation, we’ll help build and sustain your online community with precision and passion.
          </p>
        </div>
      </div>
    <h4 className="text-3xl text-center font-bold mb-5">How GrowthShark Can Help</h4>
    <p className="mb-10 text-gray-200 text-center">Here’s what we offer to help your brand build and sustain a thriving community:</p>
      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h4 className="text-xl font-bold mb-2 text-sky-300">Custom Strategy Design</h4>
            <p className="text-gray-300">
             We don’t do cookie-cutter plans. At GrowthShark, we’ll design a community management strategy tailored to your brand’s unique goals, audience, and industry. From defining your audience personas to choosing the right platforms, we’ve got you covered.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h4 className="text-xl font-bold mb-2 text-sky-300">Dynamic Content Creation</h4>
            <p className="text-gray-300">
              We ensure your social media channels aren’t just active—they’re buzzing with engagement. Our team handles everything from creating shareable content to responding to followers’ questions and comments in your brand’s tone.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h4 className="text-xl font-bold mb-2 text-sky-300">Analytics Driven Decisions</h4>
            <p className="text-gray-300">
              A successful community thrives on valuable content. Whether it’s a blog, video, or engaging polls, we’ll create content that keeps your audience coming back for more.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h4 className="text-xl font-bold mb-2 text-sky-300">Engaging Social Media Presence</h4>
            <p className="text-gray-300">
             Communities crave connection. We’re here to make sure your brand is always accessible, approachable, and responsive. Timely replies to comments, thoughtful discussions, and meaningful engagement are our hallmarks.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h4 className="text-xl font-bold mb-2 text-sky-300">Real-Time Interaction</h4>
            <p className="text-gray-300">
             We don’t guess—we measure. Using powerful analytics tools, we’ll track your community’s growth, engagement levels, and overall impact on your business goals. This data ensures we’re always optimizing for success.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
            <h4 className="text-xl font-bold mb-2 text-sky-300">Conflict Resolution and Moderation</h4>
            <p className="text-gray-300">
             Managing a community isn’t always smooth sailing. Our team is skilled at navigating challenges like disagreements, spam, or negativity, ensuring your space stays welcoming and inclusive.
            </p>
          </div>
        </div>
      </div>
       {/* Why GrowthShark */}
      <div className="mb-16 py-5 bg-sky-400 mt-10 rounded-2xl max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mt-8 text-black mb-8">Why GrowthShark?</h2>
        <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside px-10">
          <li>
            <span className="font-semibold">Experience You Can Trust:</span> We've worked with brands across industries to create engaged, thriving communities that deliver measurable results.
          </li>
          <li>
            <span className="font-semibold">Holistic Approach:</span> From strategy and content creation to engagement and analytics, we offer end-to-end community management solutions.
          </li>
          <li>
            <span className="font-semibold">Passion for People:</span> At GrowthShark, we don't just manage communities—we nurture them. We understand that behind every profile is a real person, and we prioritize creating genuine experiences.
          </li>
          <li>
            <span className="font-semibold">Proven Results:</span> Our clients have seen incredible growth in their communities, often experiencing engagement boosts of 50% or more within months of partnering with us.
          </li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-20 mx-auto max-w-6xl">
        <div>
          <h3 className="text-3xl font-semibold mb-6">What Our Clients Say</h3>
          <blockquote className="italic text-gray-300 mb-6">
            “Partnering with GrowthShark was the best decision for our brand’s online presence. Their team created a buzzing community that not only drove engagement but also boosted our sales by <strong>30%</strong> within six months.”
            <br />
            <span className="block mt-4 font-semibold text-gray-400">— Jane D., CEO, Bright Ventures</span>
          </blockquote>
          <blockquote className="italic text-gray-300">
            “The GrowthShark team goes above and beyond. They genuinely care about building meaningful connections, and the results speak for themselves.”
            <br />
            <span className="block mt-4 font-semibold text-gray-400">— Mark L., Marketing Manager, GreenTech Solutions</span>
          </blockquote>
        </div>

        {/* Promise / Closing Text */}
        <div>
          <h3 className="text-3xl font-semibold mb-6">The GrowthShark Promise</h3>
          <p className="text-gray-300 text-lg mb-4">
            When you work with us, you're not just hiring a service provider—you're gaining a partner who's invested in your success. We take the time to understand your brand, your goals, and your audience, ensuring every action we take is aligned with your vision.
          </p>
          <p className="text-gray-300 text-lg mb-4">
            A thriving community doesn’t just happen—it’s built with care, strategy, and passion. At GrowthShark, we combine our expertise and creativity to help your brand achieve its full potential. Whether you're starting from scratch or looking to revitalize an existing community, we’re here to help.
          </p>
          
        </div>
      </div>

      {/* Closing Call-to-Action */}
      <div className="text-center bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6  shadow-lg backdrop-blur max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Community?</h3>
        <h4 className="text-2xl md:text-3xl font-semibold mb-2">Let’s Grow Together</h4>
        <p className="text-gray-300 text-lg">
            Contact us today to learn how our community management services can transform your brand into a movement. With GrowthShark by your side, your community will be more than just numbers—it’ll be a force for growth, loyalty, and advocacy.
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
}
