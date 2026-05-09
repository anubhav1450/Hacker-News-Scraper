import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/");

    } catch (error) {

      console.log(error.response.data);

    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1 className="login-heading">
          Hacker News
        </h1>

        <form className="login-form" onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <p className="login-text">
          Don't have an account?{" "}
          <Link to="/register" className="login-link">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;