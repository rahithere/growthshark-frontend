
import { Helmet } from "react-helmet-async";

const OCS = () => {
  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white px-6 py-20 sm:py-30">
      <Helmet>
        <title>Discover Our Top Performing Online Campaigns | Growthshark</title>
        <meta name="description" content="Check out our top-performing campaigns and learn how we grow brands. Start achieving online success with GrowthShark." />
      </Helmet>
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section: Background */}
        <section className="space-y-4 bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6  hover:scale-105 transition shadow-lg backdrop-blur ">
          <h2 className="text-2xl font-bold mb-4 text-center">Background of the Project</h2>
          <p className="mb-4 text-center">
            This was work done recently for an <strong>industrial chiller manufacturer</strong>. They were in B2B manufacturing and we did LinkedIn Outreach for them:
          </p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>The business never thought of implementing outreach due to large ticket size</li>
            <li>The business was very inactive and inconsistent over LinkedIn</li>
          </ul>
        </section>

        {/* Section: Challenges */}
        <section className="bg-sky-400 rounded-2xl p-6 text-left">
          <h2 className="text-2xl font-bold mb-4 text-black">Challenges Before Working</h2>
          <p className="text-gray-800">
           Before we started our work, the company had almost zero traction both in the founder’s personal as well as company profiles. So, building trust was really challenging, and so was the challenge of getting leads and sales.
          </p>
        </section>

        {/* Section: Campaign Details */}
      <section className="bg-gradient-to-br from-black via-[#0b223f]/70 to-[#06263f]/50 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-sky-500/40 hover:scale-[1.02] text-white">
  <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3 tracking-tight">
    <span className="text-sky-400">📌</span> Details of the Campaign
  </h2>

  <div className="space-y-4 text-white/90">
    <h3 className="text-xl font-semibold text-sky-300">Campaign #1</h3>

    <div className="space-y-4">
      <p><span className="font-bold text-white">Type of outreach:</span> LinkedIn Outreach <em className="text-gray-400">(without using Sales Navigator)</em></p>
      <p><span className="font-bold text-white">Date:</span> 1/8/2024 to 1/31/2024</p>
      <p><span className="font-bold text-white">Goal:</span> Sales outreach for high-ticket chillers. Specifically collecting phone numbers and email IDs.</p>
      <p><span className="font-bold text-white">Target demographics:</span> West Bengal – Burdwan 1, 2, 3, Paschim Burdwan, Purba Burdwan, Kolkata, Metropolitan Kolkata, Durgapur, Nepal, Bangladesh.</p>
      <p><span className="font-bold text-white">ICP:</span> Owners, Consultants, Founders, CEOs, Ops Managers, Manufacturing Managers, Marketing Officers, C-level executives.</p>
      <p><span className="font-bold text-white">Sectors:</span> Food Processing, Chemical, Plastic Processing Industry.</p>
      <p><span className="font-bold text-white">Total no. of people targeted:</span> 1000 people</p>
      <p><span className="font-bold text-white">Process:</span> Each min of 10 – Max 20 people per day</p>
    </div>

    <div className="mt-4">
      <p className="font-bold text-white">Template:</p>
      <ul className="list-decimal pl-6 mt-1 text-gray-300 space-y-1">
        <li>Invitation + Connection</li>
        <li>Follow-up message 1</li>
        <li>Follow-up message 2</li>
      </ul>
    </div>

    <div className="space-y-1 pt-2">
      <p><span className="font-bold text-white">Output:</span> <span className="text-white/80">60% connected & 24% replied</span> <em className="text-gray-400">(ongoing)</em></p>
      <p><span className="font-bold text-white">Leads Received:</span> <span className="text-white/80">(As in we received a positive impact and contact details were shared from the targeted lead — 50+)</span> <em className="text-gray-400">(ongoing) (refer to separate doc.)</em></p>
    </div>
  </div>
</section>

        {/* Section: Conclusion */}
        <section className="bg-sky-400 rounded-2xl p-6 text-left">
          <h2 className="text-2xl font-bold mb-4 text-black">Conclusion</h2>
          <ul className="list-decimal pl-6 text-gray-800 space-y-2">
            <li>The campaign ran smoothly with no barriers.</li>
            <li>Open rates were high, with 70% open rate.</li>
            <li>The output is relatively high due to specific reasons- 
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>The customized template ran really well.</li>
                <li>People in need were ready to contact.</li>
                <li>The target audience was accurate.</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Credit */}
        <p className="text-right text-sm text-sky-400 mt-10 italic">– By GrowthShark</p>
      </div>
    </div>
  );
};

export default OCS;
