"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BookingPage() {
  return (
    <>
      <Header />

      <section className="py-20 bg-pink-50">
        <div className="max-w-3xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center text-yellow-700 mb-4">
            Book Your Appointment
          </h1>

          <p className="text-center text-gray-600 mb-12">
            Fill in your details and we'll prepare your WhatsApp booking.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
              const date = (form.elements.namedItem("date") as HTMLInputElement).value;
              const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
              const notes = (form.elements.namedItem("notes") as HTMLTextAreaElement).value;

              const message =
                `Hello Saheena Henna Artist!%0A%0A` +
                `Name: ${name}%0A` +
                `Phone: ${phone}%0A` +
                `Date: ${date}%0A` +
                `Service: ${service}%0A` +
                `Notes: ${notes}`;

              window.open(
                `https://wa.me/27614969371?text=${message}`,
                "_blank"
              );
            }}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
          >
            <input
              name="name"
              placeholder="Full Name"
              required
              className="w-full border rounded-lg p-3"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border rounded-lg p-3"
            />

            <input
              type="date"
              name="date"
              required
              className="w-full border rounded-lg p-3"
            />

            <select
              name="service"
              className="w-full border rounded-lg p-3"
            >
              <option>Bridal Henna</option>
              <option>Arabic Henna</option>
              <option>Party Henna</option>
              <option>Kids Henna</option>
            </select>

            <textarea
              name="notes"
              rows={4}
              placeholder="Additional Notes"
              className="w-full border rounded-lg p-3"
            />

            <button
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4 rounded-lg font-bold"
            >
              Book on WhatsApp
            </button>
          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}