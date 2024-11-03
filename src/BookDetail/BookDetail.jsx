import { useLoaderData, useParams } from "react-router-dom";

export default function BookDetail() {
  const { bookId } = useParams();
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === parseInt(bookId));

  const {
    bookName,
    review,
    author,
    image,
    tags,
    category,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="hero bg-base-200 my-10">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="lg:w-96 rounded-lg shadow-2xl" />
        <div >
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p>{category}</p>
          <div>
            <p className="py-6">
              <span className="font-bold">Review : </span> {review}
            </p>
            <div className="mb-2">
              <span>Tags : </span>
              {tags.map((tag, idx) => (
                <div key={idx} className="badge badge-outline mr-3">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t pt-2 mt-2 space-y-3">
            <div>
              <span>Number of pages : </span>
              <span className="font-bold">{totalPages}</span>
            </div>

            <div>
              <span>Publisher : </span>
              <span className="font-bold">{publisher}</span>
            </div>

            <div>
              <span>Year of Publishing : </span>
              <span className="font-bold">{yearOfPublishing}</span>
            </div>

            <div>
              <span>Rating : </span>
              <span className="font-bold">{rating}</span>
            </div>
          </div>
          <div>
          <button className="btn btn-primary mr-3 mt-3">Get Started</button>
          <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
