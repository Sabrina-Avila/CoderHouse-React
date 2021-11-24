import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const test = useContext(CartContext);

  return (
    <div className="container">
      {test.cartList.length > 0 ? (
        <table className="table table-hover table-condensed">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th className="text-center">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {test.cartList.map((item) => (
              <tr key={item.id}>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-6 hidden-xs">
                      <img
                        src={item.pictureUrl}
                        alt="producto"
                        className="img-responsive"
                        width="150px"
                        height="150px"
                      />
                    </div>
                    <div className="col-6">
                      <h4 className="nomargin">{item.title}</h4>
                    </div>
                  </div>
                </td>
                <td data-th="Price"> $ {item.price}</td>
                <td data-th="Quantity">
                  <input
                    type="number"
                    className="form-control text-center"
                    value={item.cantidad}
                  />
                </td>
                <td data-th="Subtotal" className="text-center">
                  ${item.price}
                </td>
                <td className="actions" data-th="">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => test.removeItem(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            {/* <tr className="visible-xs">
            <td className="text-center">
              <strong>Total $ 5.11</strong>
            </td>
          </tr> */}
            <tr>
              <td>
                <Link to="/">
                  <button className="btn btn-warning">
                    <i className="fa fa-angle-left"></i> Continue Shopping
                  </button>
                </Link>
              </td>
              <td colspan="2" className="hidden-xs"></td>
              <td className="hidden-xs text-center">
                <strong>Total : $ </strong>
              </td>
              <td>
                <button
                  className="btn btn-success btn-block"
                  onClick={test.clear}
                >
                  Borrar Lista <i className="fa fa-angle-right"></i>
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <img src="imagenes/empty-cart.png" alt="no-cart" width="500" />
      )}
    </div>
  );
};
export default Cart;
