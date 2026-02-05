export default function FooterTop() {
  return (
    <section className="footer-top text-white">
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
  );
}
