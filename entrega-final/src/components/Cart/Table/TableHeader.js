export default function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map(({ name, classes }, index) => (
          <th key={index} className={classes}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
}
