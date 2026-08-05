export default function Services() {
  const services = [
    {
      title: "Bridal Henna",
      desc: "Elegant bridal designs for your special day.",
      icon: "👰",
    },
    {
      title: "Arabic Henna",
      desc: "Beautiful flowing Arabic-style patterns.",
      icon: "🌸",
    },
    {
      title: "Party Henna",
      desc: "Henna designs for birthdays and celebrations.",
      icon: "🎉",
    },
    {
      title: "Kids Henna",
      desc: "Safe and fun designs that children love.",
      icon: "🧒",
    },
  ];

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-700 mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Professional henna services for every occasion.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}