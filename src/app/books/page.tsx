import React from "react";
import Image from "next/image";
import BookCard from "../../components/shared/BookCard";
import { IBook } from "../../types/books.type";
const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore All Books
        </h2>
        <p className="mt-2 text-gray-500">
          Explore our collection of popular books
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {booksData.map((book:IBook,ind:number) => {
               return <BookCard key={ind} book={book}/>
})}
      </div>
    </section>
  );
};

export default Books;