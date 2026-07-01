import Image from "next/image";

function HowItWorksDesktop() {
  return (
    <section className="bg-[#faf8f4] py-28">
      
      {/* SECTION HEADER */}
      <h2 className="text-6xl font-semibold text-center text-gray-800 mb-28">
        Our offerings
      </h2>

      <div className="max-w-7xl mx-auto space-y-36 px-20">

        {/* ROW 1 */}
        <div className="flex items-center justify-between gap-24">
          {/* TEXT */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Curated Table
            </h3>

            <p className="text-xl text-gray-600 leading-relaxed">
              8-10 thoughtfully matched singles. Small, warm, and easy to talk.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative w-150 h-72 rounded-xl overflow-hidden">
            <Image
              src="/group1.png"
              alt="Curated table"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex items-center justify-between gap-24">
          {/* IMAGE */}
          <div className="relative w-150 h-72 rounded-xl overflow-hidden">
            <Image
              src="/group2.png"
              alt="Singles mixer"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Singles Mashup
            </h3>

            <p className="text-xl text-gray-600 leading-relaxed">
              Up to 25 curated singles in a lively, hosted setting. More energy, more chances, better conversations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowItWorksDesktop;
