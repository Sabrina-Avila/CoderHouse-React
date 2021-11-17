import { useEffect, useState } from "react";
import { getProductoById } from "./utils/get-productos";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Loading from "./loading";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { idItem } = useParams();

  useEffect(() => {
    if (idItem) {
      getProductoById(idItem)
        .then((result) => setProduct(result))
        .catch((err) => alert(err));
    }
  }, [idItem]);

  return product ? (
    <ItemDetail
      pictureUrl={product.pictureUrl}
      title={product.title}
      descripcion={product.descripcion}
      stock={product.stock}
      price={product.price}
    />
  ) : (
    <Loading />
  );
};

export default ItemDetailContainer;
