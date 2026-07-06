"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  title: string;
};

export default function ProductGallery({
  images,
  title,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      {/* Desktop */}

      <div className="hidden lg:grid lg:grid-cols-[100px_520px] lg:gap-8">

        {/* Thumbnails */}

        <div className="flex flex-col gap-5">

          {images.map((image) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                selectedImage === image
                  ? "border-[#C8A34D] shadow-[0_0_18px_rgba(200,163,77,0.25)]"
                  : "border-[#2A2A2A] hover:border-[#555]"
              }`}
            >
              <Image
                src={image}
                alt={title}
                width={100}
                height={125}
                className="h-[125px] w-[100px] object-cover"
              />
            </button>
          ))}

        </div>

        {/* Main Image */}

        <div className="overflow-hidden rounded-[30px] border border-[#262626] bg-[#181818]">

          <div className="group overflow-hidden">

            <Image
              src={selectedImage}
              alt={title}
              width={520}
              height={650}
              priority
              className="h-[650px] w-full object-cover object-top transition duration-700 group-hover:scale-110"
            />

          </div>

        </div>

      </div>

      {/* Mobile & Tablet */}

      <div className="lg:hidden">

        <div className="overflow-hidden rounded-[28px] border border-[#262626] bg-[#181818]">

          <div className="group overflow-hidden">

            <Image
              src={selectedImage}
              alt={title}
              width={700}
              height={900}
              priority
              className="h-[420px] w-full object-cover object-top transition duration-700 group-hover:scale-105 sm:h-[520px]"
            />

          </div>

        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">

          {images.map((image) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                selectedImage === image
                  ? "border-[#C8A34D]"
                  : "border-[#2A2A2A]"
              }`}
            >
              <Image
                src={image}
                alt={title}
                width={80}
                height={100}
                className="h-[90px] w-[72px] object-cover"
              />
            </button>
          ))}

        </div>

      </div>
    </>
  );
}