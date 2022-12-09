import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h1> Login </h1>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username", { required: true })}
              placeholder="Username/Mobile number"
              className=" textcenter"
            />
            <input
              type="password"
              {...register("pwd", { required: true })}
              placeholder="Password"
              className=" textcenter"
            />

            {errors.username?.type === "required" && "Please enter username."}
            {errors.pwd?.type === "required" && "PLease enter Password."}

            <button className="btn">Login in</button>
          </form>

          <p className="login">SignUp here !</p>
        </div>
      </div>
    </section>
  );
}
