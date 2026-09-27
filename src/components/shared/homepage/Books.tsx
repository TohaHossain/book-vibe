import React from 'react';
const getBooks=async()=>{
    const res=await fetch('http://localhost:3000//booksData.json');
    const data=await res.json();
    return data;
}
const Books = async () => {
    const booksData= await getBooks();
    console.log(booksData,"booksData")
    return (
        
            <section className='container mx-auto my-[70px]'>
            Books
            {booksData.map((book,ind)=>{
                return <div key={ind}>{book.bookName}</div>;
            })};
            </section>
        
    );
};

export default Books;