function Input({ attributes, className, label, name, helpText }) {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={`form-control ${className ?? ""}`.trim()}
        name={name}
        {...attributes}
      />
      {helpText && <small className="form-text text-muted">{helpText}</small>}
    </div>
  );
}

export default Input;
