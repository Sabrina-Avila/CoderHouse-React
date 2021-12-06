import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import "./product.scss";
import { useParams } from "react-router";
import { firestoreFetch } from "./utils/firestoreFetch";

function ItemListContainer() {
  const { idCategory } = useParams();
  const [productos, setProductos] = useState();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((r) => setProductos(r))
      .catch((err) => console.log(err));
  }, [idCategory]);

  useEffect(() => {
    return () => {
      setProductos([]);
    };
  }, []);

  return (
    <>
      <h1 className="title_index">
        "La risa es como el postre, para ella siempre hay hueco"
      </h1>
      <section className="cake_body">
        <div className="container">
          <ItemList items={productos} />
        </div>
      </section>
    </>
  );
}

export default ItemListContainer;
