'use client'
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {

    const {readBooks, wishlist} = useContext(BooksContext)
    console.log(readBooks, wishlist, "wish Read")
    console.log()
    return (
        <div>
            <h2>Listed books | Total Read Books: {readBooks.length} <br /> | Total wishlist : {wishlist.length}</h2>
        </div>
    );
};

export default ListedBooks;