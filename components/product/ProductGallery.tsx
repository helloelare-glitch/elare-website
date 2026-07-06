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
      {/* ================= Desktop ================= */}

      <div className="hidden lg:grid lg:grid-cols-[100px_520px] lg:gap-8">

        {/* Thumbnails */}

        <div className="flex flex-col gap-5">

          {images.map((image) => (

            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`premium-card overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                selectedImage === image
                  ? "border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                  : "border-[#2A2A2A] hover:border-[#555]"
              }`}
            >

              <Image
                src={image}
                alt={title}
                width={100}
                height={125}
                className="premium-image h-[125px] w-[100px] object-cover"
              />

            </button>

          ))}

        </div>

        {/* Main Image */}

        <div className="premium-card overflow-hidden rounded-[32px] border border-[#262626] bg-[#181818]">

          <div className="group overflow-hidden">

            <Image
              src={selectedImage}
              alt={title}
              width={520}
              height={650}
              priority
              className="premium-image h-[650px] w-full object-cover object-top"
            />

          </div>

        </div>

      </div>

      {/* ================= Mobile ================= */}

      <div className="lg:hidden">

        {/* Main Image */}

        <div className="premium-card overflow-hidden rounded-[28px] border border-[#262626] bg-[#181818]">

          <div className="group overflow-hidden">

            <Image
              src={selectedImage}
              alt={title}
              width={700}
              height={900}
              priority
              className="premium-image h-[420px] w-full object-cover object-top sm:h-[520px]"
            />

          </div>

        </div>

        {/* Thumbnail Slider */}

        <div className="mt-5 flex gap-3 overflow-x-auto pb-2">

          {images.map((image) => (

            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`premium-card shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                selectedImage === image
                  ? "border-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.18)]"
                  : "border-[#2A2A2A]"
              }`}
            >

              <Image
                src={image}
                alt={title}
                width={80}
                height={100}
                className="premium-image h-[90px] w-[72px] object-cover"
              />

            </button>

          ))}

        </div>

      </div>
    </>
  );
}