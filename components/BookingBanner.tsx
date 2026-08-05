export default function BookingBanner() {
  return (
    <section className="bg-yellow-700 text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Book Your Henna Appointment?
        </h2>

        <p className="text-lg mb-8">
          Bridal • Arabic • Eid • Party • Kids Henna
        </p>

        <a
          href="https://wa.me/27614969371?text=Hello%20Saheena%20Henna%20Artist,%20I%20would%20like%20to%20book%20a%20henna%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-yellow-700 px-8 py-4 rounded-full font-bold hover:bg-yellow-100 transition"
        >
          💬 Book on WhatsApp
        </a>
      </div>
    </section>
  );
}