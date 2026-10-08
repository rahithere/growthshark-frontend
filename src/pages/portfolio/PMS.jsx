import { Helmet } from "react-helmet-async";
import pms1 from '../../assets/pms1.jpg'
import pms2 from '../../assets/pms2.jpg'
import pms3 from '../../assets/pms3.jpg'
import pms4 from '../../assets/pms4.jpg'
export default function PMS() {
  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-30">
      <Helmet>
        <title>Explore Performance Marketing Success Stories | Growthshark</title>
        <meta name="description" content="See how we deliver measurable results and maximize marketing efficiency. Partner with us for your next campaign at GrowthShark." />
      </Helmet>
      <div className="max-w-6xl mx-auto space-y-12">

        <section className="space-y-4 bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
          <h1 className="text-2xl font-bold">RECENT (PM Software)</h1>
          <p className=" text-white/80">
           Background of the project <br/>Recently, we worked with a US-based SaaS company operating in the property management and real estate niche with high competition. Some background details about the website:
          </p>
          <ul className="list-disc pl-5 text-white/70 text-left">
            <li>The website has published 600+ articles over the last 10 years, most of which are user-focused.</li>
            <li>The brand value (~branded searches) is comparatively high compared to any new competitor in the niche.</li>
            <li>Domain rating (DR)= 40; Site traffic when we started our SEO campaign ~3,000/month</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center"> Challenges before working</h2>
          <p className="text-white/80 mb-4 text-center">
            Before we started our SEO campaign, The SaaS brand constantly saw a decline in overall site traffic. And most of their traffic was coming from branded searches.
          </p>
          <img src={pms1} alt="pms1" className="rounded-xl shadow-lg w-full mb-6" />
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Results We Achieved</h2>
          <div >
            <img src={pms2} alt="pms2" className="rounded-xl shadow-lg w-full mb-6" />
            <img src={pms3} alt="pms3" className="rounded-xl shadow-lg w-full" />
          </div>
          
        </section>

        <section className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 hover:scale-105 transition shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold mb-4 text-center">What We Did</h2>
          <p className='text-center'>Here is the complete process that we followed:</p>
          <p className='text-center'>The simple secret was updating our existing pages with high business value and fixing technical changes to the site.</p>
          <p className='text-center'>When we started there were a lot of technical issues that were holding the website back from performing high in organic search. We executed:
</p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1 mt-10">
            <li>Creating custom structured data for website and blog posts</li>
            <li>Improving the navigation header and internal linking structure</li>
            <li>Disallowed unwanted URLs from getting indexed</li>
            <li>Added internal links and removed orphan pages</li>
            <li>Created content hubs for each primary content category</li>
            <li>Focused on EEAT as the website didn’t have many trust signals for users and Google</li>
          </ul>
        </section>

        <section className="max-w-6xl mx-auto">
            <div className='bg-sky-400 p-6 rounded-2xl'>
                  <h2 className="text-xl font-semibold mb-2 text-black">Creating and publishing content</h2>
          <p className='text-black'>Rest was handled by our in-house experienced writer who knows the product and industry well. Here are some quick points we checked before re-publishing any article.</p>
          <ul className="list-disc pl-5 text-gray-800 space-y-1 mt-6">
            <li>Ensure the content has information gain </li>
            <li>Add internal links </li>
            <li>Re-publish with the current date </li>
            <li>Submitting the URL in Google Search Console so Google can notice the changes sooner</li>
          </ul>
            </div>
          <div className='bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 hover:scale-105 transition shadow-lg backdrop-blur mt-10 mb-10 text-center mx-auto max-w-2xl'>
            <p className='text-2xl font-semibold'>The result?</p>
          <p className="mt-4 text-white/80">Within 1–2 days, traffic and impressions spiked.</p>
          </div>
          
          <p>Here’s an example:</p>
          <img src={pms4} alt="pms4" className="rounded-xl shadow-lg mt-4 w-full" />
        </section>

        <section className=" max-w-6xl mx-auto  space-y-4 bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold mb-2">The Best Part?</h2>
          <p>
            We are yet to start publishing our new pages based on keyword research. We’re predicting to double the traffic and lead conversions by the next 3-5 months.
          </p>
        </section>
        
      </div>
    </div>
  );
}
