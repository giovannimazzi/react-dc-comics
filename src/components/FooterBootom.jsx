import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";

const links = [
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

export default function FooterBottom() {
  return (
    <section className="footer-bottom text-white">
      <div className="container d-flex justify-content-between align-items-center py-4">
        <button className="btn btn-outline-light rounded-0 py-2">
          SIGN-UP NOW!
        </button>

        <div className="d-flex align-items-center gap-3">
          <span className="follow-us fw-bold">FOLLOW US</span>

          {links.map(({ url, src, text }) => (
            <a href={url} aria-label={text}>
              <img src={src} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
