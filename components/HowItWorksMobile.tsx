import Image from "next/image";

// Mobile Component
export default function HowItWorksMobile() {
  return (
    <section className="bg-[#faf8f4] px-6 py-12">
      {/* HEADER */}
      <h2 className="text-3xl font-semibold text-black text-center mb-12">
        What we do?
      </h2>

      {/* EVENTS */}
      <div className="flex gap-4 mb-16">
        <div className="relative w-35 h-55 rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/testi1.png"
            alt="Events"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2 text-black">
            Events
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            It's not about swiping or networking.<br />
            It's about showing up, connecting, and letting friendships grow naturally.
          </p>

          <button className="bg-[#e46f61] text-white px-5 py-2.5 rounded-lg w-40 text-sm mt-auto">
            Join an event
          </button>
        </div>
      </div>

      {/* SERIES */}
      <div className="flex gap-4 mb-16">
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-semibold mb-2 text-black">
            Series
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            It's not about swiping or networking.<br />
            It's about showing up, connecting, and letting friendships grow naturally.
          </p>

          <button className="bg-[#464646] text-white px-5 py-2.5 rounded-lg w-40 text-sm mt-auto">
            Join a series
          </button>
        </div>

        <div className="relative w-35 h-55 rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/testi2.png"
            alt="Series"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* COMMUNITY */}
      <div className="flex gap-4">
        <div className="relative w-35 h-55 rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/testi3.png"
            alt="Community"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2 text-black">
            Community
          </h3>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            It's not about swiping or networking.<br />
            It's about showing up, connecting, and letting friendships grow naturally.
          </p>

          <button className="bg-[#6f8f81] text-white px-5 py-2.5 rounded-lg w-fit text-sm mt-auto">
            Join the community
          </button>
        </div>
      </div>
    </section>
  );
}