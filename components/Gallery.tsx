import Image from "next/image";

const images = [
  "/images/12.jpg",
  "/images/14.jpg",
  "/images/15.jpg",
  "/images/19.jpg",
  "/images/20.jpg",
  "/images/12.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-yellow-700 mb-4">
          Henna Gallery
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore some of our beautiful henna designs created with passion and care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 group"
            >
              <Image
                src={image}
                alt={`Henna Design ${index + 1}`}
                width={600}
                height={700}
                className="w-full h-96 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}