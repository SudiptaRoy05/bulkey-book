import { useEffect, useState } from "react"

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data));
  },[])

  return (
    <div>
      <h2 className="text-4xl font-bold">Books{books.length}</h2>
    </div>
  )
}
