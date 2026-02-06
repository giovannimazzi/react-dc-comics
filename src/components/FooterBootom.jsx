export default function FooterBottom({ links }) {
  return (
    <section className="footer-bottom text-white">
      <div className="container d-flex justify-content-between align-items-center py-4">
        <button className="btn btn-outline-light rounded-0 py-2">
          SIGN-UP NOW!
        </button>

        <div className="d-flex align-items-center gap-3">
          <span className="follow-us fw-bold">FOLLOW US</span>

          {links.map(({ url, src, text }, index) => (
            <a key={index} href={url} aria-label={text}>
              <img src={src} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
