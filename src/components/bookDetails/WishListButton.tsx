'use client';
import { IBook } from '@/types/books.type';
import React,{ useContext } from 'react';

import BooksProvider, { BooksContext } from '@/context/BooksContext';
import { toast } from 'react-toastify/unstyled';

const WishListButton = ({book}:{book:IBook}) => {
    const {wishList,setWishList}=useContext(BooksContext);
    console.log(BooksProvider,'booksProvider')
    const handleAddToWishList=()=>{
        console.log("Add to Wishlist button triggered",book)
        setWishList([...wishList,book])
        toast.success(`"${book.bookName}" has been added to your wishlist`);
    };
    return (
        <div>
            <button className="group flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 py-4 font-semibold text-white shadow-lg shadow-gray-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-gray-800" onClick={()=>handleAddToWishList()}>Add to Wishlist</button>
        </div>
    );
};

export default WishListButton;