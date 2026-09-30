'useClient'
import { BooksContext } from '@/context/BooksContext';
import React,{ useContext } from 'react';

const ListedBooks = () => {
    const {readBooks}=useContext(BooksContext)
    console.log(readBooks,"readBooks")
    return (
        <div>
            listed books page is rendered
        </div>
    );
};

export default ListedBooks;