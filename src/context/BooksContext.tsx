'use client';
import React, { createContext,useState,ReactNode } from 'react';




export const BooksContext = createContext({});

const BooksProvider = ({children}:{children:ReactNode}) => {
    const[raedBooks,setReadBooks]=useState([]);
    const[wishlist,setWishlist]=useState([]);
    const sharedData={
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    };
    return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
};

export default BooksProvider;