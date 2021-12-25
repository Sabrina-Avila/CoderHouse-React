function Button({
  attributes,
  children,
  className,
  disabled,
  icon,
  loading,
  onClick,
  size,
  type,
}) {
  return (
    <button
      className={`btn btn-${type} btn-${size} ${className ?? ""}`.trim()}
      onClick={onClick}
      disabled={disabled || loading}
      {...attributes}
    >
      {loading && <div className="spinner-border text-light" role="status" />}
      {icon && !loading && (
        <i className={`bi bi-${icon} ${children ? "bi-margin" : ""}`} />
      )}
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "md",
  type: "primary",
};

export default Button;
