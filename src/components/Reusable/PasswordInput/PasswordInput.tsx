/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { LuEyeOff } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface PasswordInputProps {
  register: UseFormRegister<any>;
  name: string;
  lable?: string;
  classname?: string;
  validation?: Record<string, any>;
  error?: FieldError;
}


const PasswordInput:  React.FC<PasswordInputProps> = ({
  register,
  name,
  lable,
  classname,
  validation,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col space-y-1 relative">
      <label htmlFor={name}>{lable}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          {...register(name, validation)}
          id={name}
          className={`border border-gray-200 rounded focus:outline-none p-2 pr-10 w-full ${classname} ${
            error ? "border-red-500" : ""
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        >
          {showPassword ? (
            <LuEyeOff size={18} />
          ) : (
            <MdOutlineRemoveRedEye size={18} />
          )}
        </button>
      </div>

      {/* Show each password rule separately */}
      {error && error.types && (
        <ul className="text-red-500 text-sm space-y-1 list-disc list-inside">
          {Object.values(error.types).map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      )}

      {/* Fallback single error message */}
      {error && !error.types && (
        <span className="text-red-500 text-sm">{error.message}</span>
      )}
    </div>
  );
};

export default PasswordInput;
