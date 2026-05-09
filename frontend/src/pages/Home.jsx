import "./Home.css";

function Home() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
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