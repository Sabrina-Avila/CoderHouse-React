import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ id, pictureUrl, title, descripcion, stock, price }) {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAgregarClick = (cantidad) => {
    alert(`Se agregado ${cantidad} producto al carrito`);
    setItemCount(cantidad);
    test.addToCart({ id, pictureUrl, title, price }, cantidad);
  };

  return (
    <div className="d-flex justify-content-center text-center bg-gradient-secondary">
      <div>
        <div>
          <img src={pictureUrl} alt="Producto" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">
              <small className="text-muted">
                Cantidad de Stock: {stock} Unidades
              </small>
            </p>
            <h2 className="card__title">${price}</h2>
            {itemCount === 0 ? (
              <ItemCount
                maximo={stock}
                minimo={1}
                onAgregarClick={onAgregarClick}
              />
            ) : (
              <Link to="/cart">
                <button>CheckOut</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
