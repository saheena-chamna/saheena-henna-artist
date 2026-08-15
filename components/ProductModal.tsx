"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  name: string;
  price: string;
  image: string;
  description?: string;
  colours?: string[];
  colourImages?: Record<string, string>;
};

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  const [colour, setColour] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedImage(product.image);

      if (product.name === "Halaal Henna Nail Polish") {
        setColour("Brown");
      } else if (product.name === "Instant Henna Cone") {
        setColour("Black");
      } else {
        setColour("");
      }
    }
  }, [product]);

  if (!product) return null;

  const price = Number(
    product.price.replace("R", "").replace("From ", "").trim()
  );

  const total = price * quantity;

  const isNailPolish =
    product.name === "Halaal Henna Nail Polish";

  const isInstantCone =
    product.name === "Instant Henna Cone";

  const availableColours =
    product.colours ||
    (isNailPolish
      ? ["Brown", "Black", "Maroon", "Red"]
      : []);

  const changeColour = (selectedColour: string) => {
    setColour(selectedColour);

    if (
      product.colourImages &&
      product.colourImages[selectedColour]
    ) {
      setSelectedImage(
        product.colourImages[selectedColour]
      );
    }
  };

  const orderOnWhatsApp = () => {
    const message = `Hello Saheena,

I would like to order:

Product: ${product.name}
${colour ? `Colour: ${colour}` : ""}
Quantity: ${quantity}
Total: R${total}

Thank you.`;

    window.open(
      `https://wa.me/27614969371?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative">

        {/* CLOSE BUTTON */}

        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-3xl font-bold text-gray-600 hover:text-red-600 z-10"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2 gap-8">

          {/* IMAGE */}

          <div>

            <div className="bg-pink-50 rounded-2xl p-4">

              <Image
                src={selectedImage || product.image}
                alt={product.name}
                width={600}
                height={600}
                className="rounded-2xl w-full h-[450px] object-contain"
              />

            </div>

            {/* INSTANT CONE IMAGE OPTIONS */}

            {isInstantCone &&
              product.colourImages && (
                <div className="flex gap-4 mt-4">

                  {Object.entries(
                    product.colourImages
                  ).map(([name, image]) => (

                    <button
                      key={name}
                      onClick={() =>
                        changeColour(name)
                      }
                      className={`border-2 rounded-xl p-2 ${
                        colour === name
                          ? "border-yellow-600"
                          : "border-gray-200"
                      }`}
                    >

                      <Image
                        src={image}
                        alt={`${name} Instant Henna Cone`}
                        width={90}
                        height={90}
                        className="w-20 h-20 object-contain rounded-lg"
                      />

                    </button>

                  ))}

                </div>
              )}

          </div>

          {/* PRODUCT DETAILS */}

          <div>

            <h2 className="text-4xl font-bold text-yellow-700">
              {product.name}
            </h2>

            <p className="text-3xl font-bold text-pink-600 mt-4">
              {product.price}
            </p>

            {/* DESCRIPTION */}

            <p className="mt-6 text-gray-700 leading-7">
              {product.description}
            </p>

            {/* INSTANT CONE INFORMATION */}

            {isInstantCone && (
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-5">

                <h3 className="text-xl font-bold text-yellow-700 mb-3">
                  ⚡ Instant Henna Cone
                </h3>

                <p className="text-gray-700 leading-7">
                  Available in Black and Red.
                  Choose your preferred colour below.
                </p>

              </div>
            )}

            {/* NAIL POLISH INFORMATION */}

            {isNailPolish && (
              <div className="mt-6 space-y-6">

                <div>

                  <h3 className="text-xl font-bold text-yellow-700 mb-3">
                    🌈 Available Colours
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-gray-700">

                    <p>🟤 Brown</p>
                    <p>⚫ Black</p>
                    <p>🍷 Maroon</p>
                    <p>🔴 Red</p>

                  </div>

                </div>

                <div>

                  <h3 className="text-xl font-bold text-yellow-700 mb-3">
                    🌿 Product Features
                  </h3>

                  <ul className="space-y-2 text-gray-700">

                    <li>✔ 100% Halaal</li>
                    <li>✔ Wudhu Friendly</li>
                    <li>✔ Easy to Apply</li>
                    <li>✔ Quick Drying</li>
                    <li>✔ 10–12ml Bottle</li>
                    <li>✔ Approximately 50 Fingers Per Bottle</li>

                  </ul>

                </div>

                <div>

                  <h3 className="text-xl font-bold text-yellow-700 mb-3">
                    ℹ️ Care Instructions
                  </h3>

                  <ul className="space-y-2 text-gray-700">

                    <li>
                      💧 Add 2–3 drops of water if the polish becomes dry.
                    </li>

                    <li>
                      🏠 Store at room temperature.
                    </li>

                    <li>
                      ⏳ Lasts approximately 4–5 months.
                    </li>

                    <li>
                      ⚠ Colour may fade faster with frequent exposure to water or chemical-based soaps.
                    </li>

                  </ul>

                </div>

              </div>
            )}

            {/* SAREE INFORMATION */}

            {product.name.includes("Saree") && (
              <div className="mt-6 space-y-5">

                <div className="bg-pink-50 rounded-xl p-5 border-l-4 border-pink-500">

                  <h3 className="text-xl font-bold text-yellow-700 mb-3">
                    👗 Product Information
                  </h3>

                  <ul className="space-y-2 text-gray-700">

                    <li>✔ Premium Quality Saree</li>

                    <li>
                      ✔ Includes Matching Unstitched Blouse Piece
                    </li>

                    <li>
                      ✔ Tailor the Blouse to Your Preferred Style & Size
                    </li>

                    <li>
                      ✔ Perfect for Weddings, Eid & Special Occasions
                    </li>

                    <li>
                      ✔ Soft, Comfortable & Elegant Fabric
                    </li>

                  </ul>

                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-5">

                  <h3 className="text-xl font-bold text-yellow-700 mb-3">
                    ✂️ Please Note
                  </h3>

                  <p className="text-gray-700 leading-7">

                    All of our sarees include a
                    <strong> matching unstitched blouse piece</strong>.
                    The blouse is supplied as fabric only and is
                    <strong> not pre-stitched</strong>, allowing you to have it
                    tailored according to your preferred design, sleeve style
                    and perfect fit.

                  </p>

                </div>

              </div>
            )}

            {/* COLOUR SELECTION */}

            {availableColours.length > 0 && (
              <div className="mt-8">

                <h3 className="font-bold text-lg mb-3">
                  Choose Colour
                </h3>

                <div className="flex flex-wrap gap-3">

                  {availableColours.map((item) => (

                    <button
                      key={item}
                      onClick={() =>
                        changeColour(item)
                      }
                      className={`px-5 py-2 rounded-full border-2 transition ${
                        colour === item
                          ? "bg-yellow-600 text-white border-yellow-600"
                          : "border-gray-300 hover:border-yellow-500"
                      }`}
                    >
                      {item}
                    </button>

                  ))}

                </div>

                {colour && (
                  <p className="mt-4 text-pink-600 font-semibold">
                    Selected Colour: {colour}
                  </p>
                )}

              </div>
            )}

            {/* QUANTITY */}

            <div className="mt-8">

              <h3 className="font-bold text-lg mb-3">
                Quantity
              </h3>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="w-10 h-10 rounded-full bg-pink-600 text-white text-xl"
                >
                  -
                </button>

                <span className="text-2xl font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="w-10 h-10 rounded-full bg-pink-600 text-white text-xl"
                >
                  +
                </button>

              </div>

            </div>

            {/* TOTAL */}

            <div className="mt-6 bg-pink-50 rounded-xl p-4">

              <p className="text-xl font-bold text-yellow-700">
                Total: R{total}
              </p>

            </div>

            {/* WHATSAPP ORDER */}

            <button
              onClick={orderOnWhatsApp}
              className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition"
            >
              Order on WhatsApp
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}