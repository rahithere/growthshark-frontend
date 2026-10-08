import { FaSearch, FaTags, FaPenFancy, FaLink, FaCheckCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const EcommerceSEO = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-30 sm:py-30">
      <Helmet>
        <title>Boost Your Sales with Ecommerce SEO Services | Growthshark</title>
        <meta name="description" content="Improve your store’s search rankings and drive organic traffic with our expert ecommerce SEO at Growthshark. Contact us Now!" />
      </Helmet>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          The Power of <span className="text-sky-300">E-commerce SEO</span> in 2025
        </h1>

        {/* Did You Know */}
        <div className=" mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2 text-sky-300"> Did You Know?</h2>
          <p className="text-gray-300">
            37.5% of all traffic to e-commerce sites comes directly from search engines.
            With high competition, proper SEO is the key to staying ahead.
          </p>
        </div>

        {/* What is E-commerce SEO */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className='bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 shadow-lg'>
            <h2 className="text-3xl font-bold mb-4">What Is E-Commerce SEO & Why It Matters</h2>
            <p className="text-gray-300">
              E-commerce SEO focuses on improving the visibility of your store and its products
              in search results—bringing in the right traffic that’s ready to buy.
            </p>
          </div>
          <div className="bg-sky-400 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-black"> Key Facts:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>46% of Google searches are for products.</li>
              <li>Organic results drive 64% of all e-commerce orders.</li>
              <li>75% of users never scroll past the first page.</li>
            </ul>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-10 text-center ">How GrowthShark Optimizes Your Online Store</h2>

        {/* Individual Cards - NO MAP FUNCTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
            <FaSearch className="text-3xl text-sky-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Targeted Keyword Research</h3>
            <p className="text-gray-300">
              We find high-intent keywords and long-tail terms that match your customers' search habits for better ranking.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
            <FaTags className="text-3xl text-sky-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Optimizing Product Pages</h3>
            <p className="text-gray-300">
              We optimize titles, descriptions, images, and speed—everything needed to boost your SEO and drive conversions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
            <FaPenFancy className="text-3xl text-sky-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creating Content That Sells</h3>
            <p className="text-gray-300">
              We craft blog posts and guides that answer customer questions and drive high-quality traffic to your site.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
            <FaLink className="text-3xl text-sky-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Building Authority Links</h3>
            <p className="text-gray-300">
              We secure quality backlinks from trusted sources that improve your domain authority and ranking.
            </p>
          </div>
           {/* Card 5 */}
          <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
            <FaPenFancy className="text-3xl text-sky-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creating Content That Sells</h3>
            <p className="text-gray-300">
              We craft blog posts and guides that answer customer questions and drive high-quality traffic to your site.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
            <FaLink className="text-3xl text-sky-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Building Authority Links</h3>
            <p className="text-gray-300">
              We secure quality backlinks from trusted sources that improve your domain authority and ranking.
            </p>
          </div>
        </div>
         <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-8 text-center py-5">
          Why Choose <span className="text-[#2ea9ff]">GrowthShark</span> for E-Commerce SEO?
        </h2>

        {/* Bullet Points */}
        <div className="space-y-4 mb-16">
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>We Understand E-Commerce Challenges:</strong> From cart abandonment to fierce competition, our strategies help you overcome real obstacles and boost conversions.</p>
          </div>
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Our Experience Speaks:</strong> We've helped e-commerce stores across niches—from apparel to electronics—achieve better user experiences and higher rankings.</p>
          </div>
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Long-Term Growth Focus:</strong> Our SEO strategy isn’t about hacks—it’s about lasting growth and sustainable success.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6">FAQs About Our E-Commerce SEO Services</h3>
          <div className="space-y-4">
            <details className=" from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center cursor-pointer">
              <summary className="font-medium">How long does it take to see results with E-Commerce SEO?</summary>
              <p className="mt-2 text-gray-300">Most stores begin to see significant improvements within 3–6 months.</p>
            </details>
            <details className=" from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center cursor-pointer">
              <summary className="font-medium">Can you help with small or niche e-commerce stores?</summary>
              <p className="mt-2 text-gray-300">Yes! We specialize in tailored strategies no matter your store size or niche.</p>
            </details>
            <details className=" from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center cursor-pointer">
              <summary className="font-medium">Do you handle international SEO for e-commerce?</summary>
              <p className="mt-2 text-gray-300">Absolutely. We optimize for multilingual, multi-region SEO performance.</p>
            </details>
          </div>
        </div>

        {/* Two Column: Results + Paid Ads Comparison */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Results */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Results You Can Expect with GrowthShark</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>+40% organic traffic</strong> increase for electronics stores in just 6 months.</li>
              <li>Ranked a furniture brand on page 1 for <strong>20+ product keywords</strong>, gaining +35% in sales.</li>
              <li><strong>25% drop in cart abandonment</strong> via site speed and mobile optimization.</li>
            </ul>
          </div>

          {/* Why SEO > Paid Ads */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Why SEO Is Better Than Paid Ads</h3>
            <p className="text-gray-300 mb-3"><strong>Sustainable Traffic:</strong> SEO delivers traffic that doesn’t disappear when your ad budget runs out.</p>
            <p className="text-gray-300 mb-3"><strong>Higher ROI:</strong> Businesses that invest in SEO consistently outperform ad-only strategies.</p>
            <p className="text-gray-300"><strong>Credibility:</strong> 70% of users trust organic results more than ads—making SEO essential.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center  shadow-lg backdrop-blur">
          <h3 className="text-3xl font-bold mb-4">Let’s Get Started</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your customers are searching for what you sell. Let us help you show up first. Book a free strategy call today and start turning clicks into conversions.
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

export default EcommerceSEO;
