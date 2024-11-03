import bannerImage from '../../assets/books.jpg';

export default function Banner() {
  return (
    <div>
      <div className="hero bg-base-200 md:my-10 my-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImage} />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
