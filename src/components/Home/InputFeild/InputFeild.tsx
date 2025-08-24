"use client";
import InputNumber from "@/components/Reusable/InputNumber/InputNumber";
import InputText from "@/components/Reusable/InputText/InputText";
import { useForm } from "react-hook-form";

type Inputs = {
  user_frist_name: string;
  user_last_name: string;
  product_price: number;
};

const InputFeild = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

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
            pattern: {
              value: /^(0*[1-9]\d*(\.\d+)?|0*\.\d+)$/,
              message: "Invalid Number.",
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
