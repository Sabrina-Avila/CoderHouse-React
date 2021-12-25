import { increment, serverTimestamp } from "@firebase/firestore";
import { createOne, updateOne } from "./firestore";

// Crea un nuevo listado de productos seleccionados
function transformCart(cart) {
  return cart.map(({ id, title, price, quantity }) => ({
    id,
    title,
    price,
    quantity,
  }));
}

// Actualiza el stock en firebase de cada uno de los productos que hay en cart
async function updateAllProductStockFrom(cart) {
  return await Promise.all(
    cart.map(({ id, quantity }) => {
      const payload = { stock: increment(-quantity) };
      return updateOne(id, payload);
    })
  );
}

// Crea una nueva orden en firebase
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
