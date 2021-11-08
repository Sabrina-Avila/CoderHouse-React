import ItemCount from "./ItemCount";
import producto from "./imagenes/alf03_383x510.jpg";

function CardProduct() {
  return (
    <>
      <div className="card border-0">
        <figure className="card__thumb">
          <img src={producto} alt="alfajores01" className="card__image" />
          <figcaption className="card__caption">
            <h2 className="card__title">Alfajores</h2>
            <p className="card__snippet">
              Caja de alfajores surtidos, la caja viene por 6 unidades.
            </p>
            <ItemCount maximo={10} minimo={1} />
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default CardProduct;
