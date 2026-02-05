import Banner from "./Banner";
import ComicsList from "./ComicsList";

export default function Main() {
  return (
    <main className="flex-grow-1 text-white">
      <Banner />
      <div className="container py-5">
        <ComicsList />
      </div>
    </main>
  );
}
