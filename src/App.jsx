import BlueStrip from "./components/BlueStrip";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Main />
      <BlueStrip />
      <Footer />
    </div>
  );
}
