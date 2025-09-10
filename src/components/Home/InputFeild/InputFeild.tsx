"use client";

import NumberInput from "@/components/Reusable/NumberInput/NumberInput";
import PasswordInput from "@/components/Reusable/PasswordInput/PasswordInput";
import ReactPhoneInput from "@/components/Reusable/ReactPhoneInput/ReactPhoneInput";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  user_first_name: string;
  user_last_name: string;
  product_price: number;
  user_phone: string;
  user_password: string;
};

const InputField = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: {
      user_phone: "+8801781131905",
      user_first_name: "Rashed",
      user_last_name: "Jaman",
    },
  });

  const [phoneValue, setPhoneValue] = useState(getValues("user_phone"));

  const handleSubmitData = (data: Inputs): void => {
    console.log(data);
  };

  return (
    <section className="mt-20">
      <form onSubmit={handleSubmit(handleSubmitData)}>

        <TextInput
          register={register}
          name="user_first_name"
          lable="First Name"
          placeholder="Enter Your First Name"
          validation={{
            required: "First name is required.",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Invalid first name.",
            },
          }}
          error={errors.user_first_name}
        />

        <TextInput
          register={register}
          name="user_last_name"
          lable="Last Name"
          placeholder="Enter Your Last Name"
          validation={{
            required: "Last name is required.",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Invalid last name.",
            },
          }}
          error={errors.user_last_name}
        />

        <NumberInput
          register={register}
          name="product_price"
          lable="Product Price"
          placeholder="Enter Product Price"
          validation={{
            required: "Product Price is required.",
            setValueAs: (v: string) => (v === "" ? undefined : Number(v)),
            validate: (v: number) => {
              if (isNaN(v)) return "Price must be a valid number";
              if (v <= 0) return "Price must be greater than 0";
              return true;
            },
          }}
          error={errors.product_price}
        />

        {/* Phone input with real-time validation */}

        <ReactPhoneInput
          label="Phone Number"
          register={register}
          name="user_phone"
          setValue={setValue}
          phoneValue={phoneValue}
          setPhoneValue={setPhoneValue}
          placeholder="Enter Your Phone Number"
          validation={{
            required: "Phone number is required.",
          }}
          error={errors?.user_phone}
        />

        {/* Password input */}
        
        <PasswordInput
          register={register}
          name="user_password"
          lable="Password"
          validation={{
            required: "Password is required.",
            validate: {
              minLength: (v: string) =>
                v.length >= 8 || "Password must be at least 8 characters",
              hasUpper: (v: string) =>
                /[A-Z]/.test(v) || "Must contain at least 1 uppercase letter",
              hasLower: (v: string) =>
                /[a-z]/.test(v) || "Must contain at least 1 lowercase letter",
              hasNumber: (v: string) =>
                /\d/.test(v) || "Must contain at least 1 number",
              hasSpecial: (v: string) =>
                /[@$!%*?&]/.test(v) ||
                "Must contain at least 1 special character",
            },
          }}
          error={errors.user_password}
        />

        <button
          type="submit"
          className="cursor-pointer py-2 px-5 rounded border border-gray-200 mt-5"
        >
          Submit
        </button>
        
      </form>
    </section>
  );
};

export default InputField;
