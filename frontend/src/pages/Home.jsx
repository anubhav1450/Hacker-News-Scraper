import "./Home.css";

import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import axios from "axios";

function Home() {

  const { user, logout } = useContext(AuthContext);

  const [stories, setStories] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  const fetchStories = async () => {

    try {

      const response = await axios.get(
        "http://localhost:3000/api/stories"
      );

      setStories(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const handleRefresh = async () => {

    try {

      setLoading(true);

      await axios.post(
        "http://localhost:3000/api/stories/scrape"
      );

      await fetchStories();

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  const handleBookmark = async (storyId) => {

    const token = localStorage.getItem("token");

    if (!token) {

      navigate("/login");

      return;
    }

    try {

      await axios.post(
        `http://localhost:3000/api/stories/${storyId}/bookmark`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchStories();

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchStories();

  }, []);

  return (
    <div className="home-container">

      <nav className="navbar">

        <div className="logo">
          Hacker News
        </div>

        <div className="nav-right">

          {
            user ? (
              <>

                <Link
                  to="/bookmarks"
                  className="bookmark-nav-link"
                >
                  Bookmarks
                </Link>

                <span className="user-name">
                  Welcome, {user?.name}
                </span>

                <button
                  className="logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>

              </>
            ) : (
              <>

                <Link
                  to="/login"
                  className="bookmark-nav-link"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bookmark-nav-link"
                >
                  Register
                </Link>

              </>
            )
          }

        </div>

      </nav>

      <div className="home-content">

        <div className="top-bar">

          <h1>
            Top Stories
          </h1>

          <button
            className="refresh-button"
            onClick={handleRefresh}
          >
            {
              loading
                ? "Refreshing..."
                : "Refresh Stories"
            }
          </button>

        </div>

        <div className="stories-container">

          {
            stories.map((story) => (

              <div
                className="story-card"
                key={story._id}
              >

                <a
                  href={story.url}
                  target="_blank"
                  rel="noreferrer"
                  className="story-title"
                >
                  {story.title}
                </a>

                <p>
                  Author: {story.author}
                </p>

                <p>
                  Points: {story.points}
                </p>

                <p>
                  Posted: {story.postedAt}
                </p>

                <button
                  className={
                    story.bookmarks?.includes(user?.id)
                      ? "bookmark-button active-bookmark"
                      : "bookmark-button"
                  }
                  onClick={() =>
                    handleBookmark(story._id)
                  }
                >
                  {
                    story.bookmarks?.includes(user?.id)
                      ? "Bookmarked"
                      : "Bookmark"
                  }
                </button>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Home;