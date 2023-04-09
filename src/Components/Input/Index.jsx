import "./Styles.css";

const Input = ({ title, type, name, min, formFilter, handleOnChange }) => {
  return (
    <div className="comp-input__container">
      <label htmlFor={name} className="texto texto-hover">
        {title}
      </label>
      <input
        type={type}
        name={name}
        min={min}
        value={formFilter || ""}
        className="texto input__geral"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Input;
