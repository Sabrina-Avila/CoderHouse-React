import { useState } from "react";
import { formatToExpiry } from "../../utils/expiry-date";
import Cards from "react-credit-cards";
import Input from "../Input";
import Button from "../Button";
import "react-credit-cards/lib/styles.scss";

function PaymentForm({ onSubmit, loading }) {
  const [cvc, setCVC] = useState("");
  const [expiry, setExpiry] = useState({ card: "", date: "" });
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [focused, setFocused] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [valid, setValid] = useState(false);

  const onFormChange = (event) => {
    const formData = new FormData(event.currentTarget);
    const props = Object.fromEntries(formData);

    try {
      for (const prop in props) {
        // Comprobamos campo por campo del formulario, si está vacio lanzamos un error
        // para deshabilitar el botón de submit.
        if (Object.hasOwnProperty.call(props, prop)) {
          const value = props[prop];
          if (!value) {
            throw new Error("field is empty");
          }
        }
      }

      setValid(true);
    } catch {
      setValid(false);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (valid) {
      const formData = new FormData(event.currentTarget);
      const props = Object.fromEntries(formData);
      onSubmit && onSubmit(props);
    }
  };

  const onFieldFocus = (event) => setFocused(event.currentTarget.name);
  const onFieldBlur = () => setFocused("");

  const onCustomerNameChange = (event) =>
    setCustomerName(event.currentTarget.value);
  const onCustomerEmailChange = (event) =>
    setCustomerEmail(event.currentTarget.value);

  const onNumberChange = (event) =>
    event.currentTarget.value.length < 17 &&
    setNumber(event.currentTarget.value);
  const onNameChange = (event) => setName(event.currentTarget.value);
  const onExpiryChange = (event) =>
    setExpiry({
      card: formatToExpiry(event.currentTarget.value),
      date: event.currentTarget.value,
    });
  const onCVCChange = (event) =>
    event.currentTarget.value.length < 4 && setCVC(event.currentTarget.value);

  return (
    <section className="d-flex flex-column align-items-center">
      <Cards
        cvc={cvc}
        expiry={expiry.card}
        name={name}
        number={number}
        focused={focused}
        placeholders={{
          name: "Nombre",
        }}
        preview
      />
      <form
        id="checkout-form"
        className="d-flex align-items-start justify-content-center mt-5"
        name="checkout"
        onChange={onFormChange}
        onSubmit={onFormSubmit}
      >
        <fieldset className="m-2">
          <Input
            className="mt-2"
            label="Nombre"
            name="customer-name"
            attributes={{
              onChange: onCustomerNameChange,
              required: true,
              type: "text",
              value: customerName,
            }}
          />
          <Input
            className="mt-2"
            label="Correo electrónico"
            name="customer-email"
            attributes={{
              onChange: onCustomerEmailChange,
              required: true,
              type: "email",
              value: customerEmail,
            }}
          />
        </fieldset>
        <fieldset className="m-2">
          <Input
            className="mt-2"
            label="Número de tarjeta"
            name="number"
            attributes={{
              maxLength: 16,
              onBlur: onFieldBlur,
              onChange: onNumberChange,
              onClick: onFieldFocus,
              onFocus: onFieldFocus,
              required: true,
              type: "tel",
              value: number,
              inputMode: "numeric",
              pattern: "[0-9s]{13,19}",
              autoComplete: "cc-number",
              placeholder: "xxxx xxxx xxxx xxxx",
            }}
          />
          <Input
            className="mt-2"
            label="Nombre"
            name="name"
            helpText="Escribilo de la misma forma que está en la tarjeta"
            attributes={{
              value: name,
              onBlur: onFieldBlur,
              onClick: onFieldFocus,
              onChange: onNameChange,
              onFocus: onFieldFocus,
              required: true,
              type: "text",
            }}
          />
          <Input
            className="mt-2"
            label="Fecha de vencimiento"
            name="expiry"
            attributes={{
              value: expiry.date,
              onBlur: onFieldBlur,
              onClick: onFieldFocus,
              onChange: onExpiryChange,
              onFocus: onFieldFocus,
              required: true,
              type: "date",
            }}
          />
          <Input
            className="mt-2"
            label="Código de seguridad"
            name="cvc"
            attributes={{
              maxLength: 3,
              pattern: "[0-9]+",
              value: cvc,
              onBlur: onFieldBlur,
              onClick: onFieldFocus,
              onChange: onCVCChange,
              onFocus: onFieldFocus,
              required: true,
              type: "number",
            }}
          />
        </fieldset>
      </form>
      <Button
        className="w-50"
        type="primary"
        icon="bag-check"
        size="lg"
        loading={loading}
        disabled={!valid}
        attributes={{ form: "checkout-form", type: "submit" }}
      >
        Comprar
      </Button>
    </section>
  );
}

export default PaymentForm;
