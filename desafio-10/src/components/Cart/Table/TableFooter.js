import { Link } from "react-router-dom";

export default function TableFooter({ loading, onBuyClick, total }) {
  return (
    <tfoot>
      <tr>
        <td>
          <Link to="/">
            <button className="btn btn-warning" disabled={loading}>
              <i className="bi bi-arrow-return-left bi-margin" />
              Continue Shopping
            </button>
          </Link>
        </td>
        <td colSpan="2" className="hidden-xs"></td>
        <td className="hidden-xs text-center">
          <strong>Total : $ {total}</strong>
        </td>
        <td>
          <button
            className="btn btn-success btn-block"
            onClick={onBuyClick}
            disabled={loading}
          >
            {loading ? (
              <div class="spinner-border text-light" role="status" />
            ) : (
              <i className="bi bi-bag bi-margin" />
            )}
            Finalizar compra
          </button>
        </td>
      </tr>
    </tfoot>
  );
}
