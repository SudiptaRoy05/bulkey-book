import PropTypes from 'prop-types';

export default function Book({ book }) {
  const { bookName, author, image, tags, category,rating } = book;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className='bg-slate-300'>
          <img className='h-[230px]'
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
            <div className='flex items-center justify-between'>
                <div><p>{category}</p></div>
                <div>Rating : <span>{rating}</span></div>
            </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>
          <div className="card-actions justify-end">
            <div>
                {
                    tags.map((tag, idx) => (<div key={idx} className="badge badge-outline mr-3">{tag}</div>))
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


Book.PropTypes={
    book: PropTypes.object
}