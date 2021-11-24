import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, cantidad) => {
    const found = cartList.findIndex((product) => product.id === item.id);
    if (found === -1) {
      setCartList([...cartList, { ...item, cantidad }]);
    } else {
      const producto = cartList[found];
      cartList[found] = { ...producto, cantidad: cantidad + producto.cantidad };
      setCartList(cartList);
    }
  };
  const isInCart = (id) => {
    const found = cartList.findIndex((product) => product.id === id);
    return found !== -1;
  };

  const clear = () => {
    setCartList([]);
  };
  const removeItem = (id) => {
    const list = cartList.filter((item) => item.id !== id);
    setCartList(list);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, clear, removeItem, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
