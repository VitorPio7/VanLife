import { Link } from "react-router";
import "../css/Head.css";
export default function Head({ name }) {
  return (
    <div className="headContainer">
      <h1>
        <Link to="/">{name}</Link>{" "}
      </h1>
      <div></div>
      <nav className="myNaveBar">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </div>
  );
}
