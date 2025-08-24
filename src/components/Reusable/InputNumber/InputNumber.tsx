import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

// New props for validation and error
interface InputNumberProps {
  register: UseFormRegister<any>;
  name: string;
  lable?: string;
  classname?: string;
  validation?: Record<string, any>;
  error?: FieldError;
}

const InputNumber: React.FC<InputNumberProps> = ({
  register,
  name,
  lable,
  classname,
  validation,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name}>{lable}</label>
      <input
        {...register(name, {
          valueAsNumber: true,
          ...validation,
        })}
        id={name}
        className={`border border-gray-200 rounded focus:outline-none p-2 ${classname} ${
          error ? "border-red-500" : ""
        }`}
      />
      {/* Conditionally render the error message */}
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default InputNumber;
