import "./Register.css";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import axios from "axios";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    if (!name || !email || !password) {

      setError("All fields are required");

      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      setError("Invalid email format");

      return;
    }

    if (password.length < 6) {

      setError(
        "Password must be at least 6 characters"
      );

      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log(response.data);

      navigate("/login");

    } catch (error) {

      setError(error.response.data.message);

    }
  };

  return (
    <div className="register-container">

      <div className="register-card">

        <h1 className="register-heading">
          Hacker News
        </h1>

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Enter name"
            className="register-input"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Enter email"
            className="register-input"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter password"
            className="register-input"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="register-button"
          >
            Register
          </button>

          {
            error && (
              <p className="error-text">
                {error}
              </p>
            )
          }

        </form>

        <p className="register-text">

          Already have an account?{" "}

          <Link
            to="/login"
            className="register-link"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;