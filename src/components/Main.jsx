import Banner from "./Banner";
import ComicsList from "./ComicsList";

export default function Main() {
  return (
    <main className="flex-grow-1 text-white">
      <Banner />
      <ComicsList />
    </main>
  );
}
