import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

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
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Please fill in all fields");
    }

    if(formData.password.length < 8) {
      return toast.error("Password must be at least 8 characters long");
    }

    try {
      fetch("/api/auth/register", {
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

          toast.success("Registration successful");
          navigate("/");
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
  }
  
  return (
    <section className="auth-container">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
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
          Register
        </button>
        <p>Already Have an Account? <Link to="/" className="link">Login</Link></p>
      </form>
    </section>
  )
}

export default Register