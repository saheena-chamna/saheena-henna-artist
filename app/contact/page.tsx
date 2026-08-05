import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-pink-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold text-center text-yellow-700 mb-4">
            Contact Saheena Henna Artist
          </h1>

          <p className="text-center text-gray-600 text-lg mb-12">
            We'd love to hear from you. Contact us today to book your henna appointment.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">

              <div>
                <h2 className="text-2xl font-bold text-yellow-700">
                  📱 WhatsApp
                </h2>
                <p className="text-gray-700 mt-2">
                  061 496 9371
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-yellow-700">
                  📧 Email
                </h2>
                <p className="text-gray-700 mt-2">
                  info@saheenahenna.co.za
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-yellow-700">
                  📍 Location
                </h2>
                <p className="text-gray-700 mt-2">
                  Belhar, Cape Town, South Africa
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-yellow-700">
                  🕘 Business Hours
                </h2>
                <p className="text-gray-700 mt-2">
                  Monday - Sunday
                </p>
                <p className="text-gray-700">
                  09:00 AM - 08:00 PM
                </p>
              </div>

              <a
                href="https://wa.me/27614969371?text=Hello%20Saheena%20Henna%20Artist,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-bold transition"
              >
                💬 Book on WhatsApp
              </a>

            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=Belhar,Cape+Town&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                className="border-0"
              />
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}