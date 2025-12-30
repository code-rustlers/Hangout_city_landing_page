import Image from "next/image";

// Mobile Component
export default function HowItWorksMobile() {
  return (
    <div className="w-full bg-[#FAF9F6] py-12 px-6">
      {/* HEADER */}
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        What we do?
      </h2>

      {/* EVENTS */}
      <div className="mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="w-40 h-52 relative shrink-0 rounded-2xl overflow-hidden">
            <Image
              src="/testi1.png"
              alt="Events"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Events</h3>
            <p className="text-sm text-gray-600 mb-4">
              It's not about swiping or networking. It's about showing up,
              connecting, and letting friendships grow naturally.
            </p>
            <button className="bg-[#E07A7A] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#d66a6a] transition-colors">
              Join an event
            </button>
          </div>
        </div>
        {/* Line 1 - from Events to Series */}
        <div className="absolute -bottom-24 right-20 w-52 h-28 pointer-events-none z-10">
          <Image
            src="/line1.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* SERIES */}
      <div className="mb-4 relative pt-18 pb-4">
        {/* Line 2 - continuing from Events */}
        <div className="absolute left-12 w-52 h-28 pointer-events-none z-10 -bottom-15">
          <Image
            src="/line2.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="flex items-start gap-4 flex-row-reverse relative z-20">
          <div className="w-40 h-52 relative shrink-0 rounded-2xl overflow-hidden">
            <Image
              src="/testi2.png"
              alt="Series"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Series</h3>
            <p className="text-sm text-gray-600 mb-4">
              It's not about swiping or networking. It's about showing up,
              connecting, and letting friendships grow naturally.
            </p>
            <button className="bg-[#6B7280] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#5a5f6b] transition-colors">
              Join a series
            </button>
          </div>
        </div>
        {/* Line 3 - from Series to Community */}
        <div className="absolute -bottom-90 left-17 w-52 h-28 pointer-events-none z-100">
          <Image
            src="/line3.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* COMMUNITY */}
      <div className="relative pt-8">
        <div className="flex items-start gap-4">
          <div className="w-40 h-52 relative shrink-0 rounded-2xl overflow-hidden">
            <Image
              src="/testi3.png"
              alt="Community"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Community</h3>
            <p className="text-sm text-gray-600 mb-4">
              It's not about swiping or networking. It's about showing up,
              connecting, and letting friendships grow naturally.
            </p>
            <button className="bg-[#7A9B8E] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#6a8a7d] transition-colors">
              Join the community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}