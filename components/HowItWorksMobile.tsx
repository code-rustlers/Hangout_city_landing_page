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
      <div className="mb-8">
        <div className="flex items-stretch gap-4">
          <div className="w-45 h-58 relative shrink-0 rounded-2xl overflow-hidden">
            <Image src="/testi1.png" alt="Events" fill className="object-cover" />
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Events</h3>
            <p className="text-sm text-gray-600 mb-4">
              Meet 6 new people over dinner. Exact locations are shared 24 hours before.
            </p>

            <button className="mt-auto h-10 bg-[#E07A7A] text-white px-6 rounded-full text-sm font-medium hover:bg-[#d66a6a] transition-colors">
              Join an event
            </button>
          </div>
        </div>
      </div>

      {/* SERIES */}
      <div className="mb-8">
        <div className="flex items-stretch gap-4 flex-row-reverse">
          <div className="w-45 h-58 relative shrink-0 rounded-2xl overflow-hidden">
            <Image src="/testi2.png" alt="Series" fill className="object-cover" />
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Series</h3>
            <p className="text-sm text-gray-600 mb-4">
              Our multi-week series place you in the same small group across multiple dinners.
              Less small talk. Deeper connections.
            </p>

            <button className="mt-auto h-10 bg-[#6B7280] text-white px-6 rounded-full text-sm font-medium hover:bg-[#5a5f6b] transition-colors">
              Join a series
            </button>
          </div>
        </div>
      </div>

      {/* COMMUNITY */}
      <div>
        <div className="flex items-stretch gap-4">
          <div className="w-45 h-58 relative shrink-0 rounded-2xl overflow-hidden ">
            <Image src="/testi3.png" alt="Community" fill className="object-cover" />
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Community</h3>
            <p className="text-sm text-gray-600 mb-4">
              After attending events or a series, you can join the wider Hangouts community,
              containing runner&apos;s clubs, travel groups, party groups, etc.
            </p>

            <button className="mt-auto h-10 bg-[#7A9B8E] text-white px-4 rounded-full text-sm font-medium hover:bg-[#6a8a7d] transition-colors flex items-center justify-center text-center leading-tight">
              Join the<br />community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
