import React from "react";
import BookCard from "@/Components/shared/BookCard";
import { IBook } from "@/types/bookType";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const books : IBook[] = await getBooks();
  return (
    <div className="container mx-auto py-14">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl py-6">Explore Our Collection</h1>
        <div className="grid grid-cols-4 gap-4">
          {books.map((book: IBook) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;