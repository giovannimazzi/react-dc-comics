import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";

export default function FooterBottom() {
  return (
    <section className="footer-bottom text-white">
      <div className="container d-flex justify-content-between align-items-center py-4">
        <button className="btn btn-outline-light rounded-0 py-2">
          SIGN-UP NOW!
        </button>

        <div className="d-flex align-items-center gap-3">
          <span className="follow-us fw-bold">FOLLOW US</span>

          <a href="#" aria-label="Facebook">
            <img src={facebook} alt="" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={twitter} alt="" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src={youtube} alt="" />
          </a>
          <a href="#" aria-label="Pinterest">
            <img src={pinterest} alt="" />
          </a>
          <a href="#" aria-label="Periscope">
            <img src={periscope} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
