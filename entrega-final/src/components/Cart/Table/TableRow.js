import Button from "../../Button";

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
      <td data-th="Price" className="text-center">
        $ {price}
      </td>
      <td data-th="Quantity" className="text-center">
        {quantity}
      </td>
      <td data-th="subtotal" className="text-center">
        $ {subtotal}
      </td>
      <td className="actions" data-th="">
        <Button type="danger" size="sm" onClick={onTrashClick} icon="trash" />
      </td>
    </tr>
  );
}
