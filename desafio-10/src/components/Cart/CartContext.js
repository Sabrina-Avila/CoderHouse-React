import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [list, setList] = useState([]);

  function add(item, quantity) {
    const cart = [...list];
    const index = cart.findIndex(({ id }) => id === item.id);
    // Creamos el nuevo producto. Si existe, actualizamos `quantity`
    const newQuantity = quantity + (cart[index]?.quantity || 0);
    const newProduct = {
      ...item,
      quantity: newQuantity,
      subtotal: item.price * newQuantity,
    };

    // Si el producto está en el carrito, lo removemos
    index > -1 && cart.splice(index);

    // Agregamos el "nuevo" producto al carrito
    cart.push(newProduct);
    setList(cart);
  }

  function has(itemId) {
    return list.findIndex(({ id }) => id === itemId) !== -1;
  }

  function clear() {
    setList([]);
  }

  function remove(itemId) {
    setList(list.filter(({ id }) => id !== itemId));
  }

  function getProductCount() {
    return list.reduce((prev, current) => prev + current.quantity, 0);
  }

  function getProductTotalPrice(itemId) {
    const product = list.find(({ id }) => id === itemId);
    return product ? product.price * product.quantity : null;
  }

  function getTotalPrice() {
    return list.reduce(
      (prev, current) => prev + current.price * current.quantity,
      0
    );
  }

  return (
    <CartContext.Provider
      value={{
        add,
        clear,
        getProductCount,
        getProductTotalPrice,
        getTotalPrice,
        has,
        list,
        remove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
