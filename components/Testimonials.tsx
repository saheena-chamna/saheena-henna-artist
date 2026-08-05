export default function Testimonials() {
  const reviews = [
    {
      name: "Ayesha",
      review:
        "Absolutely beautiful bridal henna. Everyone loved the design and the service was excellent.",
    },
    {
      name: "Fatima",
      review:
        "Professional, friendly and very talented. I will definitely book again!",
    },
    {
      name: "Zainab",
      review:
        "The booking process on WhatsApp was quick and easy. Highly recommended!",
    },
  ];

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-yellow-700 mb-4">
          Happy Clients
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Here's what our customers have to say.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 italic">
                "{review.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold text-yellow-700">
                {review.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}