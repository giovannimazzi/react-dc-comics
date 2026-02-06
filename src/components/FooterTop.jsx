import React from "react";

export default function FooterTop({ links }) {
  const listsGroups = [[links[0], links[1]], [links[2]], [links[3]]];

  return (
    <section className="footer-top text-white">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="row py-5">
              {listsGroups.map((group, index) => {
                return (
                  <div key={index} className="col-4 w-25">
                    {group.map((list, index) => {
                      return (
                        <React.Fragment key={index}>
                          <p className="h5 text-white fw-bold">{list.title}</p>
                          <ul className="list-unstyled">
                            {list.links.map((link, index) => {
                              return (
                                <li key={index}>
                                  <a className="footer-link" href={link.url}>
                                    {link.text}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </React.Fragment>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6 dc-logo-bg"></div>
        </div>
      </div>
    </section>
  );
}
