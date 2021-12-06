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

  const calcItems = () => {
    let qtys = cartList.map((item) => item.cantidad);
    return qtys.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  const totalPorItem = (id) => {
    const item = cartList.find((item) => item.id === id);
    return item.price * item.cantidad;
  };

  const total = () => {
    let totalPerItem = cartList.map((item) => totalPorItem(item.id));
    return totalPerItem.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clear,
        removeItem,
        isInCart,
        total,
        totalPorItem,
        calcItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
