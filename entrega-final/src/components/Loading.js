import "./Loading.scss";

function Loading({ classes }) {
  return (
    <div className={`d-flex align-items-center ${classes || ""}`.trimEnd()}>
      <div className="loading-spinner"></div>
      <h1 className="mb-0">Cargando</h1>
    </div>
  );
}

export default Loading;
