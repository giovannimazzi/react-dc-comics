import React from "react";

const linksLists = [
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

const listsGroups = [
  [linksLists[0], linksLists[1]],
  [linksLists[2]],
  [linksLists[3]],
];

export default function FooterTop() {
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
