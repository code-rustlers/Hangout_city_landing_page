import Image from "next/image";
import HowItWorksMobile from "./HowItWorksMobile";
import HowItWorksDesktop from "./WorksDesktop";


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