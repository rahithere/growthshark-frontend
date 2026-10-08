import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Portfolio1 from "../assets/Portfolio1.jpg";
import Portfolio2 from "../assets/Portfolio2.jpg";
import Portfolio3 from "../assets/Portfolio3.jpg";
import Portfolio4 from "../assets/Portfolio4.jpg";
import Portfolio5 from "../assets/Portfolio5.jpg";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] px-6 py-20 relative overflow-hidden">
      <Helmet>
        <title>Explore Successful Campaigns and Case Studies | Growthshark</title>
        <meta name="description" content="Discover GrowthShark’s mission vision & success stories and learn how we help brands achieve growth with innovative strategies. Contact us Today." />
      </Helmet>
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-80 h-80 bg-sky-500 rounded-full blur-3xl absolute top-20 left-10"></div>
        <div className="w-96 h-96 bg-blue-900 rounded-full blur-3xl absolute bottom-0 right-10"></div>
      </div>

     
      <div className="relative grid gap-6 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10 pt-20">
       
         <Link to="/portfolio/smm1" className="relative bg-[#0b2a6d] text-white rounded-xl overflow-hidden group transform transition hover:scale-105 shadow-lg">
            <img src={Portfolio1} alt="Portfolio1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
              <p className="text-xl font-bold">SMM CASE 1</p>
            </div>
          </Link>

          <Link to="/portfolio/smm2" className="relative bg-[#0b2a6d] text-white rounded-xl overflow-hidden group transform transition hover:scale-105 shadow-lg">
            <img src={Portfolio2} alt="Portfolio2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
              <p className="text-xl font-bold">SMM CASE 2</p>
            </div>
          </Link>

          <Link to="/portfolio/pms" className="relative bg-white text-black rounded-xl overflow-hidden group transform transition hover:scale-105 shadow-lg">
            <img src={Portfolio3} alt="Portfolio3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
              <p className="text-xl font-bold text-white">Property Management Software</p>
            </div>
          </Link>

          <Link to="/portfolio/ocs" className="relative bg-[#f4eee7] text-black rounded-xl overflow-hidden group transform transition hover:scale-105 shadow-lg ">
            <img src={Portfolio4} alt="Portfolio4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
              <p className="text-xl font-bold text-white">Outreach Case Study</p>
            </div>
          </Link>

          <Link to="/portfolio/cb2b" className="relative bg-[#d3e8f8] text-black rounded-xl overflow-hidden group transform transition hover:scale-105 shadow-lg ">
            <img src={Portfolio5} alt="Portfolio5" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
              <p className="text-xl font-bold text-white">Custom B2B Case Study</p>
            </div>
          </Link>
      </div>
    </div>
  );
}
