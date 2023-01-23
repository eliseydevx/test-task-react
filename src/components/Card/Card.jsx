import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ id, title, subtitle, src, alt }) {
  return (
    <Link className="Card" to={`/photo/${id}`}>
      <img className="Card-image" src={src} alt={alt} />
      <p className="Card-title">{title}</p>
      <p className="Card-subtitle">{subtitle}</p>
    </Link>
  );
}

export default Card;
