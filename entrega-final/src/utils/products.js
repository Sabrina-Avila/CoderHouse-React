import { getAll, getOneBy } from "./firestore";

// Obtiene todo los productos de la base de datos. Si le pasamos una categoría,
// devuelve los productos de esa categoría.
export function getProducts(categoryId) {
  return getAll(categoryId);
}

// Devuelve un producto de la base de datos
export function getProductById(id) {
  return getOneBy(id);
}
