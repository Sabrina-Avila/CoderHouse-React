import { useEffect, useState } from "react";
import { getProductById } from "./utils/productos";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Loading from "./loading";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { idItem } = useParams();

  useEffect(() => {
    if (idItem) {
      getProductById(idItem)
        .then((result) => setProduct(result))
        .catch((err) => alert(err));
    }
  }, [idItem]);

  return product ? <ItemDetail {...product} /> : <Loading />;
};

export default ItemDetailContainer;
