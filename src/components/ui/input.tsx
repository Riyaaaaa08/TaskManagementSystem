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

/*interface InputProps {
  label: string;
  placeholder: string;
  isPassword?: boolean | "text";
}

export default function TextInput(props: InputProps) {
  const { label, placeholder, isPassword } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
      />
    </div>
  );
}

interface InputProps {
  label: string;
  options: string[];
  placeholder: string;
}
export default function SelectInput({ label, options }: InputProps) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}*/
