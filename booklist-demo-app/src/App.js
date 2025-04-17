import logo from "./logo.svg";
import "./App.css";
import BookList from "./BookList";

function App() {
  const bookList = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
    { id: 3, title: "Book 3", author: "Author 3" },
    { id: 4, title: "Book 4", author: "Author 4" },
    { id: 5, title: "Book 5", author: "Author 5" },
    { id: 6, title: "Book 6", author: "Author 6" },
  ];
  return (
    <div>
      <h2>Book List</h2>
      <BookList books={bookList} />
    </div>
  );
}

export default App;
