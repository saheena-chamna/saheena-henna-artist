import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Business */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Saheena Henna Artist
            </h2>

            <p className="text-gray-300 leading-7">
              Bringing Beauty, Tradition & Elegance to Every Occasion.
              Professional Bridal, Arabic, Party and Kids Henna in Cape Town.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/shop" className="hover:text-yellow-400 transition">
                  Shop
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-yellow-400 transition">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/booking" className="hover:text-yellow-400 transition">
                  Booking
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Contact
            </h3>

            <p className="mb-2">📍 Belhar, Cape Town</p>

            <p className="mb-2">
              📱 WhatsApp: 061 496 9371
            </p>

            <p className="mb-2">
              📧 info@saheenahenna.co.za
            </p>

            <p>
              🕘 Mon - Sun | 09:00 - 20:00
            </p>
          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-gray-400 text-sm">
          © 2026 Saheena Henna Artist. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}