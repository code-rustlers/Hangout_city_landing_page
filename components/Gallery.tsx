import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/hangouts-event-room.jpg",
    alt: "Hangouts event room with guests",
    className: "sm:col-span-2 lg:col-span-7 lg:row-span-2",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw",
  },
  {
    src: "/gallery/hangouts-conversation.jpg",
    alt: "Guests talking at a Hangouts event",
    className: "lg:col-span-5",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw",
  },
  {
    src: "/gallery/hangouts-party.jpg",
    alt: "Guests at a Hangouts singles event",
    className: "lg:col-span-5",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw",
  },
  {
    src: "/gallery/hangouts-group.jpg",
    alt: "Group of guests at a Hangouts event",
    className: "lg:col-span-5",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw",
  },
  {
    src: "/gallery/hangouts-table.jpg",
    alt: "Food and drinks at a Hangouts venue",
    className: "sm:col-span-2 lg:col-span-7",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-[#F8F6F3] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Gallery
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Recent tables, mixers, and nights out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[240px] lg:auto-rows-[230px] gap-3 md:gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-2xl bg-gray-200 shadow-sm ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={image.sizes}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
