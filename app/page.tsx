import Delivery from "@/components/Delivery";
import Header from "../components/Header";
import Instagram from "../components/Instagram";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import BookingBanner from "../components/BookingBanner";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Stats />

      <Services />

      <Gallery />

      <Instagram />

      <Products />

      <Delivery />

      <Testimonials />

      <BookingBanner />

      <Footer />

      <WhatsAppButton />
    </>
  );
}