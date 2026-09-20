import { IBook } from "@/types/bookType";
import Image from "next/image";
import Link from "next/link";
import ReadBurtton from "./ReadBurtton";
import WishlistButton from "./WishlistButton";

interface BookDetailsProps {
  book: IBook;
}

const BookDetails = ({ book }: BookDetailsProps) => {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="container mx-auto">
        {/* Back Button */}
        <Link
          href="/books"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-emerald-600"
        >
          ← Back to Books
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%]">
            {/* ================= IMAGE ================= */}
            <div className="relative flex min-h-112.5 items-center justify-center bg-linear-to-br from-slate-100 via-white to-emerald-50 p-8 lg:min-h-150">
              {/* Decorative circle */}
              <div className="absolute h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />

              <Image
                src={book.image}
                alt={book.bookName}
                width={350}
                height={500}
                className="relative max-h-125 w-auto object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
              />

              {/* Rating Badge */}
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-md">
                <span className="text-yellow-400">★</span>
                {book.rating}
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="p-7 sm:p-10 lg:p-12">
              {/* Category */}
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-600">
                  {book.category}
                </span>

                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-3 text-base text-slate-500">
                Written by{" "}
                <span className="font-semibold text-slate-700">
                  {book.author}
                </span>
              </p>

              {/* Divider */}
              <div className="my-7 border-t border-slate-200" />

              {/* Review */}
              <div>
                <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-800">
                  Review
                </h2>

                <p className="text-sm leading-7 text-slate-600">
                  {book.review}
                </p>
              </div>

              {/* Book Information */}
              <div className="my-7 grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl bg-slate-50 p-5 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-medium text-slate-400">Pages</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    {book.totalPages}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Publisher
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    {book.publisher}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Published
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    {book.yearOfPublishing}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-7 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={
                        index < Math.round(book.rating)
                          ? "text-yellow-400"
                          : "text-slate-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                <span className="font-bold text-slate-800">{book.rating}</span>

                <span className="text-sm text-slate-400">/ 5.0</span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <ReadBurtton book={book}/>
                <WishlistButton book={book}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
