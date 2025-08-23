"use client";
import InputText from "@/components/Reusable/InputText/InputText";
import { useForm } from "react-hook-form";

type Inputs = {
  user_frist_name: string;
  user_last_name: string;
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
    <div className="mt-20">
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputFeild;