import CardProduct from "./CardProduct";
import "./product.scss";
function ItemListContainer() {
  return (
    <>
      <h1> Productos de la Panaderia </h1>
      <section className="cake_body">
        <div className="container ">
          <CardProduct />
        </div>
      </section>
    </>
  );
}

export default ItemListContainer;
