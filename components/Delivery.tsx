export default function Delivery() {
  return (
    <section className="py-20 bg-white" id="delivery">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-yellow-700 mb-4">
          Delivery & Collection
        </h2>

        <p className="text-center text-gray-600 mb-14 text-lg">
          We make shopping easy with nationwide courier, local delivery and convenient collection options.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Nationwide Courier */}
          <div className="bg-pink-50 rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="text-6xl mb-5">📦</div>

            <h3 className="text-2xl font-bold text-yellow-700 mb-4">
              Nationwide Courier
            </h3>

            <p className="text-gray-700 leading-7">
              We deliver anywhere in South Africa using
              <strong> PUDO Courier Service.</strong>
            </p>

            <p className="mt-5 text-green-700 font-semibold">
              WhatsApp us for a courier quotation.
            </p>
          </div>

          {/* Local Delivery */}
          <div className="bg-pink-50 rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="text-6xl mb-5">🚗</div>

            <h3 className="text-2xl font-bold text-yellow-700 mb-4">
              Local Delivery
            </h3>

            <p className="text-gray-700 leading-7">
              We provide our own delivery service within selected Cape Town areas.
            </p>

            <p className="mt-5 text-green-700 font-semibold">
              Contact us for delivery charges.
            </p>
          </div>

          {/* Collection */}
          <div className="bg-pink-50 rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="text-6xl mb-5">📍</div>

            <h3 className="text-2xl font-bold text-yellow-700 mb-4">
              Collection
            </h3>

            <p className="text-gray-700 leading-7">
              Collect your order from:
            </p>

            <div className="mt-5 font-semibold text-pink-700 space-y-2">
              <p>📍 Belhar</p>
              <p>📍 Rylands, Athlone</p>
            </div>
          </div>

          {/* Customer Arranged Delivery */}
          <div className="bg-pink-50 rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="text-6xl mb-5">🚚</div>

            <h3 className="text-2xl font-bold text-yellow-700 mb-4">
              Customer Arranged Delivery
            </h3>

            <p className="text-gray-700 leading-7">
              You're welcome to arrange your own courier, Uber, Bolt or delivery
              driver to collect your order once it is ready.
            </p>

            <p className="mt-4 text-gray-700 leading-7">
              Full payment must be received before any order is handed over.
            </p>

            <p className="mt-5 text-green-700 font-semibold">
              Banking details will be provided via WhatsApp. Proof of payment is required.
            </p>
          </div>

        </div>

        {/* Information Box */}
        <div className="mt-16 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-3xl p-10 text-center">

          <h3 className="text-3xl font-bold text-yellow-700 mb-6">
            Delivery, Courier & Collection
          </h3>

          <p className="text-gray-700 leading-8 max-w-3xl mx-auto">
            Whether you require nationwide courier, local delivery, collection
            from one of our collection points, or would like to arrange your own
            delivery driver, we're here to help. Contact us on WhatsApp for
            courier costs, delivery charges, banking details or to arrange a
            convenient collection time.
          </p>

          {/* Payment Notice */}
          <div className="mt-8 bg-white rounded-2xl shadow-md p-6 max-w-4xl mx-auto">

            <h4 className="text-2xl font-bold text-yellow-700 mb-4">
              📢 Payment Policy
            </h4>

            <p className="text-gray-700 leading-7">
              To ensure secure transactions, all orders must be paid in full
              before they are dispatched, collected or handed over to any
              courier or customer-arranged driver. Banking details will be sent
              via WhatsApp and proof of payment is required before release of
              any order.
            </p>

          </div>

          <a
            href="https://wa.me/27614969371"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-lg font-bold transition"
          >
            💬 Enquire About Delivery or Collection
          </a>

        </div>

      </div>
    </section>
  );
}