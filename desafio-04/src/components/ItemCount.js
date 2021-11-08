import { useState } from "react";
import "./product.scss";

function ItemCount(props) {
  const [cantidad, setCantidad] = useState(1);

  const incremento = () => {
    if (cantidad < props.maximo) setCantidad(cantidad + 1);
  };

  const decremento = () => {
    if (cantidad > props.minimo) setCantidad(cantidad - 1);
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
        className=" text-center"
        type="text"
        id="contador"
        value={cantidad}
      />
      <span>
        <button className="card__button" type="button" onClick={incremento}>
          +
        </button>
        <button className="card__buttonAdd" type="button" onClick={agregar}>
          Agregar a Carrito
        </button>
      </span>
    </>
  );
}

export default ItemCount;
