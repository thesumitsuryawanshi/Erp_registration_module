import React, { useState } from "react";
import art from "../../assets/art.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log();

  const [input, setInput] = useState({
    username: "",
    pwd: "",
    confirmpwd: "",
    mobileno: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    const newUser = {
      Username: input.username,
      pwd: input.pwd,
      confirmpwd: input.confirmpwd,
      mobileno: input.mobileno,
    };
    // console.log(input);
    console.log("this is new", newUser);

    axios.post("http://localhost:3001/create", newUser);
  }

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h1> SIGN IN </h1>
          <span>register and enjoy the Service</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username", { required: true })}
              placeholder="Username"
              className=" textcenter"
              onChange={handleChange}
              name="username"
            />
            <input
              type="password"
              {...register("pwd", { required: true })}
              placeholder="Password"
              className=" textcenter"
              onChange={handleChange}
              name="pwd"
            />
            <input
              type="password"
              {...register("confirmpwd", { required: true })}
              placeholder="Re-Enter Password"
              className=" textcenter"
              onChange={handleChange}
              name="confirmpwd"
            />
            <input
              type="integer"
              {...register("mobileno", { required: true })}
              placeholder="Mobile Number"
              className=" textcenter"
              onChange={handleChange}
              name="mobileno"
            />

            {errors.mobileno?.type === "required" &&
              "Mobile number is required."}
            {errors.username?.type === "required" && "Please enter username."}
            {errors.pwd?.type === "required" && "Please enter Password."}
            {errors.confirmpwd?.type === "required" &&
              "Please Re-enter Password."}
            {errors.confirmpwd?.type === "required" &&
              "Mobile number is required."}

            <button className="btn" onClick={handleClick}>
              <NavLink to="/dashboard">Sign in</NavLink>
            </button>
          </form>
        </div>

        <div className="col-2">
          <img src={art} alt="Ouroborus.jpg" />
        </div>
      </div>
    </section>
  );
}
