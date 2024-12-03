import "../css/Footer.css";
export default function Footer({ name }) {
  let year = new Date();
  return (
    <footer>
      <p>
        Ⓒ {year.getFullYear()} {name}
      </p>
    </footer>
  );
}
