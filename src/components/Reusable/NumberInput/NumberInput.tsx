/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

// New props for validation and error
interface NumberInputProps {
  register: UseFormRegister<any>;
  name: string;
  lable?: string;
  placeholder?: string;
  classname?: string;
  validation?: Record<string, any>;
  error?: FieldError;
}

const NumberInput: React.FC<NumberInputProps> = ({
  register,
  name,
  lable,
  classname,
  placeholder,
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
        placeholder={placeholder}
        className={`border border-gray-200 rounded focus:outline-none p-2 ${classname} ${
          error ? "border-red-500" : ""
        }`}
      />
      {/* Conditionally render the error message */}
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default NumberInput;
