import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./tost";

import { Link } from "react-router-dom";

import styles from "../assets/css/signup.module.css";

import { validate } from "./validate";

const Logiin = () => {
  const { log, divmain, formclas, formFild, formbtn } = styles;

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
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
      notify("you Login successfuly", "success");
    } else {
      notify("invalid data", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <section className={log}>
      <div className={divmain}>
        <form className={formclas} onSubmit={submitHandler}>
          <h2>Log In</h2>
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

          <div className={formbtn}>
            <Link to="/signup">Sign Up</Link>
            <button type="submit">Login</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Logiin;
