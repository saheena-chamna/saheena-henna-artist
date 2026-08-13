import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home henna.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        <p className="text-lg md:text-xl uppercase tracking-[5px] text-yellow-300 mb-4">
          Welcome to
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Saheena <span className="text-yellow-400">Henna Artist</span>
        </h1>

        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
          Bringing Beauty, Tradition & Elegance to Every Occasion.
          Bridal Henna, Arabic Henna, Eid Designs, Party Henna,
          Kids Henna and Home Service across Cape Town.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

  <Link
    href="#booking"
    className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg"
  >
    📅 Book Appointment
  </Link>

  <Link
   href="#products"
    className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300"
  >
    🛍 Shop Products
  </Link>

  <a
    href="#delivery"
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg"
  >
    🚚 Delivery & Collection
  </a>

</div>

      </div>
    </section>
  );
}