import BlueStripLink from "./BlueStripLink";

import digital from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscriptions from "../assets/img/buy-comics-subscriptions.png";
import shopLocator from "../assets/img/buy-comics-shop-locator.png";
import powerVisa from "../assets/img/buy-dc-power-visa.svg";

const links = [
  {
    url: "#",
    src: digital,
    text: "DIGITAL COMICS",
  },
  {
    url: "#",
    src: merchandise,
    text: "DC MERCHANDISE",
  },
  {
    url: "#",
    src: subscriptions,
    text: "SUBSCRIPTION",
  },
  {
    url: "#",
    src: shopLocator,
    text: "COMIC SHOP LOCATOR",
  },
  {
    url: "#",
    src: powerVisa,
    text: "DC POWER VISA",
  },
];

export default function BlueStrip() {
  return (
    <section className="blue-strip">
      <div className="container">
        <ul className="d-flex justify-content-between align-items-center list-unstyled m-0 p-5">
          {links.map((link, index) => (
            <li key={index}>
              <BlueStripLink link={link} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
