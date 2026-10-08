import StealthFinancial from '..//../assets/StealthFinancial.png';

function Financials() {
  return (
    <section className="text-white px-6 py-12 overflow-hidden max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Transparent <span className="text-[#44c8ff]">Financials</span>
        </h2>

        <img
          src={StealthFinancial}
          alt="Financial"
          className="w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-2"
        />

        <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed px-1 sm:px-4">
          We would love to sit <u>on a call</u> and discuss possibilities for your growth via our
          <u> Attack Mode</u>, but we will be upfront: our typical costs range between
          <strong> $500 to $1500</strong>, beyond which we believe it’s too much for you to spend on us,
          and below that is too little for us to stay ‘motivated’.
        </p>
      </div>
    </section>
  );
}

export default Financials;
