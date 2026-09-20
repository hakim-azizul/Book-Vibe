import React from "react";
import Image from "next/image";
import { IBook } from "@/types/bookType";
import Link from "next/link";

interface BookCardProps{
    book: IBook
}

const BookCard = ({ book }: BookCardProps) => {
  const { bookName, author, image, rating, category, bookId } = book;

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-slate-100 via-slate-50 to-slate-200">
        {/* Wishlist */}
        <button
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-slate-500 shadow-sm backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white hover:text-red-500"
          aria-label="Add to wishlist"
        >
          ♡
        </button>
        <Link href={`/books/${bookId}`}>
        <Image
          src={image}
          alt={bookName}
          width={190}
          height={240}
          className="h-56 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
        />
        </Link>
        {/* Rating badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
          <span className="text-amber-400">★</span>
          {rating}
        </div>
      </div>

      {/* Content */}
      <div className="px-2 pb-2 pt-5">
        {/* Category */}
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
            {category}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
            Identity
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

        {/* Bottom */}
        <div className="flex items-center justify-between">
          {/* Category */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Genre
            </p>

            <p className="mt-1 font-medium text-slate-700">{category}</p>
          </div>

          {/* Rating */}
          <div className="text-right">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Rating
            </p>

            <div className="mt-1 flex items-center gap-1">
              <span className="text-amber-400">★</span>

              <span className="font-bold text-slate-800">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
