import BlueStrip from "./components/BlueStrip";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import logo from "/dc-logo.png";

import digital from "./assets/img/buy-comics-digital-comics.png";
import merchandise from "./assets/img/buy-comics-merchandise.png";
import subscriptions from "./assets/img/buy-comics-subscriptions.png";
import shopLocator from "./assets/img/buy-comics-shop-locator.png";
import powerVisa from "./assets/img/buy-dc-power-visa.svg";

import facebook from "./assets/img/footer-facebook.png";
import twitter from "./assets/img/footer-twitter.png";
import youtube from "./assets/img/footer-youtube.png";
import pinterest from "./assets/img/footer-pinterest.png";
import periscope from "./assets/img/footer-periscope.png";

const HeaderLinks = [
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

const BlueStripLinks = [
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

const FooterTopLinks = [
  {
    title: "DC COMICS",
    links: [
      {
        url: "#",
        text: "Characters",
      },
      {
        url: "#",
        text: "Comics",
      },
      {
        url: "#",
        text: "Movies",
      },
      {
        url: "#",
        text: "TV",
      },
      {
        url: "#",
        text: "Games",
      },
      {
        url: "#",
        text: "Videos",
      },
      {
        url: "#",
        text: "News",
      },
    ],
  },
  {
    title: "SHOP",
    links: [
      {
        url: "#",
        text: "Shop DC",
      },
      {
        url: "#",
        text: "Shop DC Collectibles",
      },
    ],
  },
  {
    title: "DC",
    links: [
      {
        url: "#",
        text: "Terms Of Use",
      },
      {
        url: "#",
        text: "Privacy policy (New)",
      },
      {
        url: "#",
        text: "Ad Choices",
      },
      {
        url: "#",
        text: "Advertising",
      },
      {
        url: "#",
        text: "Jobs",
      },
      {
        url: "#",
        text: "Subscriptions",
      },
      {
        url: "#",
        text: "Talent Workshops",
      },
      {
        url: "#",
        text: "CPSC Certificates",
      },
      {
        url: "#",
        text: "Ratings",
      },
      {
        url: "#",
        text: "Shop Help",
      },
      {
        url: "#",
        text: "Contact Us",
      },
    ],
  },
  {
    title: "SITES",
    links: [
      {
        url: "#",
        text: "DC",
      },
      {
        url: "#",
        text: "MAD Magazine",
      },
      {
        url: "#",
        text: "DC Kids",
      },
      {
        url: "#",
        text: "DC Universe",
      },
      {
        url: "#",
        text: "DC Power Visa",
      },
    ],
  },
];

const FooterBottomlinks = [
  {
    url: "#",
    src: facebook,
    text: "Facebook",
  },
  {
    url: "#",
    src: twitter,
    text: "Twitter",
  },
  {
    url: "#",
    src: youtube,
    text: "YouTube",
  },
  {
    url: "#",
    src: pinterest,
    text: "Pinterest",
  },
  {
    url: "#",
    src: periscope,
    text: "Periscope",
  },
];

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header logo={logo} links={HeaderLinks} />
      <Main />
      <BlueStrip links={BlueStripLinks} />
      <Footer links={[FooterTopLinks, FooterBottomlinks]} />
    </div>
  );
}
