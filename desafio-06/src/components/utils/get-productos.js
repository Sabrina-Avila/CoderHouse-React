const PRODUCTOS = [
  {
    id: 1,
    title: "Alfajores",
    descripcion: "Caja de alfajores surtidos, la caja viene por 6 unidades.",
    price: 500,
    stock: 30,
    category: {
      name: "Merienda",
      id: 4,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
  {
    id: 2,
    title: "Brownie",
    descripcion: "Brownie con mucho ducle de leche",
    price: 500,
    stock: 30,
    category: {
      name: "Merienda",
      id: 4,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
  {
    id: 3,
    title: "Lemon Pie",
    descripcion: "Lemon pie delicioso",
    price: 500,
    stock: 30,
    category: {
      name: "Tarta",
      id: 3,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
  {
    id: 4,
    title: "Frutilla",
    descripcion: "Tarta de Frutillas",
    price: 500,
    stock: 10,
    category: {
      name: "Tarta",
      id: 3,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
  {
    id: 5,
    title: "Cookies",
    descripcion: "Las Cookies vienen en una caja de 12 unidades surtidas",
    price: 150,
    stock: 30,
    category: {
      name: "Merienda",
      id: 4,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
  {
    id: 6,
    title: "Cheescake",
    descripcion: "Torta Cheessecake frambuesa de 21 cm ",
    price: 2500,
    stock: 5,
    category: {
      name: "Torta",
      id: 2,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
  {
    id: 7,
    title: "Alfajores de Maicenas",
    descripcion: "Alfajores de Maicenas en caja de 12 unidades ",
    price: 300,
    stock: 30,
    category: {
      name: "Merienda",
      id: 4,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
  {
    id: 8,
    title: "Macarons",
    descripcion: "Caja de macarons por 6 unidades de sabor frambuesa ",
    price: 300,
    stock: 30,
    category: {
      name: "Merienda",
      id: 4,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
  {
    id: 9,
    title: "Caja Mix",
    descripcion:
      "Esta caja viene con 3 macarons con relleno de dulce de leche, 3 alfajores de tipo maicena y dos tarteletas una cheescake y otra con frutos rojos",
    price: 2000,
    stock: 20,
    category: {
      name: "Merienda",
      id: 4,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
  {
    id: 10,
    title: "Rosca de Pascua",
    descripcion:
      "Rosca de pascua (solo en epoca) rellena de crema pastelera y nutella. Deliciosa!",
    price: 1500,
    stock: 0,
    category: {
      name: "Merienda",
      id: 2,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
  {
    id: 11,
    title: "Torta",
    descripcion:
      "Este tipo de torta se puede presentar de diferentes modelos, este estilo básico con un tamaño de 20 cm",
    price: 2500,
    stock: 30,
    category: {
      name: "Torta",
      id: 2,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
  {
    id: 12,
    title: "Donas",
    descripcion: "Donas glaseadas de diferentes colores. Caja de 12 unidades",
    price: 350,
    stock: 30,
    category: {
      name: "Merienda",
      id: 4,
    },
    pictureUrl: "/imagenes/alf03_383x510.jpg",
  },
];

export function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(PRODUCTOS), 2000);
  });
}

export function getProductoById(id) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(PRODUCTOS.find((p) => parseInt(p.id, 10) === parseInt(id, 10))),
      2000
    );
  });
}
