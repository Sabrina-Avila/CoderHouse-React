import Item from "./Item";
import Loading from "./loading";

function ItemList({ items }) {
  return (
    <section className="d-flex flex-wrap justify-content-center">
      {items ? (
        items.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            pictureUrl={producto.pictureUrl}
          />
        ))
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default ItemList;
