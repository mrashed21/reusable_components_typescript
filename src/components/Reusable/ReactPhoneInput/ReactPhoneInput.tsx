"use client";
import { FieldError, UseFormRegister, UseFormSetValue } from "react-hook-form";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface ValidationRule {
  validate?: Record<string, (value: string) => string | boolean>;
  [key: string]: any;
}

interface ReactPhoneInputProps {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  setValue: UseFormSetValue<any>;
  phoneValue: string;
  setPhoneValue: (value: string) => void;
  placeholder?: string;
  validation?: ValidationRule;
  error?: FieldError;
}

const ReactPhoneInput: React.FC<ReactPhoneInputProps> = ({
  label,
  register,
  name,
  setValue,
  phoneValue,
  setPhoneValue,
  placeholder,
  validation,
  error,
}) => {
  const handlePhoneChange = (value: string | undefined) => {
    setPhoneValue(value || "");
    setValue(name, value || "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name}>{label}</label>

      <input
        type="hidden"
        {...register(name, {
          ...validation,
          validate: {
            ...validation?.validate,
            isValid: (value: string) => {
              if (!value) return true;
              if (!isValidPhoneNumber(value)) return "Invalid phone number";
              if (!isPossiblePhoneNumber(value))
                return "Invalid phone number format";
              return true;
            },
          },
        })}
      />

      <PhoneInput
        className="w-full rounded-md border border-gray-200 bg-white px-2 py-1 text-black focus:outline-0"
        placeholder={placeholder}
        id={name}
        value={phoneValue}
        defaultCountry="BD"
        international
        countryCallingCodeEditable={false}
        onChange={handlePhoneChange}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default ReactPhoneInput;
