import Image from "next/image";
import HowItWorksMobile from "./HowItWorksMobile";


function HowItWorksDesktop() {
  return (
    <section className="bg-[#faf8f4] relative">

      {/* STEP 1 */}
      <div className="bg-[#6f8f81] w-full px-20 py-20 pb-32 relative">
        
        {/* CENTERED HEADER */}
        <h2 className="text-5xl font-semold text-white text-center mb-10">
          How it works?
        </h2>
        

        {/* CONTENT ROW */}
        <div className="flex items-center justify-between">
          <div className="max-w-md text-white pt-40">
            <h3 className="text-2xl font-semibold mb-3">
              We curate the group
            </h3>

            <p className="text-xl leading-relaxed opacity-90">
              We match you with people from different backgrounds,
              same wavelength.
            </p>
          </div>

          {/* IMAGE MERGING INTO CREAM BACKGROUND */}
          <div className="relative w-163.5 h-80 rounded-xl overflow-hidden translate-y-40 z-10">
            <Image
              src="/group.png"
              alt="Group"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* STEP 2 */}
      <div className="bg-[#faf8f4] w-full px-20 py-32 pt-40 flex items-center justify-between">
        <div className="relative w-163.5 h-80 rounded-xl overflow-hidden">
          <Image
            src="/group.png"
            alt="Group"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-md">
          <h3 className="text-2xl font-semibold mb-3 text-black">
            Pick your vibe
          </h3>

          <p className="text-xl text-gray-600 leading-relaxed">
            One dinner, a weekly series, or a quick personality quiz
            to get started.
          </p>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="bg-[#e46f61] w-full px-20 py-32 pt-20 relative">

        <div className="flex items-center justify-between">
          <div className="max-w-md text-white -translate-y-14">
            <h3 className="text-2xl font-semibold mb-3">
              Show up & connect
            </h3>

            <p className="text-xl leading-relaxed opacity-90">
              Good conversations, shared experiences,
              zero pressure to "perform".
            </p>
          </div>

          {/* IMAGE MERGING INTO CREAM BACKGROUND */}
          <div className="relative w-163.5 h-80 rounded-xl overflow-hidden -translate-y-28">
            <Image
              src="/group.png"
              alt="Group"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

    </section>
  );
}


export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="md:hidden">
        <HowItWorksMobile />
      </div>
      <div className="hidden md:block">
        <HowItWorksDesktop />
      </div>
    </section>
  );
}