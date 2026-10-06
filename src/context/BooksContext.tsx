'use client';
import React, { createContext,useState,ReactNode } from 'react';




export const BooksContext = createContext({});

const BooksProvider = ({children}:{children:ReactNode}) => {
    const[readBooks,setReadBooks]=useState([]);
    const[wishList,setWishList]=useState([]);
    const sharedData={
        readBooks,
        setReadBooks,
        wishList,
        setWishList
    };
    return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
};

export default BooksProvider;