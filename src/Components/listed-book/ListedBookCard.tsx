import Image from "next/image";
import { IBook } from "@/types/bookType";
import {
  BookOpen,
  CalendarDays,
  FileText,
  Star,
  UserRound,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import ListRemoveButton from "./ListRemoveButton";

interface ListedBookCardProps {
  book: IBook;
  listType: "read" | "wishlist";
}

const ListedBookCard = ({ book, listType }: ListedBookCardProps) => {
  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-slate-200 bg-white my-3 p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg">
      <div className="flex gap-4">
        {/* ================= BOOK IMAGE ================= */}
        <div className="relative flex h-32 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100 sm:h-36 sm:w-32">
          <Image
            src={book.image}
            alt={book.bookName}
            width={130}
            height={170}
            className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
          />

          {/* Rating */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[10px] font-semibold shadow-sm backdrop-blur">
            <Star size={11} fill="currentColor" className="text-amber-400" />
            <span className="text-slate-700">{book.rating}</span>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="min-w-0 flex-1 py-1">
          {/* Title */}
          <h2 className="truncate text-base font-bold text-slate-900 transition-colors group-hover:text-emerald-600 sm:text-lg">
            {book.bookName}
          </h2>

          {/* Author */}
          <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
            <UserRound size={12} />
            <span>
              By{" "}
              <span className="font-medium text-slate-700">{book.author}</span>
            </span>
          </div>

          {/* Tags + Year */}
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
              <UsersRound size={11} />
              <span>Tags:</span>
            </div>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-600"
              >
                #{tag}
              </span>
            ))}

            <span className="hidden items-center gap-1 text-[10px] text-slate-400 sm:flex">
              <CalendarDays size={11} />
              {book.yearOfPublishing}
            </span>
          </div>

          {/* Metadata */}
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <UserRound size={11} />
              Publisher:
              <span className="font-medium text-slate-500">
                {book.publisher}
              </span>
            </span>

            <span className="flex items-center gap-1">
              <FileText size={11} />
              {book.totalPages} Pages
            </span>
          </div>

          {/* Divider */}
          <div className="my-2.5 border-t border-slate-100" />

          {/* Bottom Actions */}
          <div className="flex items-center gap-2">
            {/* Category */}
            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-medium text-blue-600">
              Category: {book.category}
            </span>

            {/* View Details */}
            <Link href={`/books/${book.bookId}`} className="ml-auto flex items-center">
              <button className="ml-auto flex items-center gap-1 rounded-full bg-emerald-600 px-3.5 py-1.5 text-[10px] font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-md">
                <BookOpen size={11} />
                View Details
              </button>
            </Link>

            {/* Remove */}
            <ListRemoveButton bookId={book.bookId} listType={listType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
