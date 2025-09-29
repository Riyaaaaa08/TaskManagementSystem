import React, { useState } from "react";

type DatePickerProps = {
  label?: string;
  value?: string;
  onChange?: (date: string) => void;
  className?: string;
};

const DatePicker: React.FC<DatePickerProps> = ({
  label = "Select Date",
  value,
  onChange,
  className,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="form-group">
      <label className="text-sm font-medium mb-1">{label}</label>
      <input
        type="date"
        value={selectedDate}
        onChange={handleChange}
        className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          className ?? ""
        }`}
      />
    </div>
  );
};

export default DatePicker;
