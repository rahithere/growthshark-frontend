import { useState } from "react";

function ReadyForHunt() {
  const [company, setCompany] = useState("");

  return (
    <section className="relative bg-black text-white px-6 py-16 overflow-hidden  max-w-6xl mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-sky-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Ready For The <br />
          <span className="text-[#2ea9ff] block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">HUNT?</span>
        </h2>

        {/* Quote */}
        <p className="text-[#2ea9ff] text-base sm:text-lg leading-relaxed mt-4 mb-6">
          “Visibility isn't given, it's seized. Growth happens when you <br /> dominate attention.”
        </p>

        {/* Sentence with Styled Input */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
          If you’ve come this far, welcome to the pack. Let's strategize how <br />
          <span className="text-[#2ea9ff] font-semibold">Growthshark X </span>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Type your company name"
            className="bg-transparent border-b border-gray-500 outline-none px-1 w-48 sm:w-60 text-[#2ea9ff] font-semibold text-center placeholder-gray-400"
          />{" "}
          <br />
          can make meaningful differences.
        </p>

        {/* CTA Button */}
         <a
            href="https://calendly.com/proriterz101/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-400 shadow-lg shadow-black/50 hover:brightness-110 transition text-black font-semibold px-8 py-3 rounded-full  text-sm sm:text-base  duration-300">
          Book Your Discovery Session →
        </a>
      </div>
    </section>
  );
}

export default ReadyForHunt;
