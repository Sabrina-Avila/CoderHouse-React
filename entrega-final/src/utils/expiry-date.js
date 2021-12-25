// Transforma un string al formato esperado por
// el componente de la tarjeta.
export function formatToExpiry(str = "") {
  return str.slice(2, 7).replace("-", "/");
}
