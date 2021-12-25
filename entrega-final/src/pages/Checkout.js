import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "../components/Cart";
import { createOrderFrom } from "../utils/orders";
import { useNavigate } from "react-router-dom";
import PaymentForm from "../components/Payment/Form";
import Modal from "../components/Modal";

function Checkout() {
  const [orderId, setOrderId] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { list, clear, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  const total = useMemo(() => getTotalPrice(), [getTotalPrice]);

  useEffect(() => {
    // Redireccionamos al usuario si el carrito está vacio.
    list?.length === 0 && orderId === null && navigate("/");
  }, [orderId, list, navigate]);

  const onSuccessModalClose = () => {
    clear();
    setOrderId(null);
  };

  const onFormSubmit = useCallback(
    (fields) => {
      setLoading(true);
      createOrderFrom(
        { products: list, total },
        {
          name: fields["customer-name"],
          email: fields["customer-email"],
          card: {
            name: fields.name,
            expiry: fields.expiry,
            cvc: fields.cvc,
            number: fields.number,
          },
        }
      )
        .then((result) => setOrderId(result.id))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    },
    [list, total]
  );

  const onModalClose = () => setError(false);

  return (
    <article className="mt-4">
      <PaymentForm onSubmit={onFormSubmit} loading={loading} />
      {error && (
        <Modal
          title="Oops! Algo salió mal"
          bodyText={error.message}
          onClose={onModalClose}
        />
      )}
      {orderId && (
        <Modal
          title="Felicitaciones!"
          bodyText={`Tu compra fue exitosa. Te enviaremos por mail el número (${orderId}) de seguimiento`}
          onSave={onSuccessModalClose}
          saveButtonText="Volver al inicio"
        />
      )}
    </article>
  );
}

export default Checkout;
