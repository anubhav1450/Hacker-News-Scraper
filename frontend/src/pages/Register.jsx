import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

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

      console.log(error.response.data);

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
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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