"use client";
import { IBook } from "@/types/bookType";
import React, {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

interface IBookContext {
  readBooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: Dispatch<SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBookContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };
  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
