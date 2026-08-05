import Header from "../../components/Header";
import Footer from "../../components/Footer";

const services = [
  {
    title: "Bridal Henna",
    description: "Luxury bridal henna designs for your special day.",
    icon: "👰"
  },
  {
    title: "Party Henna",
    description: "Beautiful henna for birthdays and celebrations.",
    icon: "🎉"
  },
  {
    title: "Eid Henna",
    description: "Traditional henna designs for Eid and festive occasions.",
    icon: "🌙"
  },
  {
    title: "Kids Henna",
    description: "Simple and fun henna designs for children.",
    icon: "👧"
  },
  {
    title: "Home Service",
    description: "We come to your home for your convenience.",
    icon: "🏠"
  },
  {
    title: "Custom Designs",
    description: "Personalized henna artwork designed just for you.",
    icon: "✨"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold text-center text-yellow-700 mb-4">
            Our Services
          </h1>

          <p className="text-center text-gray-600 mb-12">
            Professional henna services for every occasion.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>

                <h2 className="text-2xl font-bold text-yellow-700 mb-3">
                  {service.title}
                </h2>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}