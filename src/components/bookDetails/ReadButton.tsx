'use client'
import { IBook } from '@/types/books.type';
import React,{ useContext } from 'react';

import { BooksContext } from '@/context/BooksContext';

const ReadButton = ({book}:{book:IBook}) => {
    const {readBooks,setReadBooks}=useContext(BooksContext);
    console.log(booksProvider,'booksProvider')
    const handleReadBook=()=>{
        console.log("ReadBook button triggered",book)
        setReadBooks([...readBooks,book])
    };
    return (
        <div>
            <button className="group flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 py-4 font-semibold text-white shadow-lg shadow-gray-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-gray-800" onClick={()=>handleReadBook()}>Read</button>
        </div>
    );
};

export default ReadButton;