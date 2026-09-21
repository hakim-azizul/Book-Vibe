'use client';
import React, { useContext } from 'react';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/bookType';
import { Trash2 } from 'lucide-react';

interface ListRemove{
    bookId: number | string;
    listType: "read" | "wishlist";
}

const ListRemoveButton = ({ bookId, listType }: ListRemove) => {

    const { readBooks, setReadBooks, wishlist, setWishlist } = useContext(BooksContext);

    const handleRemove = () => {
        if (listType === "read") {
            const remaining = readBooks.filter((book: IBook) => book.bookId !== bookId);
            setReadBooks(remaining);
        } 
        else if (listType === "wishlist") {
            const remaining = wishlist.filter((book: IBook) => book.bookId !== bookId);
            setWishlist(remaining);
        }
    };

    return (
        <button
            onClick={handleRemove} // আপনার পাঠানো ডিজাইন অনুযায়ী
            className="flex items-center gap-1 rounded-full bg-red-50 px-3 py-1.5 text-[10px] font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-md"
        >
            <Trash2 size={11} />
            Remove
        </button>
    );
};

export default ListRemoveButton;
