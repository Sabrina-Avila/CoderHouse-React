import ItemCount from "./ItemCount";

function ItemDetail({ pictureUrl, title, descripcion, stock, price }) {
  return (
    <div className="d-flex justify-content-center text-center bg-gradient-secondary">
      <div>
        <div>
          <img src={pictureUrl} alt="Producto" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">
              <small className="text-muted">
                Cantidad de Stock: {stock} Unidades
              </small>
            </p>
            <h2 className="card__title">${price}</h2>
            {stock > 0 && <ItemCount maximo={stock} minimo={1} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
