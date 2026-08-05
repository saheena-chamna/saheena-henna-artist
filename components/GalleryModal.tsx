"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/12.jpg",
  "/images/14.jpg",
  "/images/15.jpg",
  "/images/19.jpg",
  "/images/20.jpg",
];

export default function GalleryModal() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image}
            className="cursor-pointer overflow-hidden rounded-2xl shadow-lg"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt="Henna Design"
              width={400}
              height={500}
              className="w-full h-72 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Henna Design"
            width={700}
            height={900}
            className="rounded-3xl max-h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  );
}