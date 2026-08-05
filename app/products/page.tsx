import Header from "../../components/Header";
import Footer from "../../components/Footer";

const products = [
  {
    name: "Henna Cone",
    price: "R30",
    image: "/images/henna-cone.jpg",
  },
  {
    name: "Halal Nail Polish",
    price: "R50",
    image: "/images/nail-polish.jpg",
  },
  {
    name: "Henna Powder (250g)",
    price: "R60",
    image: "/images/henna-powder.jpg",
  },
  {
    name: "Bindis",
    price: "R30",
    image: "/images/bindis.jpg",
  },
  {
    name: "Jewellery",
    price: "From R50",
    image: "/images/jewellery.jpg",
  },
  {
    name: "Sarees",
    price: "From R700",
    image: "/images/saree.jpg",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center text-yellow-700 mb-4">
            Our Shop
          </h1>

          <p className="text-center text-gray-600 mb-12">
            Browse our beautiful henna products and accessories.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-yellow-700">
                    {product.name}
                  </h2>

                  <p className="text-xl font-semibold mt-2">
                    {product.price}
                  </p>

                  <a
                    href={`https://wa.me/27614969371?text=Hello, I'm interested in ${product.name}.`}
                    target="_blank"
                    className="block mt-6 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-bold"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}