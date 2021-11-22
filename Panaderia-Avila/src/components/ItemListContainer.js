import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getProductos } from "./utils/get-productos";
import "./product.scss";
import { useParams } from "react-router";

function ItemListContainer() {
  const { idCategory } = useParams();
  const [productos, setProductos] = useState();
  const items = idCategory
    ? productos?.filter(
        (item) => parseInt(item.category.id, 10) === parseInt(idCategory, 10)
      )
    : productos;

  useEffect(() => {
    if (!productos) {
      getProductos().then((items) => setProductos(items));
    }
  }, [productos]);

  return (
    <>
      <h1> Productos de la Panaderia </h1>
      <section className="cake_body">
        <div className="container">
          <ItemList items={items} />
        </div>
      </section>
    </>
  );
}

export default ItemListContainer;
