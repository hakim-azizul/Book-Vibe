'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/bookType';
import React, { useContext } from 'react';

interface IReadButton{
    book: IBook
}

const ReadBurtton = ({book}: IReadButton) => {
    const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadBook = () => {
        setReadBooks([...readBooks, book])
    }
    return (
        <div>
            <button onClick={()=> handleReadBook()} className="rounded-xl bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl cursor-pointer">
                  Read
            </button>
        </div>
    );
};

export default ReadBurtton;