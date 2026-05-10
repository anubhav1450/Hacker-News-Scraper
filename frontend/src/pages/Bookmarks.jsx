import "./Home.css";

import {
  useContext,
  useEffect,
  useState,
} from "react";

import { AuthContext } from "../context/AuthContext";

import axios from "axios";

function Bookmarks() {

  const { user } = useContext(AuthContext);

  const [stories, setStories] = useState([]);

  const fetchStories = async () => {

    try {

      const response = await axios.get(
        "https://hacker-news-scraper-api.onrender.com/api/stories"
      );

      const bookmarkedStories =
        response.data.filter((story) =>
          story.bookmarks?.includes(user.id)
        );

      setStories(bookmarkedStories);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchStories();

  }, []);

  return (
    <div className="home-container">

      <div className="home-content">

        <h1>
          Bookmarked Stories
        </h1>

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

              </div>
            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Bookmarks;