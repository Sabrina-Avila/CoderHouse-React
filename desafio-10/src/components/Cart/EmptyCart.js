import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <article className="d-flex flex-column text-center">
      <img src="imagenes/empty-cart.png" alt="no-cart" width="500" />
      <Link to="/">
        <button className="btn btn-warning">
          <i className="bi bi-house-door bi-margin" />
          Home
        </button>
      </Link>
    </article>
  );
}
