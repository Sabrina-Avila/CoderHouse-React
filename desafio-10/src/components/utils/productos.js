import { getAll, getOneBy } from "./firestore";

export function getProducts(categoryId) {
  return getAll(categoryId);
}

export function getProductById(id) {
  return getOneBy(id);
}
