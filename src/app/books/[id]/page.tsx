
import { IBook } from "@/types/books.type";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";

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

  return res.json();
};

const BookDetailsPage = async ({
  params,
}: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id)
  );

  // -----------------------------
  // Book Not Found
  // -----------------------------
  if (!book) {
    return (
      <main className="min-h-screen bg-[#f8f7f4] px-4 py-16">
        <div className="mx-auto max-w-xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-4xl">
            📚
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Book Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            We could not find a book with ID{" "}
            <span className="font-semibold text-gray-700">
              {id}
            </span>
            .
          </p>

          <Link
            href="/books"
            className="mt-8 inline-flex items-center rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
          >
            ← Back to Books
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f7f4]">
      {/* =========================================
          HERO / BOOK DETAILS
      ========================================= */}
      <section className="relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            {/* =====================================
                BOOK COVER
            ===================================== */}
            <div className="flex justify-center">
              <div className="relative">

                {/* Glow behind book */}
                <div className="absolute inset-8 rounded-3xl bg-gray-900/20 blur-3xl" />

                {/* Book */}
                <div className="relative w-[250px] rotate-[-2deg] overflow-hidden rounded-xl bg-white shadow-[20px_25px_50px_rgba(0,0,0,0.25)] transition duration-500 hover:rotate-0 hover:scale-[1.02] sm:w-[290px] md:w-[330px]">

                  <Image
                    src={book.image}
                    alt={book.bookName}
                    width={500}
                    height={700}
                    priority
                    className="h-auto w-full object-cover"
                  />

                  {/* Subtle bottom gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Floating rating */}
                <div className="absolute -right-5 top-8 flex items-center gap-2 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-xl sm:-right-8">
                  <span className="text-xl text-amber-400">★</span>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {book.rating}
                    </p>

                    <p className="text-[11px] text-gray-400">
                      Rating
                    </p>
                  </div>
                </div>

                {/* Page count badge */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/70 bg-white px-5 py-3 shadow-xl sm:-left-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Pages
                  </p>

                  <p className="text-lg font-bold text-gray-900">
                    {book.totalPages}
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================
                BOOK INFORMATION
            ===================================== */}
            <div className="max-w-2xl">

              {/* Category */}
              <div className="mb-5">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                  {book.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-5 text-lg text-gray-500">
                Written by{" "}
                <span className="font-semibold text-gray-900">
                  {book.author}
                </span>
              </p>

              {/* Quick stats */}
              <div className="mt-7 flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-200">
                  <span className="text-lg text-amber-400">
                    ★
                  </span>

                  <span className="font-bold text-gray-900">
                    {book.rating}
                  </span>

                  <span className="text-sm text-gray-400">
                    / 5
                  </span>
                </div>

                <div className="h-7 w-px bg-gray-300" />

                <div className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-800">
                    {book.totalPages}
                  </span>{" "}
                  pages
                </div>

                <div className="h-7 w-px bg-gray-300" />

                <div className="text-sm text-gray-500">
                  Published{" "}
                  <span className="font-semibold text-gray-800">
                    {book.yearOfPublishing}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-10">
                <h2 className="text-xl font-bold text-gray-950">
                  About this book
                </h2>

                <p className="mt-4 text-[16px] leading-8 text-gray-600">
                  {book.review}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Topics
                </p>

                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ReadButton book={book}/>
                <button className="group flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 py-4 font-semibold text-white shadow-lg shadow-gray-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-gray-800">WishList</button>
                <WishListButton book={book}/>
                <button
                  className="group flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 py-4 font-semibold text-white shadow-lg shadow-gray-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-gray-800"
                >
                  <span className="text-lg transition-transform group-hover:scale-110">
                    🎧
                  </span>

                  Listen to Book
                </button>

                <Link
                  href="/books"
                  className="flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-700 transition duration-300 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-50"
                >
                  ← Back to Books
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BOOK INFORMATION
      ========================================= */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

            {/* Publisher */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:bg-white hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Publisher
              </p>

              <p className="mt-2 line-clamp-2 font-semibold text-gray-900">
                {book.publisher}
              </p>
            </div>

            {/* Published */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:bg-white hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Published
              </p>

              <p className="mt-2 font-semibold text-gray-900">
                {book.yearOfPublishing}
              </p>
            </div>

            {/* Pages */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:bg-white hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Total Pages
              </p>

              <p className="mt-2 font-semibold text-gray-900">
                {book.totalPages}
              </p>
            </div>

            {/* Category */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:bg-white hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Category
              </p>

              <p className="mt-2 font-semibold text-gray-900">
                {book.category}
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default BookDetailsPage;

