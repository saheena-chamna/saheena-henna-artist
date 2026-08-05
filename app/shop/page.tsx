import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Products from "../../components/Products";

export default function ShopPage() {
  return (
    <>
      <Header />

      <section className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-yellow-700">
            Our Shop
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Browse our henna products and order directly on WhatsApp.
          </p>
        </div>
      </section>

      <Products />

      <Footer />
    </>
  );
}