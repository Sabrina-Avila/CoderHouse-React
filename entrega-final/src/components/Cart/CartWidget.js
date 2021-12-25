import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartWidget() {
  const { getProductCount } = useContext(CartContext);
  return (
    <div className="header__nav__ul__li--style nav-item cart-widget bold">
      <i className="bi bi-cart3 bi-margin icon"></i>
      <span className="contador">{getProductCount()}</span>
    </div>
  );
}

export default CartWidget;
