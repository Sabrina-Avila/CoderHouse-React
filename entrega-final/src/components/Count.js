import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Count({ max, min, onSubmit }) {
  const [count, setCount] = useState(0);

  const onAddClick = () => count < max && setCount((count) => count + 1);
  const onMinusClick = () => count > min && setCount((count) => count - 1);
  const onSubmitClick = () => onSubmit && onSubmit(count);

  return (
    <>
      <div className="d-flex justify-content-center mb-3">
        <span>
          <Button type="light" onClick={onMinusClick} icon="dash-square" />
        </span>
        <Input
          className="text-center"
          attributes={{ type: "text", value: count, readOnly: true }}
        />
        <span>
          <Button type="light" onClick={onAddClick} icon="plus-square" />
        </span>
      </div>
      <Button
        type="primary"
        icon="cart-plus"
        onClick={onSubmitClick}
        disabled={!count}
      >
        Agregar
      </Button>
    </>
  );
}

export default Count;
