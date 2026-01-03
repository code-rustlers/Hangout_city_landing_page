import Image from "next/image";

function HowItWorksDesktop() {
  return (
    <section className="bg-[#faf8f4] py-28">
      
      {/* SECTION HEADER */}
      <h2 className="text-6xl font-semibold text-center text-gray-800 mb-28">
        What we do?
      </h2>

      <div className="max-w-7xl mx-auto space-y-36 px-20">

        {/* ROW 1 */}
        <div className="flex items-center justify-between gap-24">
          {/* TEXT */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Events
            </h3>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Meet 6 new people over dinner. Exact Locations are shared 24 hours before.
            </p>

            <button className="bg-[#e46f61] text-white px-8 py-3.5 rounded-lg text-base font-medium">
              Join an Event
            </button>
          </div>

          {/* IMAGE */}
          <div className="relative w-150 h-72 rounded-xl overflow-hidden">
            <Image
              src="/group1.png"
              alt="Events"
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
              alt="Series"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Series
            </h3>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our multi-week series place you in the same small group across multiple dinners. Less small talk. Deeper connections.
            </p>

            <button className="bg-[#464646] text-white px-8 py-3.5 rounded-lg text-base font-medium">
              Join a Series
            </button>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="flex items-center justify-between gap-24">
          {/* TEXT */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Community
            </h3>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              After attending events or a series, you can join the wider Hangouts community, containing runner's clubs, travel groups, party groups, etc.
            </p>

            <button className="bg-[#6f8f81] text-white px-8 py-3.5 rounded-lg text-base font-medium">
              Join a Community
            </button>
          </div>

          {/* IMAGE */}
          <div className="relative w-150 h-72 rounded-xl overflow-hidden">
            <Image
              src="/group3.png"
              alt="Community"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowItWorksDesktop;
