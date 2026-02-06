import comics from "../comics";

export default function ComicsList() {
  return (
    <div className="container py-2 px-0 comics-list">
      <button className="px-3 p-2 text-white fw-semibold btn btn-dark border-0 rounded-0 fs-4 oversection-btn">
        CURRENT SERIES
      </button>
      <div className="d-flex flex-column justify-content-between align-items-center gap-3">
        <div className="row row-cols-6 align-self-stretch gy-4">
          {comics.map(({ id, thumb, series }) => (
            <div key={id} className="col">
              <a href="#" className="text-decoration-none">
                <div className="card border-0 rounded-0 bg-transparent text-light">
                  <img
                    src={thumb}
                    className="card-img-top border-0 rounded-0"
                    alt={series}
                  />
                  <div className="card-body px-0">
                    <p className="card-title">{series.toUpperCase()}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <button className="px-5 py-2 mb-3 text-white fw-semibold btn btn-dark border-0 rounded-0">
          LOAD MORE
        </button>
      </div>
    </div>
  );
}
