"use client";
import InputNumber from "@/components/Reusable/InputNumber/InputNumber";
import InputText from "@/components/Reusable/InputText/InputText";
import { useForm } from "react-hook-form";

type Inputs = {
  user_frist_name: string;
  user_last_name: string;
  product_price: number;
  v: number;
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
