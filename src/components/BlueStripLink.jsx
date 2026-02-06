export default function BlueStripLink({ link }) {
  link = link || { url: "#", src: "#", text: "Blue Strip Link" };
  let { url, src, text } = link;
  url = url || "#";
  src = src || "#";
  text = text || "Blue Strip Link";
  return (
    <a href={url} aria-label={text} className="blue-link">
      <img src={src} alt="" />
      <span>{text}</span>
    </a>
  );
}
