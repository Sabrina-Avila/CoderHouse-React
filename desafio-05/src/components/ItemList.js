import { useEffect, useState } from "react";
import Item from "./Item";

const PRODUCTOS = [
  {
    id: 1,
    title: "Alfajores",
    descripcion: "Caja de alfajores surtidos, la caja viene por 6 unidades.",
    price: 500,
    pictureUrl: "./imagenes/alf03_383x510.jpg",
  },
  {
    id: 2,
    title: "Alfajores",
    descripcion: "Brownie con mucho ducle de leche",
    price: 500,
    pictureUrl: "./imagenes/alf03_383x510.jpg",
  },
  {
    id: 3,
    title: "Alfajores",
    descripcion: "Lemon pie delicioso",
    price: 500,
    pictureUrl: "./imagenes/alf03_383x510.jpg",
  },
  {
    id: 4,
    title: "Alfajores",
    descripcion: "Torta de Frutillas",
    price: 500,
    pictureUrl: "./imagenes/alf03_383x510.jpg",
  },
];
function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(PRODUCTOS), 2000);
  });
}

function ItemList() {
  const [productos, setProductos] = useState();
  useEffect(() => {
    if (!productos) {
      getProductos().then((data) => setProductos(data));
    }
  });
  return (
    <section className="d-flex">
      {productos?.map((producto) => (
        <Item
          key={producto.id}
          title={producto.title}
          descripcion={producto.descripcion}
          price={producto.price}
          pictureUrl={producto.pictureUrl}
        />
      ))}
    </section>
  );
}

export default ItemList;
