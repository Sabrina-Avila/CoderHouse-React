import { useEffect, useState } from "react";
import { getProductById, getProducts } from "../utils/products";

export function useProducts(categoryId) {
  const [products, setProducts] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    return () => setProducts();
  }, [categoryId]);

  return {
    products,
    error,
    loading,
  };
}

export function useSingleProduct(id) {
  const [product, setProduct] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getProductById(id)
        .then((response) => setProduct(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));

      return () => setProduct();
    }
  }, [id]);

  return {
    product,
    error,
    loading,
  };
}
