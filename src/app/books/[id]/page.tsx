import { IBook } from "@/types/books.type";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({
  params,
}: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id)
  );

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
          <div className="mb-4 text-5xl">📚</div>

          <h1 className="text-2xl font-bold text-gray-800">
            Book Not Found
          </h1>

          <p className="mt-2 text-gray-500">
            We couldn't find a book with ID {id}.
          </p>

          <Link
            href="/books"
            className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            Back to Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Main Details Section */}
      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* Book Cover */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-8 md:p-12 lg:col-span-2">
              
              {/* Decorative background */}
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/5" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5" />

              <div className="relative w-full max-w-sm">
                <div className="overflow-hidden rounded-xl shadow-2xl transition duration-500 hover:scale-[1.02]">
                  <Image
                    src={book.image}
                    alt={book.bookName}
                    width={500}
                    height={700}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Book Information */}
            <div className="p-6 md:p-10 lg:col-span-3 lg:p-12">
              
              {/* Category */}
              <div className="mb-5">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                  {book.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-4 text-lg text-gray-500">
                Written by{" "}
                <span className="font-semibold text-gray-800">
                  {book.author}
                </span>
              </p>

              {/* Rating */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-yellow-50 px-4 py-2">
                  <span className="text-xl text-yellow-500">★</span>

                  <span className="font-bold text-gray-800">
                    {book.rating}
                  </span>

                  <span className="text-sm text-gray-500">
                    / 5.0
                  </span>
                </div>

                <div className="h-6 w-px bg-gray-200" />

                <span className="text-sm text-gray-500">
                  {book.totalPages} pages
                </span>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gray-200" />

              {/* Description */}
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  About This Book
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  {book.review}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Tags
                </h3>

                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button className="flex-1 rounded-xl bg-gray-900 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-700">
                  🎧 Listen
                </button>

                <Link
                  href="/books"
                  className="flex-1 rounded-xl border border-gray-300 px-6 py-3.5 text-center font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  ← Back to Books
                </Link>
              </div>
            </div>
          </div>

          {/* Book Metadata */}
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              
              <div className="p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Publisher
                </p>

                <p className="mt-2 font-semibold text-gray-800">
                  {book.publisher}
                </p>
              </div>

              <div className="p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Published
                </p>

                <p className="mt-2 font-semibold text-gray-800">
                  {book.yearOfPublishing}
                </p>
              </div>

              <div className="p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Total Pages
                </p>

                <p className="mt-2 font-semibold text-gray-800">
                  {book.totalPages}
                </p>
              </div>

              <div className="p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Category
                </p>

                <p className="mt-2 font-semibold text-gray-800">
                  {book.category}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookDetailsPage;