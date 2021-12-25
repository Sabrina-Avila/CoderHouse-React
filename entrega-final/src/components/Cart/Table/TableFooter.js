import { Link } from "react-router-dom";
import Button from "../../Button";

export default function TableFooter({ loading, onBuyClick, total }) {
  return (
    <tfoot>
      <tr>
        <td>
          <Link to="/">
            <Button type="warning" icon="arrow-return-left" disabled={loading}>
              Continue Shopping
            </Button>
          </Link>
        </td>
        <td colSpan="2" className="hidden-xs"></td>
        <td className="hidden-xs text-center">
          <strong>Total : $ {total}</strong>
        </td>
        <td>
          <Button
            type="success"
            icon="bag"
            loading={loading}
            onClick={onBuyClick}
          >
            Finalizar compra
          </Button>
        </td>
      </tr>
    </tfoot>
  );
}
