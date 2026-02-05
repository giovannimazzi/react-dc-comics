/* import comics from "../comics"; */

export default function ComicsList() {
  return (
    <div className="container py-2 px-0 comics-list">
      <button className="d-none">CURRENT SERIES</button>
      <div className="pt-4 d-flex flex-column justify-content-between align-items-center gap-3">
        <div className="row row-cols-6 align-self-stretch">
          <div className="col">ciao</div>
          <div className="col">ciao</div>
          <div className="col">ciao</div>
          <div className="col">ciao</div>
          <div className="col">ciao</div>
          <div className="col">ciao</div>
          <div className="col">ciao</div>
          <div className="col">ciao</div>
          <div className="col">ciao</div>
        </div>
        <button>LOAD MORE</button>
      </div>
    </div>
  );
}
