import React from "react";
import Image from "next/image";
import { IBook } from "@/types/bookType";
import Link from "next/link";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  const { bookName, author, image, rating, category, bookId, yearOfPublishing, totalPages } = book;

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl">
      {/* Image Section */}
      <Link href={`/books/${bookId}`}>
        <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-slate-100 via-white to-emerald-50">
          {/* Decorative Glow */}
          <div className="absolute h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl transition-all duration-500 group-hover:scale-150" />

          {/* Book Image */}
          <Image
            src={image}
            alt={bookName}
            width={190}
            height={240}
            className="relative z-10 h-56 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
          />

          {/* Rating Badge */}
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 rounded-full border border-slate-100 bg-white/95 px-3.5 py-1.5 text-sm font-semibold text-slate-700 shadow-md backdrop-blur">
            <span className="text-amber-400">★</span>
            {rating}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="px-2 pb-2 pt-5">
        {/* Type */}
        <div>
          <span className="inline-flex rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 transition-colors group-hover:bg-emerald-100">
            {category}
          </span>
        </div>

        {/* Book Name */}
        <h2 className="mt-4 line-clamp-2 min-h-14 text-2xl font-bold leading-tight tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
          {bookName}
        </h2>

        {/* Author */}
        <p className="mt-3 text-sm text-slate-500">
          Written by{" "}
          <span className="font-semibold text-slate-700">{author}</span>
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-dashed border-slate-200" />

        {/* Bottom Information */}
        <div className="flex items-center justify-between">
          {/* Published Year */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              Published
            </p>

            <p className="mt-1.5 font-semibold text-slate-700">
              {yearOfPublishing}
            </p>
          </div>

          {/* Total Pages */}
          <div className="text-right">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              Total Pages
            </p>

            <p className="mt-1.5 font-semibold text-slate-700">{totalPages}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
