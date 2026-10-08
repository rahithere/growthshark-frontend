import { FaArrowRight } from 'react-icons/fa';

const Why = () => {
    return (
        <div className='bg-black text-white overflow-hidden px-6 pt-16 pb-6'>
        <section className="max-w-6xl mx-auto relative  ">
            {/* Center Glow */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-72 sm:w-96 h-72 sm:h-96 bg-[#2ea9ff]/20 rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 max-w-4xl mx-auto text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold">
                    Why Do You Need To Be{' '}
                    <span className="text-[#2ea9ff]">‘Aggressive’</span>?
                </h1>
                <p className="text-sm sm:text-base text-gray-300 mt-4">
                    Because it couldn't have been said better:
                  </p> 
                    <p className="text-xl sm:text-xl text-[#2ea9ff] mt-1 font-bold">
                        "In marketing, speed and aggression win the market <br /> share battle every time."
                    </p>
                
                <p className="text-sm sm:text-base text-gray-300 mt-1">
                    Businesses trying to just go with ‘in-house’ growth hit the ceiling sooner or later.
                </p>
            </div>

            {/* Comparison Cards */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* In-House */}
                <div className="rounded-xl p-5 sm:p-6 shadow-lg backdrop-blur-md bg-white/5 border border-white/10 hover:scale-105 transform transition-transform duration-300">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 text-center mb-4">Doing It In-House</h2>
                    <ul className="space-y-3 text-gray-300 text-sm sm:text-base px-4 sm:px-10">
                        <li><FaArrowRight className="inline mr-2 text-red-600" />Higher Overhead Costs</li>
                        <li><FaArrowRight className="inline mr-2 text-red-600" />Lengthy Entry And Exit Formality</li>
                        <li><FaArrowRight className="inline mr-2 text-red-600" />Too Many Layers Of Approval And No Freehand</li>
                        <li><FaArrowRight className="inline mr-2 text-red-600" />Often Missed Or Forgot Due To Client Urgency</li>
                        <li><FaArrowRight className="inline mr-2 text-red-600" />Lesser Focus Due To Several Matters In Hand</li>
                    </ul>
                </div>

                {/* GrowthShark */}
                <div className="rounded-xl p-5 sm:p-6 shadow-lg backdrop-blur-md bg-white/5 border border-white/10 hover:scale-105 transform transition-transform duration-300">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#2ea9ff] text-center mb-4">With GrowthShark</h2>
                    <ul className="space-y-3 text-gray-300 text-sm sm:text-base px-4 sm:px-10">
                        <li><FaArrowRight className="inline mr-2 text-green-600" />Lesser Cost, Based On Service Not Headcount</li>
                        <li><FaArrowRight className="inline mr-2 text-green-600" />Quick Deal, And Quick Exit If Not Working</li>
                        <li><FaArrowRight className="inline mr-2 text-green-600" />Only One POC Is Enough To Take The Call</li>
                        <li><FaArrowRight className="inline mr-2 text-green-600" />Proactive Management & Updates</li>
                        <li><FaArrowRight className="inline mr-2 text-green-600" />Focused Team, Doing Marketing & Marketing Only</li>
                    </ul>
                </div>
            </div>

            {/* CTA Button */}
           {/* CTA Button */}
<div className="relative z-10 mt-10 sm:mt-12 text-center mb-10">
  <a
    href="https://calendly.com/proriterz101/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="block max-w-sm mx-auto
              bg-[#49b9ff] hover:bg-[#3aa8e8] text-black font-semibold 
               p-6  py-4 rounded-full 
               transition-all duration-300 
               text-sm sm:text-sm 
               leading-snug 
               break-words md:whitespace-nowrap"
  >
    Get A Free Consultation On How To Be Aggressive
  </a>
</div>

        </section>
        </div>
    );
};

export default Why;