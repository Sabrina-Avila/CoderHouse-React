import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ id, title, descripcion: description, pictureUrl, price }) {
  return (
    <div className="card border-0 text-center">
      <figure className="card__thumb">
        <img
          className="card__image"
          src={pictureUrl}
          alt="imagen de producto"
        />
        <figcaption className="card__caption">
          <h2 className="card__title">{title}</h2>
          <p className="card__snippet">{description}</p>
          <h2 className="card__title">${price}</h2>
          <Link className="card_buttonAdd" to={`/item/${id}`}>
            <h1 className="text-white">
              <i className="bi bi-info-square bg-secundary"></i>
            </h1>
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}

export default Card;
