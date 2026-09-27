import React from "react";
import Image from "next/image";
import { IBook } from "@/types/books.type";
import Link from "next/dist/client/link";
interface IBookCardProps {
    book:IBook;
}
const BookCard = ({book}:IBookCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Book Image */}
      <div className="relative h-[280px] overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {book.category}
        </span>

        {/* Book Name */}
        <h3 className="mt-3 line-clamp-1 text-xl font-semibold text-gray-800">
          {book.bookName}
        </h3>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          by {book.author}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-semibold text-gray-700">
              {book.rating}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            {book.totalPages} pages
          </span>
        </div>

        {/* Year + Publisher */}
        <div className="mt-3 flex justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
          <span>{book.yearOfPublishing}</span>
          <span>{book.publisher}</span>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookid}`}>
          <button className="mt-5 w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;