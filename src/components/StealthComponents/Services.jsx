import { SlEnvolopeLetter } from "react-icons/sl";
import { FaRegCalendarAlt, FaInstagram, FaTasks } from "react-icons/fa";
import { MdOutlineWifiCalling3, MdOutlinePeopleAlt, MdCampaign } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

function Services() {
  return (
    <>
      <div className=" py-16  px-6 relative ">
           
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              How Can We Be Your Perfect<br className="hidden sm:block" />
               <span className="text-[#49b9ff]">Delegation </span>
               Partner?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Your Growthshark team handles essential marketing strategies & execution, <br />
              and gives you a bloody edge at your competitors, while focusing more on inbound than vague niches.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-9 max-w-7xl mx-auto">
            {/* Service Box 1 */}
            <div className="w-90 text-center backdrop-blur-md bg-[#141f3a]/60 border border-white/10  bg-opacity-80  text-white  p-6 rounded-xl shadow-md hover:shadow-cyan-500/20  transition duration-300 ">
              <div className="flex justify-center mb-3">
                <SlEnvolopeLetter size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Email <br /> Gatekeeping</h4>
              <p className="text-gray-300 text-sm">Your inbox stays pristine; only <br/> essential messages reach you.</p>
            </div>

            {/* Service Box 2 */}
            <div className="w-90 text-center backdrop-blur-md bg-[#141f3a]/60 border border-white/10  bg-opacity-80  text-white  p-6 rounded-xl shadow-md hover:shadow-cyan-500/20  transition duration-300">
              <div className="flex justify-center mb-3">
                <FaRegCalendarAlt size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Calendar <br/> Coordination</h4>
              <p className="text-gray-300 text-sm"> Perfectly planned meetings without <br/> conflicts or confusion.</p>
            </div>

            {/* Service Box 3 */}
            <div className="w-90 text-center backdrop-blur-md bg-[#141f3a]/60 border border-white/10  bg-opacity-80  text-white  p-6 rounded-xl shadow-md hover:shadow-cyan-500/20  transition duration-300">
              <div className="flex justify-center mb-3">
                <MdOutlineWifiCalling3 size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Call <br/> Gatekeeping</h4>
              <p className="text-gray-300 text-sm">Only valuable calls make it through, <br/> protecting your productivity.</p>
            </div>

            {/* Service Box 4 */}
            <div className="w-90 text-center backdrop-blur-md bg-[#141f3a]/60 border border-white/10  bg-opacity-80  text-white  p-6 rounded-xl shadow-md hover:shadow-cyan-500/20  transition duration-300">
              <div className="flex justify-center mb-3">
                <IoIosSearch size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Market <br/> Research</h4>
              <p className="text-gray-300 text-sm">Concise, insightful reports on <br/> competitors, industry trends, and <br/> market opportunities.</p>
            </div>

            {/* Service Box 5 */}
            <div className="w-90 text-center backdrop-blur-md bg-[#141f3a]/60 border border-white/10  bg-opacity-80  text-white  p-6 rounded-xl shadow-md hover:shadow-cyan-500/20  transition duration-300">
              <div className="flex justify-center mb-3">
                <MdOutlinePeopleAlt size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Client <br/> Intelligence</h4>
              <p className="text-gray-300 text-sm">Detailed background briefings, <br/> enabling confident client <br/> interactions.</p>
            </div>

            {/* Service Box 6 */}
            <div className="w-90 text-center backdrop-blur-md bg-[#141f3a]/60 border border-white/10  bg-opacity-80  text-white  p-6 rounded-xl shadow-md hover:shadow-cyan-500/20  transition duration-300">
              <div className="flex justify-center mb-3">
                <FaInstagram size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Social Media <br/> Management</h4>
              <p className="text-gray-300 text-sm">Consistent, high-quality content to <br/> enhance brand visibility.</p>
            </div>

            {/* Service Box 7 */}
            <div className="w-90 text-center backdrop-blur-md bg-[#141f3a]/60 border border-white/10  bg-opacity-80  text-white  p-6 rounded-xl shadow-md hover:shadow-cyan-500/20  transition duration-300">
              <div className="flex justify-center mb-3">
                <MdCampaign size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Manual <br/> Outreach</h4>
              <p className="text-gray-300 text-sm">Personalized, human-like <br/> communication to build genuine <br/> relationships.</p>
            </div>

            {/* Service Box 8 */}
            <div className="w-90 text-center backdrop-blur-md bg-[#141f3a]/60 border border-white/10  bg-opacity-80  text-white  p-6 rounded-xl shadow-md hover:shadow-cyan-500/20  transition duration-300">
              <div className="flex justify-center mb-3">
                <IoDocumentTextOutline size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Document <br/> Preparation</h4>
              <p className="text-gray-300 text-sm">Professionally prepared <br/> presentations, reports, and meeting <br/> summaries.</p>
            </div>

            {/* Service Box 9 */}
            <div className="w-90 text-center backdrop-blur-md bg-[#141f3a]/60 border border-white/10  bg-opacity-80  text-white  p-6 rounded-xl shadow-md hover:shadow-cyan-500/20  transition duration-300">
              <div className="flex justify-center mb-3">
                <FaTasks size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Task <br/> Delegation</h4>
              <p className="text-gray-300 text-sm">Clearly assigned tasks with tracked <br/> progress and transparent <br/> reporting.</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
