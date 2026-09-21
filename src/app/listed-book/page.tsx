"use client";
import ListedBookCard from "@/Components/listed-book/ListedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/bookType";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];
    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto">
      <h2 className="my-4 bg-cyan-200 rounded-3xl px-16 py-6 font-bold text-4xl text-center">
        Listed Collection
      </h2>
      <div className="text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          className="select select-success mb-5"
        >
          <option disabled={true}>Sort By</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Year of Publish</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <label className="tab">
          <input type="radio" name="my_tabs_4" defaultChecked/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          {`Read Books (${readBooks.length})`}
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => (
              <ListedBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-center text-lg font-semibold">
              {" "}
              No Read Books found
            </p>
          )}
        </div>
        <label className="tab">
          <input type="radio" name="my_tabs_4" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          {`Wishlist Books (${wishlist.length})`}
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: IBook) => (
              <ListedBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-center text-lg font-semibold">
              {" "}
              Wishlisted Books Not found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
