const HowItWorks = () => {
  return (
    <div className="w-full" id="cards">
      {/* ===================== */}
      {/* Mobile View (UNCHANGED) */}
      {/* ===================== */}
      <div className="block lg:hidden" style={{ backgroundColor: "#F8F6F3" }}>
        <div className="relative max-w-md mx-auto">
          <div className="bg-[#464646] pt-12 relative h-60">
            <h2 className="text-4xl font-bold text-white text-center">
              How it works?
            </h2>
          </div>

          <div className="relative -mt-35 pb-4">
            <img
              src="./stacked_cards.png"
              alt="How it works - Pick your vibe, We curate the group, Show up & connect"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* Desktop View (FIXED) */}
      {/* ===================== */}
      <div className="hidden lg:block" style={{ backgroundColor: "#F8F6F3" }}>
        {/* Full-width black header */}
        <div className="bg-[#464646] pt-20 h-80 w-full">
          <h2 className="text-5xl font-bold text-white text-center">
            How it works?
          </h2>
        </div>

        {/* Constrained content below */}
        <div className="relative max-w-7xl mx-auto">
          {/* Larger desktop image */}
          <div className="relative -mt-48 flex justify-center">
            <img
              src="./stacked_cards_desktop.png"
              alt="How it works desktop view"
              className="w-full max-w-6xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
