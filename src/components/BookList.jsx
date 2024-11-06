import React from 'react';
import { BookItem } from './BookItem';

export const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map((book) => (
          <BookItem key={book.key} book={book} />
        ))
      )}
    </div>
  );
};
