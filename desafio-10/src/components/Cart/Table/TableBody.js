import TableRow from "./TableRow";

export default function TableBody({ items, onRemoveItem }) {
  return (
    <tbody>
      {items?.map((item) => (
        <TableRow
          key={item.id}
          image={{ src: item.pictureUrl, alt: item.title }}
          quantity={item.quantity}
          subtotal={item.subtotal}
          price={item.price}
          onTrashClick={() => onRemoveItem(item.id)}
        />
      ))}
    </tbody>
  );
}
