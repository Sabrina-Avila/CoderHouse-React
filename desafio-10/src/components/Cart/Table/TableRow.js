export default function TableRow({
  image,
  title,
  price,
  quantity,
  subtotal,
  onTrashClick,
}) {
  return (
    <tr>
      <td data-th="Product">
        <div className="row">
          <div className="col-6 hidden-xs">
            <img
              src={image.src}
              alt={image.alt}
              className="img-responsive"
              width="150px"
              height="150px"
            />
          </div>
          <div className="col-6">
            <h4 className="nomargin">{title}</h4>
          </div>
        </div>
      </td>
      <td data-th="Price"> $ {price}</td>
      <td data-th="Quantity">
        <input
          type="number"
          className="form-control text-center"
          value={quantity}
          readOnly
        />
      </td>
      <td data-th="subtotal" className="text-center">
        $ {subtotal}
      </td>
      <td className="actions" data-th="">
        <button className="btn btn-danger btn-sm" onClick={onTrashClick}>
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}
