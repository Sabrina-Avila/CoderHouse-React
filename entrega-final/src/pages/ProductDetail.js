import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSingleProduct } from "../hooks/useProducts";
import { Detail } from "../components/Product";
import Loading from "../components/Loading";
import Modal from "../components/Modal";

function Product() {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const { product, loading, error } = useSingleProduct(id);

  const onModalClose = () => setShow(false);

  // Actualiza el estado de show si hay un error al obtener un producto.
  useEffect(() => error && setShow(true), [error]);

  return (
    <article className="mt-4">
      {loading ? (
        <Loading classes="mt-5 justify-content-center" />
      ) : (
        <Detail {...product} />
      )}
      {show && (
        <Modal title="Error" bodyText={error.measage} onClose={onModalClose} />
      )}
    </article>
  );
}

export default Product;
