import React from "react";

function BookList({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
