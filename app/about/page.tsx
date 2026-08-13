import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="bg-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-yellow-700 mb-6">
            About Saheena Henna Artist
          </h2>

          <p className="text-center text-gray-700 max-w-4xl mx-auto leading-8 text-lg mb-12">
            Welcome to <strong>Saheena Henna Artist</strong>, where tradition,
            beauty and creativity come together. We are passionate about making
            every occasion special by offering professional henna artistry,
            premium-quality henna products and elegant accessories. Whether
            you're preparing for a wedding, Eid celebration, party or any
            special event, we are here to help you look and feel your best.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">
                🌿 Professional Henna Services
              </h3>

              <p className="text-gray-700 leading-7">
                Professional henna artist available for all occasions including:
              </p>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✔ Bridal Henna</li>
                <li>✔ Arabic Henna</li>
                <li>✔ Eid Henna</li>
                <li>✔ Party Henna</li>
                <li>✔ Birthday Functions</li>
                <li>✔ Baby Showers</li>
                <li>✔ Festivals & Special Events</li>
                <li>✔ Home Service Available</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">
                🛍 Our Products
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Premium Henna Cones</li>
                <li>✔ Nail Henna Cones</li>
                <li>✔ Halaal Henna Nail Polish</li>
                <li>✔ Organic Henna Powder</li>
                <li>✔ Beautiful Indian Jewellery</li>
                <li>✔ Traditional Sarees</li>
                <li>✔ Bindis & Accessories</li>
                <li>✔ New Products Added Regularly</li>
              </ul>
            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10 mt-12">

            <h3 className="text-3xl font-bold text-center text-yellow-700 mb-6">
              Why Choose Saheena Henna Artist?
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">

              <div>✨ Professional & Friendly Service</div>

              <div>🌿 Premium Quality Products</div>

              <div>🚚 Nationwide Courier Available</div>

              <div>🏠 Home Service Available</div>

              <div>💬 Easy WhatsApp Ordering</div>

              <div>❤️ Customer Satisfaction Is Our Priority</div>

            </div>

          </div>

          <p className="text-center text-xl text-pink-700 font-semibold mt-12 leading-8">
            From stunning henna designs to premium products, beautiful jewellery
            and elegant sarees, Saheena Henna Artist is your one-stop
            destination for beauty, tradition and celebration. We look forward
            to being part of your special moments.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}