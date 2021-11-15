import ItemCount from "./ItemCount";

function Item({ title, descripcion, pictureUrl, price }) {
  return (
    <>
      <div className="card border-0">
        <figure className="card__thumb">
          <img
            src={pictureUrl}
            alt="imagen de producto"
            className="card__image"
          />
          <figcaption className="card__caption">
            <h2 className="card__title">{title}</h2>
            <p className="card__snippet">{descripcion}</p>
            <h2 className="card__title">${price}</h2>
            <ItemCount maximo={10} minimo={1} />
            <button className="card__buttonAdd m-4" type="button">
              Detalles del producto
            </button>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default Item;
