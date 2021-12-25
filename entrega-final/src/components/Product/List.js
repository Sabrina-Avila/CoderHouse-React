import Card from "./Card";

function List({ products }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
}

export default List;
