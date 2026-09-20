'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/bookType';
import React, { useContext } from 'react';

interface IWishlistButton{
    book: IBook 
}
const WishlistButton = ({book}: IWishlistButton) => {
    const {wishlist, setWishlist} = useContext(BooksContext)

    const handleWishlist = () => {
        setWishlist([...wishlist, book])
        alert(`You added ${book.bookName} to wishlist`)
    }
    return (
        <div>
            <button onClick={()=> handleWishlist()} className="rounded-xl border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-600 cursor-pointer ">
                ♡ Add to Wishlist
            </button>
        </div>
    );
};

export default WishlistButton;