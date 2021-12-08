import { increment, serverTimestamp } from "@firebase/firestore";
import { createOne, updateOne } from "./firestore";

function transformCart(cart) {
  return cart.map(({ id, title, price, quantity }) => ({
    id,
    title,
    price,
    quantity,
  }));
}

async function updateAllProductStockFrom(cart) {
  return await Promise.all(
    cart.map(({ id, quantity }) => {
      const payload = { stock: increment(-quantity) };
      return updateOne(id, payload);
    })
  );
}

export async function createOrderFrom(cart, consumer) {
  const { products, total } = cart;
  // Generamos los productos, con los valores que queremos guardar.
  const items = transformCart(products);

  // Actualizamos el stock
  await updateAllProductStockFrom(products);

  // Creamos la orden
  const order = {
    consumer,
    total,
    items,
    date: serverTimestamp(),
  };

  return createOne(order);
}
