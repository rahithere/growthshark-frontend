import { Helmet } from "react-helmet-async";
import smm4 from '../../assets/smm4.jpg'
import smm5 from '../../assets/smm5.jpg'

const SMM2 = () => {
  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-20 sm:py-32 min-h-screen">
      <Helmet>
        <title>Check Our Social Media Marketing Success (SMM 2) Stories |Growthshark</title>
        <meta name="description" content="Explore results-driven campaigns that increase followers and engagement. Start your social media success story at GrowthShark." />
      </Helmet>
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section: Background */}
        <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold mb-4"> Background of the project</h2>
          <p className="mb-4">
            This was work done recently for a <strong>regional Bengali Language OTT platform</strong>. They were yet to launch their app and they hired Pro-Riterz to build up pre-launch rapport and we did Social Media Marketing for them:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-white/90 text-left px-20">
            <li>They didn’t have any Facebook and youtube profiles before they reached us</li>
            <li>They didn’t have huge budgets or ability to spend on multi-channel approach</li>
            <li>They were clear about reaching bengali locals of age 30+</li>
          </ul>
        </div>

        {/* Section: Challenges */}
        <div className="bg-sky-400 rounded-2xl p-6 max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4 text-black">Challenges before working</h2>
          <p className="text-sm text-gray-800">
           Before we started our work, the company was new, didn’t have any online presence and were clueless on how we can build a rapport for them. They were not even clear on how they can work and reach the people to have awareness. We were on the verge of being totally alone and the only support we got was the raw content that they recorded in their studio.
          </p>
        </div>

        {/* Section: Approach */}
        <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold mb-4">Our Approach</h2>
          <p className="text-sm text-white/90 mb-4">
           We took the approach of Organic marketing and advised clients to build a presence first and boost up the algorithm with some awareness meta ads later on since CPC will be higher on sales ads.
          </p>
          <p>We routed our efforts into two main channels:</p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-white/90">
            <li>Facebook</li>
            <li>YouTube</li>
          </ol>
          <p className="text-sm text-white/90 mt-4">We decided to post atleast 50+ posts in the forms of reels and occasional posts, and circumvented employee advocacy to get the organic rolling. 

          </p>
        </div>

        {/* Section: Results */}
        <div >
          <h2 className="text-2xl font-bold mb-4 text-center">Results we achieved 🌟</h2>
          <div className=' max-w-3xl mx-auto '>
          <img src={smm4} alt="smm4" className="rounded-lg shadow-md mb-4 w-full" />
          </div>
         <div className='bg-sky-400 rounded-2xl p-6 max-w-6xl mx-auto'>
          <p className="text-sm text-black">
            Not only this, but Social Media Marketing improvement also improved the Youtube Stats where we posted just shorts and no real long form videos:
          </p>
           <ol className="list-decimal list-inside space-y-1 text-sm text-gray-800">
            <li>Youtube descriptions were highly optimized</li>
            <li>Youtube videos had proper internal links</li>
          </ol>
          </div>
        </div>

        {/* Section: Achievements */}
        <div className=" max-w-3xl mx-auto ">
          <h2 className="text-2xl font-bold mb-4 text-center">YouTube Achievements</h2>
          <img src={smm5} alt="smm5" className="rounded-lg shadow-md mb-4 w-full" />
        </div>

        {/* Section: What we did */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">What did we do?</h2>
          <p className='text-center mb-5'>Here is the complete process that we followed:</p>
          <p className='text-center mb-10 max-w-3xl mx-auto'>We analysed the past 3 months’ post trends, types and quality of the competitors in the market and identified how they brand, what kind of content and interest they pour in the videos:</p>
          <ul className="list-disc list-inside t text-white/90 space-y-2">
            <li>Keywords were researched and strategically put into the caption body. Even though it’s not as effective and controlled as SEO, it did have some impact due to Social Media Pages’ and ofcourse Youtubes</li>
            <li>Hashtags are a crucial part of SMM strategy. </li>
            <li>Contents were mostly reels and graphics where these reels had an angle of mystery and caption was accompanied with latest trend on the kind of content</li>
            <li>Content publishing frequency was around 20-30 posts per month</li>
          </ul>
          <p className="mt-4  text-white/70 italic">— By GrowthShark</p>
        </div>
      </div>
    </div>
  );
};

export default SMM2;
