import GalleryModal from "../../components/GalleryModal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="py-10 text-center">
        <h1 className="text-5xl font-bold text-yellow-700">
          Our Henna Gallery
        </h1>

        <p className="mt-4 text-gray-600">
          Browse our latest beautiful henna designs.
        </p>
      </div>

      <GalleryModal />

      <Footer />
    </main>
  );
}