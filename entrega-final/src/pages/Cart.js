import { useContext, useMemo, useState, useCallback } from "react";
import {
  TableBody,
  TableFooter,
  TableHeader,
  CartContext,
  EmptyCart,
} from "../components/Cart";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const TABLE_COLUMNS = [
  { name: "Product", classes: "text-center" },
  { name: "Price", classes: "text-center" },
  { name: "Quantity", classes: "text-center" },
  { name: "Subtotal", classes: "text-center" },
  { name: "" },
];

export default function Cart() {
  const [loading, setLoading] = useState(false);
  const { list, remove, clear, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const total = useMemo(() => getTotalPrice(), [getTotalPrice]);
  const onClearClick = () => clear();

  const onBuyClick = useCallback(() => {
    setLoading(true);
    navigate("/checkout");
  }, [navigate]);

  return (
    <div className="container">
      {list.length > 0 ? (
        <>
          <Button
            type="danger"
            size="sm"
            icon="trash-fill"
            onClick={onClearClick}
          >
            Borrar lista
          </Button>
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
