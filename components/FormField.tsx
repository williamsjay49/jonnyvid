import React from "react";

const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {as === "textarea" ? (
        <textarea
          placeholder={placeholder}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
        />
      ) : as === "select" ? (
        <select id={id} name={id} value={value} onChange={onChange}>
          {options.map(({ label, value }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))}
        </select>
      ) : (
        <input
          placeholder={placeholder}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
