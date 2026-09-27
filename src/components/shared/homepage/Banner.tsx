
import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-10 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f5f3ff] via-[#faf9ff] to-[#eef2ff] px-6 py-10 shadow-sm md:grid-cols-2 md:px-12 lg:px-16 lg:py-14">

        {/* Content */}
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-violet-600 shadow-sm">
            📚 Explore Your Next Read
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Books to freshen up
            <br />
            your <span className="text-violet-600">bookshelf</span>
          </h1>

          <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
            Discover inspiring stories, timeless classics, and exciting new
            reads. Find your next favorite book and make every page count.
          </p>

          <button className="rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl">
            View The Books
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-violet-200/60 blur-2xl" />
          <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-blue-200/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-xl">
            <Image
              src={bannerImg}
              alt="Books"
              priority
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;

