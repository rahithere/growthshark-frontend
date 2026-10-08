import { Helmet } from "react-helmet-async";
import cbs1 from '../../assets/cbs1.jpg'
import cbs2 from '../../assets/cbs2.jpg'
import cbs3 from '../../assets/cbs3.jpg'
const CB2B = () => {
  return (
    <div className="px-6 py-30 text-white bg-gradient-to-r from-black via-[#0b223f] to-[#06263f]">
      <Helmet>
        <title>Explore B2B Marketing Case Studies That Drive Results | Growthshark</title>
        <meta name="description" content="See how our B2B campaigns generate high-quality leads and conversions. Boost your business growth today with GrowthShark." />
      </Helmet>
  <div className="max-w-6xl mx-auto space-y-12">

    {/* Background Section */}
    <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6  hover:scale-105 transition shadow-lg backdrop-blur ">
      <h2 className="text-3xl font-bold mb-4 text-center">Background of the Project</h2>
      <p className="mb-2 text-center">The website is a B2B brand, a leading print-on-demand platform in India. They’ve built a strong brand over the years.</p>
      <p className='text-center'>They wanted to scale their traffic and beat competitors by creating more content and building topical hubs around print-on-demand, eCommerce, custom printing, and dropshipping.</p>
    </div>

    {/* Results Section */}
    <div className="bg-sky-400 rounded-2xl p-6 text-left">
      <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-black">
        Results we achieved <span>⭐</span>
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        <li>Improved organic traffic by <strong>14%</strong> in 3 months</li>
        <li>Set up conversion tracking and generated <strong>200,247 CTA clicks</strong> in a month</li>
      </ul>
    </div>

    {/* Visual Data Section */}
    <div className="box-bg">
      <img src={cbs1} alt="cbs1" className="rounded-lg shadow-lg mx-auto" />
      <p className="text-sm mt-2 text-gray-300 text-center">CTA clicks per month</p>
    </div>

    <div className="box-bg">
      <img src={cbs2} alt="cbs2" className="rounded-lg shadow-lg mx-auto" />
      <p className="text-sm mt-2 text-gray-300 text-center">14% traffic increase in 3 months</p>
    </div>
 <div className="box-bg">
      <img src={cbs3} alt="cbs3" className="rounded-lg shadow-lg mx-auto" />
      <p className="text-sm mt-2 text-gray-300 text-center">800+ keywords ranking in the 1st page</p>
    </div>
    {/* What We Did */}
    <div className="box-bg  space-y-6 bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 shadow-lg backdrop-blur">
      <h2 className="text-3xl font-bold">What We Did</h2>

      {/* 1. Keyword Cannibalization */}
      <div>
        <h3 className="text-xl font-semibold">1. Fixing Keyword Cannibalization</h3>
        <p className="mt-2">Hundreds of articles were targeting the same keyword, causing poor distribution in rankings.</p>
        <ul className="list-disc list-inside mt-2">
          <li>Merged duplicate pages</li>
          <li>Redirected low-value pages</li>
          <li>Fixed internal linking structure</li>
        </ul>
      </div>

      {/* 2. Updating Content */}
      <div>
        <h3 className="text-xl font-semibold">2. Updating Existing Content</h3>
        <p>300+ articles existed, but only the top 10 brought ~70% of traffic.</p>
        <table className="w-full mt-4 border border-white/10 text-left text-sm">
          <thead className="bg-white/5 text-white uppercase tracking-wider">
            <tr>
              <th className="px-4 py-2 border-b border-white/10">Total Blog Traffic</th>
              <th className="px-4 py-2 border-b border-white/10">Top 10 Page Traffic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-white/10">14,304</td>
              <td className="px-4 py-2 border-b border-white/10">10,138 (~70%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. Content Guidelines */}
      <div>
        <h3 className="text-xl font-semibold">3. Content Guidelines & Writer Training</h3>
        <p>We created detailed content guidelines and ran training to improve research, semantic SEO, and accuracy.</p>
      </div>

      {/* 4. Topic Clusters */}
      <div>
        <h3 className="text-xl font-semibold">4. Creating Topic Clusters & Content Hubs</h3>
        <p>We focused on four content pillars — eCommerce, dropshipping, print-on-demand, and custom printing — and created supporting clusters.</p>
      </div>

      {/* 5. Custom Schema */}
      <div>
        <h3 className="text-xl font-semibold">5. Custom Schema Markup</h3>
        <p>Implemented custom schema types for product pages, homepage, and About Us for better SERP visibility.</p>
      </div>

      {/* 6. Conversion Tracking */}
      <div>
        <h3 className="text-xl font-semibold">6. Setting Up Conversion Tracking</h3>
        <p>Previously, there was no tracking in place. We implemented full conversion tracking to monitor CTA clicks and performance.</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default CB2B;
