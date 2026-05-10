import "./Login.css";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useState,
  useContext,
} from "react";

import axios from "axios";

import { AuthContext } from "../context/AuthContext";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    if (!email || !password) {

      setError("All fields are required");

      return;
    }

    try {

      const response = await axios.post(
        "https://hacker-news-scraper-api.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      login(
        response.data.user,
        response.data.token
      );

      navigate("/");

    } catch (error) {

      setError(error.response.data.message);

    }
  };

  const fillDemoCredentials = () => {

    setEmail("ak@gmail.com");

    setPassword("123456");
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1 className="login-heading">
          Hacker News
        </h1>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            placeholder="Enter email"
            className="login-input"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter password"
            className="login-input"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

          <button
            type="button"
            className="demo-button"
            onClick={fillDemoCredentials}
          >
            Use Demo Credentials
          </button>

          {
            error && (
              <p className="error-text">
                {error}
              </p>
            )
          }

        </form>

        <p className="login-text">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="login-link"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;