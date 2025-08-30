"use client";
import InputNumber from "@/components/Reusable/InputNumber/InputNumber";
import InputPassword from "@/components/Reusable/InputPassword/InputPassword";
import InputText from "@/components/Reusable/InputText/InputText";
import { useForm } from "react-hook-form";

type Inputs = {
  user_frist_name: string;
  user_last_name: string;
  product_price: number;
  v: number;
  user_password: string;
};

const InputFeild = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });

  const handleSubmitData = (data: Inputs) => {
    console.log(data);
  };

  return (
    <section className="mt-20">
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <InputText
          register={register}
          name="user_frist_name"
          lable="First Name"
          validation={{
            required: "First name is required.",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Invalid first name.",
            },
          }}
          error={errors.user_frist_name}
        />
        <InputText
          register={register}
          name="user_last_name"
          lable="Last Name"
          validation={{
            required: "Last name is required.",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Invalid last name.",
            },
          }}
          error={errors.user_last_name}
        />

        <InputNumber
          register={register}
          name="product_price"
          lable="Product Price"
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

        {/* Password input */}
        <InputPassword
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

export default InputFeild;
