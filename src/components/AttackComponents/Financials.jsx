import Financial from '..//../assets/Financial.png';

function Financials() {
  return (
    <section className="relative bg-black text-white px-6 py-16 overflow-hidden">
      {/* Center Glow - Optional (like in Why section) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[350px] h-[350px] bg-[#49b9ff]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
          Transparent <span className="text-[#2ea9ff]">Financials</span>
        </h2>

        <img src={Financial} 
        alt="Financial" 
        className="w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-2" 
        />

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          We'd love to <span className="text-[#49b9ff]">discuss</span> your growth via our Attack Mode. To be upfront, our typical costs  <br /> range between <strong>$1000 and $2000</strong> — above that feels excessive, below that won't keep us  <br /> 'motivated'.
        </p>
      </div>
    </section>
  );
}

export default Financials;
