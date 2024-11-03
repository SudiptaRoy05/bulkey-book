import { useEffect, useState } from "react"
import Book from "../../Book/Book";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data));
  },[])

  return (
    <div>
      <h2 className="text-center text-4xl font-bold">Books</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-10 bg-gray-100">
        {
          books.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  )
}
