import { MdCampaign, MdOutlineCameraAlt, MdTranslate } from "react-icons/md";
import { TbWorldSearch, TbMessages } from "react-icons/tb";
import { AiOutlineLinkedin, AiOutlineAudio } from "react-icons/ai";
import { RiUserCommunityLine } from "react-icons/ri";
import { PiVideo } from "react-icons/pi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";

function Services() {
  return (
    <>
      <div className="bg-black py-16 sm:py-16 lg:py-16 px-6 relative ">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[700px] h-[900px] bg-[#2ea9ff]/20 rounded-full blur-3xl"></div>
      </div>      
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              How Can We Be Your <br className="hidden sm:block" />
              Perfect <span className="text-[#2ea9ff]">Hunting Partner?</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Your Growthshark team handles essential marketing strategies & execution, <br />
              and gives you a bloody edge at your competitors, while focusing more on inbound than vague niches.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-9">
            {/* Service Box 1 */}
            <div className="w-90 text-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20  transition duration-300 ">
              <div className="flex justify-center mb-3">
                <MdCampaign size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Social Media <br /> Marketing</h4>
              <p className="text-gray-300 text-sm">Dynamic campaigns that attract, engage, and convert your audience rapidly.</p>
            </div>

            {/* Service Box 2 */}
            <div className="w-90 text-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300">
              <div className="flex justify-center mb-3">
                <TbWorldSearch size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">SEO</h4>
              <p className="text-gray-300 text-sm">Precision optimization to dominate search rankings and visibility.</p>
            </div>

            {/* Service Box 3 */}
            <div className="w-90 text-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300">
              <div className="flex justify-center mb-3">
                <TbMessages size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Forum <br/> Marketing</h4>
              <p className="text-gray-300 text-sm">Engaging conversations and impactful presence in niche forums.</p>
            </div>

            {/* Service Box 4 */}
            <div className="w-90 text-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300">
              <div className="flex justify-center mb-3">
                <AiOutlineLinkedin size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">LinkedIn Personal <br /> Branding</h4>
              <p className="text-gray-300 text-sm">Authority-building strategies to position you as a thought-leader.</p>
            </div>

            {/* Service Box 5 */}
            <div className="w-90 text-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300">
              <div className="flex justify-center mb-3">
                <RiUserCommunityLine size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Community <br /> Marketing</h4>
              <p className="text-gray-300 text-sm">Building loyal communities that amplify brand loyalty and advocacy.</p>
            </div>

            {/* Service Box 6 */}
            <div className="w-90 text-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300">
              <div className="flex justify-center mb-3">
                <PiVideo size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Content Marketing <br /> Strategy</h4>
              <p className="text-gray-300 text-sm">Strategically created content that resonates, persuades, and converts.</p>
            </div>

            {/* Service Box 7 */}
            <div className="w-90 text-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300">
              <div className="flex justify-center mb-3">
                <IoColorPaletteOutline size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Video Editing & <br /> Graphic Designing</h4>
              <p className="text-gray-300 text-sm">Professional visuals and video content that powerfully convey your brand story.</p>
            </div>

            {/* Service Box 8 */}
            <div className="w-90 text-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300">
              <div className="flex justify-center mb-3">
                <FiYoutube size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">YouTube <br/> SEO</h4>
              <p className="text-gray-300 text-sm">Optimized video strategies to enhance visibility and subscriber growth.</p>
            </div>

            {/* Service Box 9 */}
            <div className="w-90 text-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300">
              <div className="flex justify-center mb-3">
                <AiOutlineAudio size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Voice-over & <br /> Scripting</h4>
              <p className="text-gray-300 text-sm">Engaging narratives and professional voice talent for impactful messaging.</p>
            </div>

            {/* Service Box 10 */}
            <div className="w-90 text-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300">
              <div className="flex justify-center mb-3">
                <MdOutlineCameraAlt size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Photo & <br /> Videography</h4>
              <p className="text-gray-300 text-sm">Stunning visuals crafted to elevate your brand’s perception.</p>
            </div>

            {/* Service Box 11 */}
            <div className="w-90 text-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300">
              <div className="flex justify-center mb-3">
                <MdTranslate size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-[#a6ff00] text-lg font-semibold mb-2">Translation & <br /> Transcription</h4>
              <p className="text-gray-300 text-sm">Accurate and swift translation services, expanding your global reach.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
