export default function ComicsCard({ thumb, series }) {
  thumb = thumb || "#";
  series = series || "Comic Series";
  return (
    <div className="col">
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
  );
}
