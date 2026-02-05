import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* Footer top */}
      <section className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="row py-5">
                {/* colonna sinistra: DC COMICS + SHOP */}
                <div className="col-4 w-25">
                  <p className="h5 text-white fw-bold">DC COMICS</p>
                  <ul className="list-unstyled">
                    <li>
                      <a className="footer-link" href="#Characters">
                        Characters
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#Comics">
                        Comics
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#Movies">
                        Movies
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#TV">
                        TV
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#Games">
                        Games
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#Videos">
                        Videos
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#News">
                        News
                      </a>
                    </li>
                  </ul>

                  <p className="h5 text-white fw-bold mt-4">SHOP</p>
                  <ul className="list-unstyled">
                    <li>
                      <a className="footer-link" href="#ShopDC">
                        Shop DC
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#ShopDCCollectibles">
                        Shop DC Collectibles
                      </a>
                    </li>
                  </ul>
                </div>

                {/* colonna centrale: DC */}
                <div className="col-4 w-25">
                  <p className="h5 text-white fw-bold">DC</p>
                  <ul className="list-unstyled">
                    <li>
                      <a className="footer-link" href="#TermsOfUse">
                        Terms Of Use
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#Privacypolicy">
                        Privacy policy (New)
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#AdChoices">
                        Ad Choices
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#Advertising">
                        Advertising
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#Jobs">
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#Subscriptions">
                        Subscriptions
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#TalentWorkshops">
                        Talent Workshops
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#CPSCCertificates">
                        CPSC Certificates
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#Ratings">
                        Ratings
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#ShopHelp">
                        Shop Help
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#ContactUs">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                {/* colonna destra: SITES */}
                <div className="col-4 w-25">
                  <p className="h5 text-white fw-bold">SITES</p>
                  <ul className="list-unstyled">
                    <li>
                      <a className="footer-link" href="#DC">
                        DC
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#MADMagazine">
                        MAD Magazine
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#DCKids">
                        DC Kids
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#DCUniverse">
                        DC Universe
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="#DCPowerVisa">
                        DC Power Visa
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 dc-logo-bg"></div>
          </div>
        </div>
      </section>

      {/* Footer bottom */}
      <section className="footer-bottom">
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
    </footer>
  );
}
