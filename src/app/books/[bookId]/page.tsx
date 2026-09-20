import BookDetailsCard from '@/Components/bookDetails/BookDetailsCard';
import { IBook } from '@/types/bookType';
import React from 'react';

interface IBookDetailProps {
    params: Promise<{
        bookId: string
    }>,

}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BookDetailPage = async({params}: IBookDetailProps) => {
    const{bookId} = await params;
    const booksData = await getBooks();
    const bookInfo = booksData.find((book: IBook) => String(book.bookId) === String(bookId))
    if(!bookInfo){
        return <div>Soory Book Info not found</div>
    }
    return (
        <div>
            <BookDetailsCard  book={bookInfo}  />
        </div>
    );
};

export default BookDetailPage;