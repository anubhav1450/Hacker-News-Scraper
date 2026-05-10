import "./Home.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  return (
    <div className="home-container">

      <nav className="navbar">

        <div className="logo">
          Hacker News
        </div>

        <div className="nav-right">

          <span className="user-name">
            Welcome, {user?.name}
          </span>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </nav>

      <div className="home-content">

        <h1>
          Top Stories
        </h1>

        <p>
          Hacker News stories will appear here.
        </p>

      </div>

    </div>
  );
}

export default Home;