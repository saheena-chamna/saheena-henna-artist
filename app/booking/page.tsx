"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BookingPage() {
  return (
    <>
      <Header />

      <section className="py-20 bg-pink-50">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold text-center text-yellow-700 mb-6">
            🌸 Book Your Henna Appointment
          </h1>

          <p className="text-center text-gray-700 text-lg leading-8 max-w-3xl mx-auto mb-12">
            Thank you for choosing <strong>Saheena Henna Artist.</strong>
            Whether you're booking for a wedding, Eid, engagement,
            birthday, baby shower or any special occasion, we're here
            to create beautiful henna designs that make your day even
            more memorable.
          </p>

          {/* Information Cards */}

          <div className="grid md:grid-cols-2 gap-6 mb-12">

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-yellow-700 mb-3">
                👰 Bridal Specialist
              </h3>

              <p className="text-gray-700">
                Elegant bridal henna designed with care for your
                unforgettable day.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-yellow-700 mb-3">
                🏠 Home Service
              </h3>

              <p className="text-gray-700">
                Home appointments available across selected Cape Town areas.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-yellow-700 mb-3">
                🌿 Professional Henna
              </h3>

              <p className="text-gray-700">
                Bridal, Arabic, Party, Eid, Kids and Special Occasion Henna.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-yellow-700 mb-3">
                💬 Easy WhatsApp Booking
              </h3>

              <p className="text-gray-700">
                Complete the form below and we'll prepare your WhatsApp booking.
              </p>
            </div>

          </div>

          {/* Booking Form */}

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
              const location = (form.elements.namedItem("location") as HTMLInputElement).value;
              const people = (form.elements.namedItem("people") as HTMLInputElement).value;
              const date = (form.elements.namedItem("date") as HTMLInputElement).value;
              const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
              const notes = (form.elements.namedItem("notes") as HTMLTextAreaElement).value;

              const message = `Hello Saheena Henna Artist!

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Location: ${location}
Number of People: ${people}
Preferred Date: ${date}
Service: ${service}

Additional Notes:
${notes}

Thank you.`;

              window.open(
                `https://wa.me/27614969371?text=${encodeURIComponent(message)}`,
                "_blank"
              );
            }}
            className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
          >

            <input
              name="name"
              placeholder="Full Name"
              required
              className="w-full border rounded-xl p-4"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border rounded-xl p-4"
            />

            <input
              name="location"
              placeholder="Area / Suburb"
              required
              className="w-full border rounded-xl p-4"
            />

            <input
              type="number"
              name="people"
              placeholder="Number of People"
              min="1"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="date"
              name="date"
              required
              className="w-full border rounded-xl p-4"
            />

            <select
              name="service"
              className="w-full border rounded-xl p-4"
            >
              <option>Bridal Henna</option>
              <option>Arabic Henna</option>
              <option>Eid Henna</option>
              <option>Party Henna</option>
              <option>Kids Henna</option>
              <option>Birthday Function</option>
              <option>Baby Shower</option>
              <option>Special Event</option>
            </select>

            <textarea
              name="notes"
              rows={5}
              placeholder="Tell us about your event or any special requests..."
              className="w-full border rounded-xl p-4"
            />

            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition"
            >
              💬 Book on WhatsApp
            </button>

          </form>

          {/* Booking Information */}

          <div className="mt-14 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-yellow-700 text-center mb-6">
              📋 Before You Book
            </h2>

            <ul className="space-y-4 text-gray-700 leading-7">
              <li>✔ Advance booking is recommended for Bridal Henna.</li>
              <li>✔ Home Service available within selected Cape Town areas.</li>
              <li>✔ Travel charges may apply depending on your location.</li>
              <li>✔ Appointment confirmation will be sent via WhatsApp.</li>
              <li>✔ We look forward to making your special occasion even more beautiful.</li>
            </ul>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}