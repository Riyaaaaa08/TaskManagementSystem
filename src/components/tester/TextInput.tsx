import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  isPassword?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, isPassword, ...rest }, ref) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          ref={ref}
          type={isPassword ? "password" : "text"}
          placeholder={placeholder}
          {...rest} // <- passes register props (onChange, value, etc.)
        />
      </div>
    );
  }
);

TextInput.displayName = "TextInput"; // ✅ important for RHF
export default TextInput;
