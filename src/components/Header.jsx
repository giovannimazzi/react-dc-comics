import logo from "/dc-logo.png";

const links = [
  {
    url: "#",
    text: "CHARACTERS",
  },
  {
    url: "#",
    text: "COMICS",
  },
  {
    url: "#",
    text: "MOVIES",
  },
  {
    url: "#",
    text: "TV",
  },
  {
    url: "#",
    text: "GAMES",
  },
  {
    url: "#",
    text: "COLLECTIBLES",
  },
  {
    url: "#",
    text: "VIDEOS",
  },
  {
    url: "#",
    text: "FANS",
  },
  {
    url: "#",
    text: "NEWS",
  },
  {
    url: "#",
    text: "SHOP",
  },
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
                      className={`text-decoration-none text-dark ${index === 1 ? "active" : ""}`}
                      href={link.url}
                    >
                      {link.text}
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
