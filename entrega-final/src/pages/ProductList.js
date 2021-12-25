import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProducts } from "../hooks/useProducts";
import { List } from "../components/Product";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import "./ProductList.scss";

function Products() {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const { products, error, loading } = useProducts(id);

  const onModalClose = () => setShow(false);

  // Actualiza el estado de show si hay un error al obtener los productos.
  useEffect(() => error && setShow(true), [error]);

  return (
    <article className="mt-5">
      <h1 className="title_index text-center">
        "La risa es como el postre, para ella siempre hay hueco"
      </h1>
      <section className="mt-2">
        {loading ? (
          <Loading classes="mt-5 justify-content-center" />
        ) : (
          <List products={products} />
        )}
      </section>
      {show && error && (
        <Modal title="Error" bodyText={error.measage} onClose={onModalClose} />
      )}
    </article>
  );
}

export default Products;
