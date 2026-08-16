"use client";

import { useState } from "react";
import Image from "next/image";
import ProductModal from "./ProductModal";

const products = [
  {
    name: "Natural Henna Cone",
    category: "Henna Cones",
    price: "R30",
    image: "/images/cones/natural/natural-cone.webp",
    description:
      "Natural henna cone suitable for beautiful traditional henna designs, bridal henna, Eid, parties and special occasions.",
  },

  {
    name: "Instant Henna Cone",
    category: "Henna Cones",
    price: "R30",
    image: "/images/cones/instant/instant-black.jpeg",
    description:
      "Instant henna cone available in Black and Red. Perfect for customers looking for a quick and convenient henna application.",
    colours: ["Black", "Red"],
    colourImages: {
      Black: "/images/cones/instant/instant-black.jpeg",
      Red: "/images/cones/instant/instant-red.jpeg",
    },
  },

  {
    name: "Rizwana Nail Henna Cone",
    category: "Henna Cones",
    price: "R30",
    image: "/images/cones/rizwana/rizwana-nailcone.jpeg",
    description:
      "Natural Rizwana nail henna cone, popularly known in Cape Town as a Rizwana cone. Designed specifically for beautiful natural henna application on nails and fingertips.",
  },

 {
  name: "Natural Henna Powder",
  category: "Henna",
  price: "From R30",
  image: "/images/henna-powder.jpg",
  description:
    "Natural henna powder is made from the dried and finely ground leaves of the Lawsonia inermis plant. Traditionally used for natural hair colouring, hair care, nail staining and temporary henna body art.",
  sizes: [
    { size: "100g", price: 30 },
    { size: "250g", price: 60 },
    { size: "500g", price: 110 },
    { size: "1kg", price: 150 },
  ],
},
  {
    name: "Halaal Henna Nail Polish",
    category: "Nail Polish",
    price: "R50",
    image: "/images/henna-nail-polish.jpg",
    description:
      "Beautiful Halaal Henna Nail Polish available in multiple colours. Perfect for weddings, Eid, parties and everyday wear.",
  },

  {
    name: "Jewellery",
    category: "Jewellery",
    price: "R50 - R200",
    image: "/images/20.jpg",
    description:
      "Beautiful jewellery pieces suitable for weddings, Eid, parties and special occasions.",
  },

  {
    name: "Bindis",
    category: "Bindis",
    price: "R30",
    image: "/images/12.jpg",
    description:
      "Beautiful bindi packs suitable for traditional and special occasions.",
  },

  {
    name: "Elegant Saree",
    category: "Sarees",
    price: "R700",
    image: "/images/sarees/saree-1.jpg",
    description:
      "A beautifully designed saree crafted from premium-quality fabric for a graceful and elegant look. Perfect for weddings, Eid celebrations, family functions, parties and other special occasions.",
  },

  {
    name: "Traditional Saree",
    category: "Sarees",
    price: "R700",
    image: "/images/sarees/saree-2.jpg",
    description:
      "Celebrate tradition with this stunning Indian saree, designed with beautiful detailing and a classic finish. Ideal for weddings, religious occasions, cultural events and festive celebrations.",
  },

  {
    name: "Classic Saree",
    category: "Sarees",
    price: "R700",
    image: "/images/sarees/saree-3.jpg",
    description:
      "This classic saree offers timeless elegance with premium-quality fabric and a sophisticated design. Suitable for formal events, weddings, family gatherings and festive occasions.",
  },

  {
    name: "Designer Saree",
    category: "Sarees",
    price: "R700",
    image: "/images/sarees/saree-4.jpg",
    description:
      "A modern designer saree featuring stylish patterns and elegant detailing. Perfect for weddings, receptions, parties, Eid and special celebrations.",
  },

  {
    name: "Premium Saree",
    category: "Sarees",
    price: "R700",
    image: "/images/sarees/saree-5.jpg",
    description:
      "Made from high-quality fabric with luxurious finishing, this premium saree is ideal for women who appreciate elegance and style.",
  },

  {
    name: "Luxury Saree",
    category: "Sarees",
    price: "R700",
    image: "/images/sarees/saree-6.jpg",
    description:
      "Our luxury saree collection is designed for unforgettable moments. Featuring premium fabric, elegant craftsmanship and a sophisticated finish.",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    { name: "All", icon: "🛍️" },
    { name: "Henna Cones", icon: "🌿" },
    { name: "Henna", icon: "🌱" },
    { name: "Nail Polish", icon: "💅" },
    { name: "Sarees", icon: "👗" },
    { name: "Jewellery", icon: "💍" },
    { name: "Bindis", icon: "✨" },
  ];

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-yellow-700 mb-4">
          Our Products
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Premium henna products available across South Africa.
        </p>

        {/* FEATURED NAIL POLISH */}

        <div className="bg-gradient-to-r from-yellow-100 via-white to-pink-100 rounded-3xl shadow-xl p-8 mb-12">

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>

              <span className="bg-pink-600 text-white px-4 py-2 rounded-full font-bold">
                ⭐ Featured Product
              </span>

              <h2 className="text-4xl font-bold text-yellow-700 mt-6">
                Halaal Henna Nail Polish
              </h2>

              <p className="text-gray-700 mt-4 leading-7">
                Beautiful Halaal Henna Nail Polish available in multiple
                colours. Perfect for weddings, Eid, parties and everyday wear.
              </p>

              <div className="flex gap-3 mt-6 flex-wrap">

                <span className="bg-yellow-100 px-4 py-2 rounded-full">
                  🟤 Brown
                </span>

                <span className="bg-gray-200 px-4 py-2 rounded-full">
                  ⚫ Black
                </span>

                <span className="bg-red-100 px-4 py-2 rounded-full">
                  🔴 Red
                </span>

                <span className="bg-purple-100 px-4 py-2 rounded-full">
                  🟣 Maroon
                </span>

              </div>

              <p className="text-4xl font-bold text-pink-600 mt-8">
                R50
              </p>

              <button
                onClick={() =>
                  setSelectedProduct(
                    products.find(
                      (p) => p.name === "Halaal Henna Nail Polish"
                    )
                  )
                }
                className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition"
              >
                View Product
              </button>

            </div>

            <div>

              <Image
                src="/images/henna-nail-polish.jpg"
                alt="Halaal Henna Nail Polish"
                width={500}
                height={500}
                className="rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </div>

        {/* CATEGORIES */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {categories.map((category) => (

            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.name
                  ? "bg-yellow-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-pink-100"
              }`}
            >
              {category.icon} {category.name}
            </button>

          ))}

        </div>

        {/* SEARCH */}

        <div className="max-w-lg mx-auto mb-12">

          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-6 py-4 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

        </div>

        {/* PRODUCTS */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products
            .filter(
              (product) =>
                (selectedCategory === "All" ||
                  product.category === selectedCategory) &&
                product.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
            )
            .map((product) => (

              <div
                key={product.name}
                className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                {product.category === "Henna Cones" && (
                  <span className="absolute top-4 left-4 bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    HENNA CONE
                  </span>
                )}

                {product.name.includes("Saree") && (
                  <span className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    NEW
                  </span>
                )}

                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                />

                <div className="p-6 text-center">

                  <h3 className="text-2xl font-bold text-yellow-700">
                    {product.name}
                  </h3>

                  <p className="text-pink-600 font-bold text-xl mt-3">
                    {product.price}
                  </p>

                  <div className="flex justify-center mt-3 text-yellow-500 text-lg">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    Premium Quality
                  </p>

                  <p className="text-green-600 font-semibold mt-2">
                    🚚 Courier Available
                  </p>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full w-full transition"
                  >
                    View Product
                  </button>

                </div>

              </div>

            ))}

        </div>

      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </section>
  );
}