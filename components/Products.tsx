import Image from "next/image";

const products = [
  {
    name: "Henna Cone",
    price: "R30",
    image: "/images/12.jpg",
  },
  {
    name: "Nail Cone",
    price: "R30",
    image: "/images/14.jpg",
  },
  {
    name: "Henna Powder (250g)",
    price: "R60",
    image: "/images/15.jpg",
  },
  {
    name: "Halaal Nail Polish",
    price: "R50",
    image: "/images/19.jpg",
  },
  {
    name: "Jewellery",
    price: "R50 - R200",
    image: "/images/20.jpg",
  },
  {
    name: "Bindis",
    price: "R30",
    image: "/images/12.jpg",
  },
  {
    name: "Sarees",
    price: "R700",
    image: "/images/14.jpg",
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-yellow-700 mb-4">
          Our Products
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Premium henna products available for delivery across South Africa.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-yellow-700">
                  {product.name}
                </h3>

                <p className="text-pink-600 font-bold text-xl my-3">
                  {product.price}
                </p>

                <a
                  href={`https://wa.me/27614969371?text=Hello%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}