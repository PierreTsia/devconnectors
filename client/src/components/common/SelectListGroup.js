import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListGroup = ({
  name,
  options,
  value,
  error,
  info,
  onChange,
  placeholder,
}) => {
  const selectOptions = options.map(option => {
    return (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    );
  });
  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      >
        {" "}
        <option value="" disabled defaultValue hidden>
          {placeholder}
        </option>
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
};

export default SelectListGroup;
