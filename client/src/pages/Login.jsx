import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import UserStore from "../store/LoginStore"

const Login = () => {
  const { loginData, setLoginState } = UserStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Please fill in all fields");
    }

    try {
      fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            return toast.error(data.error);
          }

          loginData(data);
          setLoginState(true);
          toast.success("Login successful");
        });

      setFormData({
        email: "",
        password: "",
      });

      return;
    } catch (error) {
      toast.error("An error occurred. Please try again.")
      console.error(error);
    }
  };

  return (
    <section className="auth-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email Address"
          onChange={handleInputChange}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={handleInputChange}
          value={formData.password}
        />
        <button type="submit" className="btn btn-full">
          Login
        </button>
        <p>Don&apos;t Already Have an Account? <Link to="/register" className="link">Register</Link></p>
      </form>
    </section>
  );
};

export default Login;
