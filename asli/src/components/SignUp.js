import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./tost";

import styles from "../assets/css/signup.module.css";

import { validate } from "./validate";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { log, divmain, formclas, formFild, formbtn } = styles;

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({
        ...data,
        [event.target.name]: event.target.checked,
      });
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
  };
  const focusHandler = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("you signed successfuly", "success");
    } else {
      notify("invalid data", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <section className={log}>
      <div className={divmain}>
        <form className={formclas} onSubmit={submitHandler}>
          <h2>Sign Up</h2>
          <div className={formFild}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
          </div>
          <div className={formFild}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>
          <div className={formFild}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}
          </div>
          <div className={formFild}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span>{errors.confirmPassword}</span>
            )}
          </div>
          <div>
            <label>I Accept term of privacy policy.</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.isAccepted && touched.isAccepted && (
              <span>{errors.isAccepted}</span>
            )}
          </div>
          <div className={formbtn}>
            <Link to="/login">Log in</Link>
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default SignUp;
