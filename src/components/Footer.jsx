import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBootom";

export default function Footer({ links }) {
  const FooterTopLinks = links[0];
  const FooterBottomLinks = links[1];
  return (
    <footer>
      {/* Footer top */}
      <FooterTop links={FooterTopLinks} />
      {/* Footer bottom */}
      <FooterBottom links={FooterBottomLinks} />
    </footer>
  );
}
