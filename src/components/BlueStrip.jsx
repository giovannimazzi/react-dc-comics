import digital from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscriptions from "../assets/img/buy-comics-subscriptions.png";
import shopLocator from "../assets/img/buy-comics-shop-locator.png";
import powerVisa from "../assets/img/buy-dc-power-visa.svg";

export default function BlueStrip() {
  return (
    <section className="blue-strip">
      <div className="container">
        <ul className="d-flex justify-content-between align-items-center list-unstyled m-0 p-5">
          <li>
            <a
              href="#DIGITALCOMICS"
              aria-label="Digital Comics"
              className="blue-link"
            >
              <img src={digital} alt="" />
              <span>DIGITAL COMICS</span>
            </a>
          </li>

          <li>
            <a
              href="#DCMERCHANDISE"
              aria-label="DC Merchandise"
              className="blue-link"
            >
              <img src={merchandise} alt="" />
              <span>DC MERCHANDISE</span>
            </a>
          </li>

          <li>
            <a
              href="#SUBSCRIPTION"
              aria-label="Subscription"
              className="blue-link"
            >
              <img src={subscriptions} alt="" />
              <span>SUBSCRIPTION</span>
            </a>
          </li>

          <li>
            <a
              href="#COMICSHOPLOCATOR"
              aria-label="Comic Shop Locator"
              className="blue-link"
            >
              <img src={shopLocator} alt="" />
              <span>COMIC SHOP LOCATOR</span>
            </a>
          </li>

          <li>
            <a
              href="#DCPOWERVISA"
              aria-label="DC Power Visa"
              className="blue-link"
            >
              <img src={powerVisa} alt="" />
              <span>DC POWER VISA</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
