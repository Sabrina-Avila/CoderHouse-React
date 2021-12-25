import { Link } from "react-router-dom";
import Button from "../Button";

export default function EmptyCart() {
  return (
    <article className="d-flex flex-column text-center">
      <img src="imagenes/empty-cart.png" alt="no-cart" width="500" />
      <Link to="/">
        <Button type="warning" icon="house-door">
          Home
        </Button>
      </Link>
    </article>
  );
}
