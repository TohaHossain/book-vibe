'useClient'
import { BooksContext } from '../../context/BooksContext';
import React,{ useContext } from 'react';

const ListedBooks = () => {
    const {readBooks,wishList}=useContext(BooksContext)
    console.log(readBooks,"readBooks")
    console.log(wishList,"wishList")
    return (
        <div className="container mx-auto py-[20px]">
            <h2 className="my-4 bg-amber-100 rounded-3xl py-16 font-bold text-3xl text center">Listed Books</h2>
            {/* name of each tab group should be unique */}
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 1" />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 2" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  
</div>
            
        </div>
    );
};

export default ListedBooks;