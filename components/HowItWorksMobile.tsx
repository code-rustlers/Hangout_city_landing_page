import Image from "next/image";

// Mobile Component
export default function HowItWorksMobile() {
  return (
    <div className="w-full bg-[#FAF9F6] py-12 px-6">
      {/* HEADER */}
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Our offerings
      </h2>

      {/* CURATED TABLE */}
      <div className="mb-8">
        <div className="flex items-stretch gap-4">
          <div className="w-45 h-58 relative shrink-0 rounded-2xl overflow-hidden">
            <Image src="/testi1.png" alt="Curated table" fill className="object-cover" />
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Curated Table</h3>
            <p className="text-sm text-gray-600">
              8-10 thoughtfully matched singles. Small, warm, and easy to talk.
            </p>
          </div>
        </div>
      </div>

      {/* SINGLES MIXER */}
      <div>
        <div className="flex items-stretch gap-4 flex-row-reverse">
          <div className="w-45 h-58 relative shrink-0 rounded-2xl overflow-hidden">
            <Image src="/testi2.png" alt="Singles mixer" fill className="object-cover" />
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Singles Mashup</h3>
            <p className="text-sm text-gray-600">
              Up to 25 curated singles in a lively, hosted setting. More chances, better conversations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
