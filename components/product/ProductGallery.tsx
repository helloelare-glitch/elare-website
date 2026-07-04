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
    <div className="grid grid-cols-[100px_520px] gap-8">

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

        <Image
          src={selectedImage}
          alt={title}
          width={520}
          height={650}
          priority
          className="h-[650px] w-full object-cover transition-all duration-500"
        />

      </div>

    </div>
  );
}