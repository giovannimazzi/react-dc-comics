import logo from "/dc-logo.png";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center p-3">
          <img src={logo} alt="DC Comics Logo" />

          <nav>
            <ul className="d-flex gap-3 list-unstyled m-0 fw-bold">
              <li>
                <a
                  className="text-decoration-none text-dark"
                  href="#CHARACTERS"
                >
                  CHARACTERS
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#COMICS">
                  COMICS
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#MOVIES">
                  MOVIES
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#TV">
                  TV
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#GAMES">
                  GAMES
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-dark"
                  href="#COLLECTIBLES"
                >
                  COLLECTIBLES
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#VIDEOS">
                  VIDEOS
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#FANS">
                  FANS
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#NEWS">
                  NEWS
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#SHOP">
                  SHOP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
