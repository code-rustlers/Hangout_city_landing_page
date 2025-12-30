

const HowItWorks = () => {
  return (
    <div className="w-full" id="cards">
      {/* Mobile View - Shows the cards using the image */}
      <div className="block lg:hidden" style={{ backgroundColor: "#F8F6F3" }}>
        <div className="relative max-w-md mx-auto ">
          {/* Black header card - rendered first */}
          <div className="bg-[#464646] pt-12 relative h-60" >
            <h2 className="text-4xl font-bold text-white text-center">How it works?</h2>
          </div>
          
          {/* Cards image - overlaying on top */}
          <div className="relative -mt-35 pb-4">
            <img 
              src="./stacked_cards.png" 
              alt="How it works - Pick your vibe, We curate the group, Show up & connect"
              className="w-full h-auto object-contain "
            />
          </div>
        </div>
      </div>

      {/* Desktop View - Empty for now */}
    </div>
  );
};

export default HowItWorks;