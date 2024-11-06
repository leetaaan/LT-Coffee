"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const banners = [
  {
    src: `/img/banner1.png`,
    title: "Giảm giá lên đến 50%",
    description: `Tasty Cappuccino Coffee`,
  },
  {
    src: `/img/banner2.png`,
    title: "Giảm giá lên đến 40%",
    description: `Chip Frappuccino Coffee`,
  },
];

export default function SwiperComponent() {
  return (
    <>
      <Swiper
      
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide>
            <Image
              className="banner-img"
              src={banner.src}
              alt="MainSlider AltImage"
              objectFit="cover"
              fill
            />
            <div className="title" data-swiper-parallax="-300">
              {banner.title}
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>{banner.description}</p>
            </div>
            <div
              className="my-4 flex gap-6 w-full md:w-auto"
              data-swiper-parallax="-100"
            >
              <Link href={"/menu"}>
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-hero">
                  Chọn món
                </Button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
