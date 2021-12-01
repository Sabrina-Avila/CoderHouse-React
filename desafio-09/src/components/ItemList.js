import Item from "./Item";
import Loading from "./loading";

function ItemList({ items }) {
  return (
    <section className="d-flex flex-wrap justify-content-center">
      {items ? (
        items.map((producto) => <Item key={producto.id} {...producto} />)
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default ItemList;
