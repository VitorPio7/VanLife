import { Link } from "react-router";

export default function Head({ name }) {
  return (
    <div className="headContainer">
      <h1>{name}</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </div>
  );
}
