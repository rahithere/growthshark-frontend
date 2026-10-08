import Stealth from '../../assets/Stealth.jpg';

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center text-white px-4"
       style={{ backgroundImage: `url(${Stealth})` }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Stalk <br /> In{" "}
            <span className="text-[#2ea9ff]">
              Stealth
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mt-4">
            Pull yourself together before the hunt!
          </p>
          <a
              href="https://calendly.com/proriterz101/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-6 px-6 py-3 bg-[#49b9ff] hover:bg-[#3aa8e8] text-black font-semibold rounded-full shadow-lg transition text-sm sm:text-base lg:text-lg cursor-pointer"
              >
                CHECK YOUR ELIGIBILITY
             </a>
          
        </div>
      </div>
    </section>
  );
}