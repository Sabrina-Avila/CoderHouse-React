import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartWidget() {
  const test = useContext(CartContext);
  return (
    <>
      <div className="header__nav__ul__li--style nav-item">
        <i className="bi bi-cart3 icon"></i>
        <p className="contador">{test.calcItems()}</p>
      </div>
    </>
  );
}

export default CartWidget;
