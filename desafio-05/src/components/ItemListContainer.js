import ItemList from "./ItemList";
import "./product.scss";

function ItemListContainer() {
  return (
    <>
      <h1> Productos de la Panaderia </h1>
      <section className="cake_body ">
        <div className="container  ">
          <ItemList />
        </div>
      </section>
    </>
  );
}

export default ItemListContainer;
