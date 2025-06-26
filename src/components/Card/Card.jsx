import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="Card">
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.title}</p>
    </Link>
  );
}
