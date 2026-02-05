import logo from "/dc-logo.png";

const links = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP",
];

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-stretch">
          <img src={logo} alt="DC Comics Logo" className="p-3" />

          <nav>
            <ul className="h-100 d-flex gap-3 list-unstyled m-0 fw-bold">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="h-100 d-flex flex-column justify-content-center"
                  >
                    <a
                      className={`text-decoration-none text-dark ${link === "COMICS" ? "active" : ""}`}
                      href={`#${link}`}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
