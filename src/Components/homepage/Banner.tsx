import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="mt-8 px-4">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-linear-to-br from-slate-100 via-white to-emerald-50 px-8 py-12 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Content */}
          <div className="max-w-xl space-y-6">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Discover your next favorite book
            </span>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Books to freshen up
              <br />
              <span className="text-emerald-600">your bookshelf</span>
            </h2>

            <p className="max-w-md text-base leading-7 text-slate-600 md:text-lg">
              Explore a handpicked collection of inspiring stories, timeless
              classics, and exciting new reads.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="./listed-book"
                className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl"
              >
                View The List
              </Link>

              <Link
                href="./books"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-600"
              >
                Explore Books
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-emerald-200/30 blur-3xl" />

              <Image
                src={bannerImg}
                alt="Books collection"
                className="relative w-full max-w-md object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
