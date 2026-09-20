'use client'
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {

    const {readBooks, wishlist} = useContext(BooksContext)
    return (
        <div>
            
        </div>
    );
};

export default ListedBooks;