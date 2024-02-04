import React, { useState } from "react";
import "../Style/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  const signin = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    console.log(email, password);
    await axios.post("http://localhost:3020/login", { email, password }).then((res) => {
      navigate("/choose");
    });
  };
  
  return (
    <div className="login">
      <div className="Choose_top">
        <img
          className="Choose_Ellipse_login"
          src="/images/Ellipse_login.png"
          alt="Ellipse_login"
        />
        <img
          className="Choose_TripTracks"
          src="/images/TripTracks.png"
          alt="TripTracks"
        />
      </div>
      <div className="login_main">
        <h1 className="login_main_title">Welcome back!!</h1>
        <p className="login_main_qu1">Email</p>
        <input
          className="login_main_ans1"
          type="email"
          name="email"
          placeholder="Username@gmail.com"
          value={form.email}
          onChange={handleChange}
          required
        />
        <p className="login_main_qu2">Password</p>
        <input
          className="login_main_ans2"
          type="password"
          name="password"
          value={form.password}
          placeholder="****************"
          onChange={handleChange}
          required
        />
        <button
          onClick={(e) => {
            signin(e);
          }}
          className="login_button"
        >
          Continue
        </button>
        <p className="login_main_sub">
          Don't Have an account?
          <a href="/" className="login_main_sub_link">
            Sign Up→
          </a>
        </p>
      </div>
    </div>
  );
}
export default Login;
