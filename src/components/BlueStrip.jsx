import BlueStripLink from "./BlueStripLink";

export default function BlueStrip({ links }) {
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
