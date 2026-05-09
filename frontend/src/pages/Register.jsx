import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">

      <div className="register-card">

        <h1 className="register-heading">
          Hacker News
        </h1>

        <form className="register-form">

          <input
            type="text"
            placeholder="Enter name"
            className="register-input"
          />

          <input
            type="email"
            placeholder="Enter email"
            className="register-input"
          />

          <input
            type="password"
            placeholder="Enter password"
            className="register-input"
          />

          <button className="register-button">
            Register
          </button>

        </form>

        <p className="register-text">
          Already have an account?{" "}
          <Link to="/login" className="register-link">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;