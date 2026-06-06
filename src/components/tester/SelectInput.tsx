import React, { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholder: string;
}

const SelectInput = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, ...rest }, ref) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <select ref={ref} {...rest}>
          <option value="">{placeholder}</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

SelectInput.displayName = "SelectInput"; // ✅ important for RHF
export default SelectInput;