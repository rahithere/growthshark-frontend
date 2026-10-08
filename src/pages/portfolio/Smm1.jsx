import { Helmet } from "react-helmet-async";
import smm1 from '../../assets/smm1.jpg'
import smm2 from '../../assets/smm2.jpg'
import smm3 from '../../assets/smm3.jpg'
export default function SMM1() {
  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 pt-30 sm:py-30">
      <Helmet>
        <title>Check Our Social Media Marketing Success (SMM 1) Stories |Growthshark</title>
        <meta name="description" content="Discover our creative strategies that drive engagement and growth. Transform your social presence today at GrowthShark." />
      </Helmet>
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section: Background */}
        <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6  hover:scale-105 transition shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold mb-4 text-center">Background of the project</h2>
          <p className="mb-4 text-gray-300 text-center">
            This was work done recently for an <strong>industrial chiller manufacturer</strong>.
            They were in B2B manufacturing, and we did Social Media Marketing for them:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-left space-y-2 px-6">
            <li>
              The page was having just posts without a strategy of hashtag, target market and ICPs
            </li>
            <li>The engagement rate was relatively low</li>
            <li>The page organic reach was below par</li>
          </ul>
        </div>

        {/* Section: Challenges */}
        <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold mb-4">Challenges before working</h2>
          <p className="text-gray-300">
            Before we started our work, the company was fed up with generic content and no
            engagement per post. They were B2B and wanted to craft their SMM with creative touch and
            solid design that appeals to the masses.
          </p>
        </div>

        {/* Section: Results */}
        <div className="box-bg">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            Results we achieved <span>🌟</span>
          </h2>
          <img
            src={smm1}
            alt="smm1"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        {/* Section: Traffic Insights */}
        <div>
            <div className='bg-sky-400 max-w-6xl mx-auto p-6 rounded-2xl'>
          <p className="text-black mb-4 font-bold text-xl">
            Not only this, but Social Media Marketing improvement also signalled at:
          </p>
          <ul className="list-decimal list-inside text-gray-800  space-y-1 text-left">
            <li>Branding Improvements</li>
            <li>Direct Traffic On-Site</li>
          </ul>
          </div>
          <img
            src={smm2}
            alt="smm2"
            className="rounded-lg shadow-lg mt-6 mx-auto"
          />
        </div>

        {/* Section: Keyword Research */}
        <div className="box-bg">
          <img
            src={smm3}
            alt="smm3"
            className="rounded-lg shadow-lg mb-6 mx-auto"
          />
          
          <h2 className="text-2xl font-bold mb-4 text-center mt-10">What did we do?</h2>
          <p className="mb-4 text-gray-300 text-center">
            Here is the complete process that we followed:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-left space-y-2">
            <li>
             Keywords were researched and strategically put into the caption body. Even though it’s not as effective and controlled as SEO, it did have some impact due to Social Media Pages’ DR.
            </li>
            <li>
             Hashtags are a crucial part of SMM strategy. We researched three categories of hashtags <strong>Evergreen, Specific & Trending</strong>.
            </li>
            <li>
              Contents were mostly reels and graphics (70%) and rest 30% consisted of <strong>inside the company</strong> content.
            </li>
            <li>Content publishing frequency: 15–20 posts/month</li>
          </ul>
        </div>

        {/* Author Credit */}
        <p className="text-gray-400  italic">
          -By GrowthShark
        </p>
      </div>
    </div>
  );
}
