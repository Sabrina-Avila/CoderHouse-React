import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart";
import Button from "../Button";
import Count from "../Count";
import Modal from "../Modal";

function Detail({
  id,
  pictureUrl,
  title,
  descripcion: description,
  stock,
  price,
}) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const { add, has } = useContext(CartContext);

  const onSubmit = (quantity) => {
    console.log(`Se agregado ${quantity} producto al carrito`);
    setCount(quantity);

    has(id) ? setShow(true) : add({ id, pictureUrl, title, price }, quantity);
  };

  const onModalSave = () => {
    add({ id, pictureUrl, title, price }, count);
    setShow(false);
  };
  const onModalClose = () => setShow(false);

  return (
    <div className="d-flex justify-content-center text-center">
      <div>
        <div>
          <img src={pictureUrl} alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                Cantidad de Stock: {stock} Unidades
              </small>
            </p>
            <h2 className="card__title">${price}</h2>
            {count === 0 && !show ? (
              <Count max={stock} min={1} onSubmit={onSubmit} />
            ) : (
              <Link to="/cart">
                <Button size="sm" icon="cart">
                  Ir al carrito
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {show && (
        <Modal
          title="Confirmación"
          bodyText={`El producto ${title} ya se encuentra en el carrito. ¿Desea agregar ${count} más?`}
          saveButtonText="Confirmar"
          onSave={onModalSave}
          onClose={onModalClose}
        />
      )}
    </div>
  );
}

export default Detail;
