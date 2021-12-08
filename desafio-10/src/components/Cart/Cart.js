import { TableBody, TableFooter, TableHeader } from "./Table";
import { useContext, useMemo, useState, useCallback } from "react";
import { CartContext } from "./CartContext";
import { createOrderFrom } from "../utils/orders";
import EmptyCart from "./EmptyCart";

const TABLE_COLUMNS = [
  { name: "Product" },
  { name: "Price" },
  { name: "Quantity" },
  { name: "Subtotal", classes: "text-center" },
  { name: "" },
];
const DEFAULT_CONSUMER = {
  name: "Pikachu",
  email: "pikachu@pokemon.com",
  phone: "+467080090",
};

export default function Cart() {
  const [loading, setLoading] = useState(true);
  const { list, remove, clear, getTotalPrice } = useContext(CartContext);

  const total = useMemo(() => getTotalPrice(), [getTotalPrice]);
  const onClearClick = () => clear();
  const onBuyClick = useCallback(() => {
    setLoading(true);
    return createOrderFrom({ products: list, total }, DEFAULT_CONSUMER)
      .then((result) =>
        alert(
          `Your order has been created. Please take note of the ID of your order. Order ID: ${result.id}`
        )
      )
      .then(clear)
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [clear, list, total]);

  return (
    <div className="container">
      {list.length > 0 ? (
        <>
          <button className="btn btn-danger btn-sm" onClick={onClearClick}>
            <i className="bi bi-radioactive bi-margin" />
            Borrar lista
          </button>
          <table className="table table-hover table-condensed">
            <TableHeader columns={TABLE_COLUMNS} />
            <TableBody items={list} onRemoveItem={remove} />
            <TableFooter
              onBuyClick={onBuyClick}
              total={total}
              loading={loading}
            />
          </table>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
