import { useState } from "react";

function CartWidget() {
  const [cantidad, setCantidad] = useState(0);
  const increment = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <>
      <div className="header__nav__ul__li--style nav-item" onClick={increment}>
        <i className="bi bi-cart3 icon"></i>
        <p className="contador">{cantidad}</p>
      </div>
    </>
  );
}

export default CartWidget;
