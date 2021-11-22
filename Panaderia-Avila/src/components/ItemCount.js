import { useState } from "react";
import "./product.scss";

function ItemCount({ maximo, minimo }) {
  const [cantidad, setCantidad] = useState(1);

  const incremento = () => {
    if (cantidad < maximo) setCantidad(cantidad + 1);
  };

  const decremento = () => {
    if (cantidad > minimo) setCantidad(cantidad - 1);
  };

  const agregar = () => {
    alert(`Se agregado ${cantidad} producto al carrito`);
  };

  return (
    <>
      <span>
        <button className="card__button" type="button" onClick={decremento}>
          -
        </button>
      </span>
      <input
        className="text-center"
        type="text"
        id="contador"
        value={cantidad}
        readOnly
      />
      <span>
        <button className="card__button" type="button" onClick={incremento}>
          +
        </button>
      </span>
      <button className="bg-secundary m-4" type="button" onClick={agregar}>
        Comprar !
      </button>
    </>
  );
}

export default ItemCount;
