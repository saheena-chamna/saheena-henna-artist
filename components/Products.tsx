"use client";

import { useState } from "react";
import Image from "next/image";
import ProductModal from "./ProductModal";

const products = [
  {
    name: "Henna Cone",
    category: "Henna",
    price: "R30",
    image: "/images/12.jpg",
  },
  {
    name: "Nail Cone",
    category: "Henna",
    price: "R30",
    image: "/images/14.jpg",
  },
  {
    name: "Henna Powder (250g)",
    category: "Henna",
    price: "R60",
    image: "/images/15.jpg",
  },
  {
    name: "Halaal Henna Nail Polish",
    category: "Nail Polish",
    price: "R50",
    image: "/images/henna-nail-polish.jpg",
  },
  {
    name: "Jewellery",
    category: "Jewellery",
    price: "R50 - R200",
    image: "/images/20.jpg",
  },
  {
    name: "Bindis",
    category: "Bindis",
    price: "R30",
    image: "/images/12.jpg",
  },
 {
  name: "Elegant Saree",
  category: "Sarees",
  price: "R700",
  image: "/images/sarees/saree-1.jpg",
  description:
    "A beautifully designed saree crafted from premium-quality fabric for a graceful and elegant look. Perfect for weddings, Eid celebrations, family functions, parties and other special occasions. Comfortable to wear with a timeless style that will make you stand out wherever you go.",
},
{
  name: "Traditional Saree",
  category: "Sarees",
  price: "R700",
  image: "/images/sarees/saree-2.jpg",
  description:
    "Celebrate tradition with this stunning Indian saree, designed with beautiful detailing and a classic finish. Ideal for weddings, religious occasions, cultural events and festive celebrations. A perfect combination of elegance, comfort and traditional beauty.",
},
{
  name: "Classic Saree",
  category: "Sarees",
  price: "R700",
  image: "/images/sarees/saree-3.jpg",
  description:
    "This classic saree offers timeless elegance with premium-quality fabric and a sophisticated design. Suitable for formal events, weddings, family gatherings and festive occasions. Designed to provide comfort while making you look stylish and graceful.",
},
{
  name: "Designer Saree",
  category: "Sarees",
  price: "R700",
  image: "/images/sarees/saree-4.jpg",
  description:
    "A modern designer saree featuring stylish patterns and elegant detailing. Perfect for weddings, receptions, parties, Eid and special celebrations. Carefully selected to offer a fashionable look while maintaining traditional charm and exceptional comfort.",
},
{
  name: "Premium Saree",
  category: "Sarees",
  price: "R700",
  image: "/images/sarees/saree-5.jpg",
  description:
    "Made from high-quality fabric with luxurious finishing, this premium saree is ideal for women who appreciate elegance and style. Perfect for weddings, engagement ceremonies, festive occasions and special events where you want to make a lasting impression.",
},
{
  name: "Luxury Saree",
  category: "Sarees",
  price: "R700",
  image: "/images/sarees/saree-6.jpg",
  description:
    "Our luxury saree collection is designed for unforgettable moments. Featuring premium fabric, elegant craftsmanship and a sophisticated finish, it is perfect for brides, wedding guests, Eid celebrations and other memorable occasions. A beautiful choice for those who value quality, comfort and timeless elegance.",
},
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");


  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-yellow-700 mb-4">
          Our Products
        </h2>

        <p className="text-center text-gray-600 mb-12">
  Premium henna products available across South Africa.
</p>

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
        Beautiful Halaal Henna Nail Polish available in multiple colours.
        Perfect for weddings, Eid, parties and everyday wear.
        Easy to apply, long-lasting and suitable for every occasion.
      </p>

      <div className="flex gap-3 mt-6 flex-wrap">
        <span className="bg-yellow-100 px-4 py-2 rounded-full">🟤 Brown</span>
        <span className="bg-gray-200 px-4 py-2 rounded-full">⚫ Black</span>
        <span className="bg-red-100 px-4 py-2 rounded-full">🔴 Red</span>
        <span className="bg-purple-100 px-4 py-2 rounded-full">🟣 Maroon</span>
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
        alt="Henna Nail Polish"
        width={500}
        height={500}
        className="rounded-3xl shadow-xl"
      />
    </div>

  </div>

</div>
   <div className="flex flex-wrap justify-center gap-4 mb-12">

  {[
    { name: "All", icon: "🛍️" },
    { name: "Henna", icon: "🌿" },
    { name: "Nail Polish", icon: "💅" },
    { name: "Sarees", icon: "👗" },
    { name: "Jewellery", icon: "💍" },
    { name: "Bindis", icon: "✨" },
  ].map((category) => (
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

<div className="max-w-lg mx-auto mb-12">
  <input
    type="text"
    placeholder="🔍 Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border border-gray-300 rounded-full px-6 py-4 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
  />
</div>

<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
 {products
 .filter(
  (product) =>
    (selectedCategory === "All" ||
      product.category === selectedCategory) &&
    product.name.toLowerCase().includes(search.toLowerCase())
)
  .map((product) => (

            <div
              key={product.name}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

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