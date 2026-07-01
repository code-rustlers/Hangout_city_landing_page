const steps = [
  {
    number: "01",
    title: "Pick your format",
    text: "Choose a Curated Table for an intimate setting or a Singles Mashup for more energy.",
    color: "bg-[#E56B5D]",
    rotate: "lg:-rotate-3",
  },
  {
    number: "02",
    title: "Download the app",
    text: "Download the app, choose your event, and book your spot.",
    color: "bg-[#6C8A7C]",
    rotate: "lg:rotate-2",
  },
  {
    number: "03",
    title: "We curate the room",
    text: "We verify profiles, build the guest list, and aim for a balanced gender ratio.",
    color: "bg-[#464646]",
    rotate: "lg:-rotate-1",
  },
  {
    number: "04",
    title: "Show up",
    text: "Venue details arrive 24 hours before the event on the app, SMS, or WhatsApp.",
    color: "bg-[#D8A84F]",
    rotate: "lg:rotate-3",
  },
];

const Cards = () => {
  return (
    <section id="cards" className="w-full bg-[#F8F6F3] py-16 lg:py-24">
      <div className="bg-[#464646] pt-14 pb-40 lg:pt-20 lg:pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            How it works?
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 lg:-mt-32">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`relative min-h-72 rounded-2xl border border-black/10 bg-white p-6 shadow-xl ${step.rotate}`}
              style={{ zIndex: steps.length - index }}
            >
              <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-full ${step.color}`}>
                <span className="text-sm font-bold text-white">{step.number}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
