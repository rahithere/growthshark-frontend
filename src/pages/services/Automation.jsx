import { Link } from "react-router-dom";
export default function Automation() {
  const highlight = "text-sky-300";
  const subheading = "text-xl sm:text-2xl font-semibold text-sky-300 mb-4";
  const text = "text-gray-300 text-sm";

  return (
    <section className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-30 sm:py-30">
      <div className=" space-y-20">
        {/* Hero */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
            The Power of<span className="text-sky-300"> Automation & Personalization </span> in 2025
          </h2>
          <h3 className="text-2xl font-semibold text-sky-300 mb-6">Did You Know?</h3>
          <p className="text-gray-300 text-lg">
            Businesses using automation tools for marketing can see a{" "}
            <span className="font-bold text-white">14.5% increase in sales productivity</span>, and
            personalized emails deliver{" "}
            <span className="font-bold text-white">6x higher transaction rates</span> than generic ones!
          </p>
        </div>

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold mb-4 leading-snug">
              At <span className={highlight}>GrowthShark</span>, we help businesses leverage automation and personalization to build stronger connections and boost conversions.
            </h3>
            <h4 className={subheading}>Why Automation & Personalization Matter</h4>
          </div>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Automation streamlines repetitive tasks, freeing up your team to focus on high-value activities. Personalization ensures every interaction feels tailored to the individual, making your audience feel valued and understood. Together, they create seamless, impactful experiences that drive engagement and loyalty.
              At GrowthShark, we combine the power of automation with the art of personalization. Whether it’s automated email campaigns, personalized product recommendations, or dynamic website experiences, we craft solutions that deliver measurable results.
            </p>
            <p>
              In today’s competitive landscape, customers expect experiences that are not only efficient but also deeply relevant to them. Here’s why automation and personalization are game-changers:
            </p>
          </div>
        </div>

        {/* Key Benefits */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
  {/* Card 1 */}
  <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
    <h5 className="font-bold text-xl text-sky-300 mb-2">Save Time and Resources</h5>
    <p className="text-gray-300">
      Automation reduces manual work, allowing your team to focus on strategic initiatives.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
    <h5 className="font-bold text-xl text-sky-300 mb-2">Increase Customer Satisfaction</h5>
    <p className="text-gray-300">
      Personalization ensures your audience feels seen and valued, fostering loyalty.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
    <h5 className="font-bold text-xl text-sky-300 mb-2">Improve Conversion Rates</h5>
    <p className="text-gray-300">
      Tailored experiences significantly increase the likelihood of conversions.
    </p>
  </div>

  {/* Card 4 */}
  <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
    <h5 className="font-bold text-xl text-sky-300 mb-2">Maximize <br/> ROI</h5>
    <p className="text-gray-300">
      By targeting the right audience with the right message, automation and personalization ensure your marketing budget is used efficiently.
    </p>
  </div>
</div>


        {/* Services */}

          <div className="text-white px-4 sm:px-6 lg:px-8 py-6">
  <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 leading-tight">
    GrowthShark Automation & Personalization <br/> Services
  </h2>

  {/* Grid Wrapper */}
<div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">

  {/* Card 1 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col">
    <h4 className="text-xl font-semibold text-sky-300 mb-3 leading-snug">
      Marketing Automation
    </h4>
    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
      We design and implement automation workflows for email marketing, social media scheduling, lead nurturing, and more. This ensures consistent and timely engagement with your audience.
    </p>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col">
    <h4 className="text-xl font-semibold text-sky-300 mb-3 leading-snug">
      CRM Integration
    </h4>
    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
      We integrate your CRM system with marketing platforms, enabling personalized communication based on customer data, purchase history, and behavior.
    </p>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col">
    <h4 className="text-xl font-semibold text-sky-300 mb-3 leading-snug">
    Dynamic Content Creation
    </h4>
    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
      Our team creates content that dynamically adjusts based on user preferences, location, and behavior, ensuring relevance at every touchpoint.
    </p>
  </div>

  {/* Card 4 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col">
    <h4 className="text-xl font-semibold text-sky-300 mb-3 leading-snug">
    Personalized Email Campaigns
    </h4>
    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
      Using advanced segmentation and data-driven insights, we craft emails tailored to individual recipients, improving open rates, click-through rates, and conversions.
    </p>
  </div>

  {/* Card 5 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col">
    <h4 className="text-xl font-semibold text-sky-300 mb-3 leading-snug">
  Chatbot Implementation
    </h4>
    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
      We design AI-powered chatbots that provide personalized responses to user queries, enhancing customer support and engagement.
    </p>
  </div>

  {/* Card 6 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col">
    <h4 className="text-xl font-semibold text-sky-300 mb-3 leading-snug">
    Data-Driven Personalization
    </h4>
    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
      We analyze customer data to identify patterns and preferences, enabling highly targeted recommendations and offers.
    </p>
  </div>

  {/* Card 7 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col">
    <h4 className="text-xl font-semibold text-sky-300 mb-3 leading-snug">
    E-Commerce Personalization
    </h4>
    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
      From personalized product recommendations to targeted retargeting ads, we ensure every interaction reflects your audience’s preferences.
    </p>
  </div>

  {/* Card 8 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col">
    <h4 className="text-xl font-semibold text-sky-300 mb-3 leading-snug">
    Real-Time Analytics
    </h4>
    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
      We provide detailed reports on automation and personalization efforts, helping you track performance and refine strategies for continuous improvement.
    </p>
  </div>

</div>

</div>

        {/* Benefits Block */}
 
<div className="text-white max-w-6xl mx-auto py-6">
  <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
    Benefits of Automation & Personalization
  </h3>

  <div className="max-w-6xl mx-auto space-y-10">
  <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto text-center">

  {/* Card 1 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h5 className="font-bold text-lg text-sky-300 mb-2">Stronger Customer Connections</h5>
    <p className="text-gray-300">
      Tailored interactions build trust and turn buyers into loyal advocates.
    </p>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h5 className="font-bold text-lg text-sky-300 mb-2">Increased Efficiency</h5>
    <p className="text-gray-300">
      Automation reduces errors and accelerates workflows.
    </p>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h5 className="font-bold text-lg text-sky-300 mb-2">Higher Engagement Rates</h5>
    <p className="text-gray-300">
      Personalized content inspires more clicks and responses.
    </p>
  </div>

  {/* Card 4 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h5 className="font-bold text-lg text-sky-300 mb-2">Enhanced Customer Retention</h5>
    <p className="text-gray-300">
      Satisfied customers return more often.
    </p>
  </div>

  {/* Card 5 */}
  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
    <h5 className="font-bold text-lg text-sky-300 mb-2">Scalability </h5>
    <p className="text-gray-300">
      Reach large audiences while maintaining quality experiences.
    </p>
  </div>

</div>

  </div>
</div>


        {/* How GrowthShark Stands Out */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">How GrowthShark Stands Out</h2>
          <p>
            At GrowthShark, we’re experts in combining technology and creativity to deliver impactful automation and personalization solutions. Here’s what makes us unique:
          </p>
          </div>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-10">
            <li><strong>Customized Strategies:</strong> We design solutions tailored to your business goals and audience needs.</li>
            <li><strong>Advanced Tools:</strong> We use cutting-edge platforms to ensure seamless automation and effective personalization.</li>
            <li><strong>Data-Driven Decisions:</strong> Our strategies are backed by in-depth analysis and real-time insights.</li>
            <li><strong>Expert Support:</strong> Our team of experts guides you through every step of the process, from implementation to optimization.</li>
          </ul>
        </div>

        {/* Success Stories */}
  <div className="max-w-6xl mx-auto">
  <h3 className="text-3xl font-bold mb-8 text-center">Examples of Success</h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
    {/* Card 1 */}
    <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
      <h4 className="text-2xl font-bold text-sky-300 mb-2">Retail Personalization</h4>
      <p className="text-gray-300">
        A clothing retailer implemented dynamic product recommendations based on browsing history.
        This resulted in a <strong>30% increase in average order value.</strong>
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
      <h4 className="text-2xl font-bold text-sky-300 mb-2">Automated Lead Nurturing</h4>
      <p className="text-gray-300">
        A SaaS company used automated email workflows to nurture leads, shortening the sales cycle
        and achieving a <strong>20% boost in conversions.</strong>
      </p>
    </div>

    {/* Card 3 - spans full width */}
    <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 md:col-span-2 lg:col-span-2 lg:mx-auto lg:w-1/2">
      <h4 className="text-2xl font-bold text-sky-300 mb-2">Behavioral Email Campaigns</h4>
      <p className="text-gray-300">
        An e-commerce brand personalized email campaigns based on customer behavior, improving
        click-through rates by <strong>25%.</strong>
      </p>
    </div>
  </div>
</div>



        {/* Final CTA */}
        <div className="text-center max-w-6xl mx-auto space-y-3 mt-12 bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 hover:scale-105 transition shadow-lg backdrop-blur">
          <h3 className="text-3xl font-bold">Why Your Business Needs Automation & Personalization</h3>
          <p>
            Customers today expect brands to understand their needs and preferences. Automation and personalization not only meet these expectations but exceed them, creating experiences that set you apart from the competition. By investing in these tools, you can: Improve operational efficiency.Deliver relevant, engaging content.Strengthen customer relationships.Stay competitive in a crowded market.
          </p>
          </div>
         <div className="text-center max-w-6xl mx-auto space-y-4 mt-12 bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6  shadow-lg backdrop-blur">
          <h3 className="text-3xl font-bold">Start Automating and Personalizing Today</h3>
          <p>
            Your customers deserve experiences that feel seamless and personal. At GrowthShark, we help businesses of all sizes implement automation and personalization strategies that drive growth and loyalty. Let us handle the complexities so you can focus on what you do best.Contact us today to learn more about how we can transform your customer interactions through automation and personalization.
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
