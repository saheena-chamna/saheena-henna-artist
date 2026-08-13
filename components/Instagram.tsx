import Link from "next/link";

export default function Instagram() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">

          <div className="text-6xl mb-6">
            📸
          </div>

          <h2 className="text-5xl font-bold text-yellow-700 mb-6">
            Follow Us on Instagram
          </h2>

          <p className="text-gray-700 text-lg leading-8 max-w-3xl mx-auto">
            Stay updated with our latest bridal henna, Arabic henna,
            Eid designs, party henna, sarees, jewellery and exciting
            new arrivals. Follow us for daily inspiration and beautiful
            customer creations.
          </p>

          <div className="mt-8">
            <p className="text-2xl font-bold text-pink-600">
              @saheena_henna_artist
            </p>
          </div>

          <Link
            href="https://www.instagram.com/saheena_henna_artist"
            target="_blank"
            className="inline-block mt-8 bg-gradient-to-r from-pink-600 to-yellow-500 hover:scale-105 text-white px-10 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg"
          >
            📷 Follow on Instagram
          </Link>

          <p className="mt-8 text-gray-500 italic">
            Discover our newest henna designs, customer photos,
            festive collections and behind-the-scenes moments.
          </p>

        </div>

      </div>
    </section>
  );
}