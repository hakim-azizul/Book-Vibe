import BookDetailsCard from "@/Components/bookDetails/BookDetailsCard";
import { IBook } from "@/types/bookType";
import React from "react";

interface IBookDetailProps {
  params: Promise<{
    bookId: string;
  }>;
}

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("An error oquired to fetching data", error);
    return [];
  }
};

const BookDetailPage = async ({ params }: IBookDetailProps) => {
  const { bookId } = await params;
  const booksData = await getBooks();
  const bookInfo = booksData.find(
    (book: IBook) => String(book.bookId) === String(bookId),
  );
  if (!bookInfo) {
    return <div>Soory Book Info not found</div>;
  }
  return (
    <div>
      <BookDetailsCard book={bookInfo} />
    </div>
  );
};

export default BookDetailPage;
