# Hacker News Scraper

A full-stack Hacker News scraper application built using the MERN stack.

This project scrapes top stories from Y Combinator's Hacker News platform, stores them in MongoDB, and allows users to bookmark stories after authentication.

Source:
[https://news.ycombinator.com/](https://news.ycombinator.com/)

---

# Features

* User Authentication (JWT)
* Register & Login System
* Protected Routes
* React Context API for Authentication State
* Web Scraping using Axios + Cheerio
* MongoDB Database Integration
* Bookmark / Unbookmark Stories
* Bookmarks Page
* Refresh Stories Feature
* Responsive UI
* Sticky Navbar
* REST API Architecture

---

# Tech Stack

## Frontend

* React
* React Router DOM
* Axios
* CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* BcryptJS
* Axios
* Cheerio

---

# Project Structure

```bash
frontend/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── App.jsx
│
└── package.json

backend/
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── app.js
│
└── server.js
```

---

# Authentication Flow

## Register

Users can create a new account using:

* Name
* Email
* Password

Password is hashed using Bcrypt before storing in MongoDB.

---

## Login

Users can log in using email and password.

After successful login:

* JWT token is generated
* Token is stored in localStorage
* User data is stored in localStorage
* User is redirected to Home page

---

## Protected Routes

Protected routes are implemented using:

* React ProtectedRoute component
* Backend JWT middleware

Users without authentication are redirected to login.

---

# Web Scraping

The application scrapes top stories from Y Combinator's Hacker News platform:

[https://news.ycombinator.com/](https://news.ycombinator.com/)

Technologies used for scraping:

* Axios → Fetch HTML
* Cheerio → Parse HTML

Scraped Data:

* Title
* URL
* Author
* Points
* Posted Time

Stories are stored in MongoDB.

---

# Bookmark Feature

Authenticated users can:

* Bookmark stories
* Remove bookmarks
* View bookmarked stories

Bookmarks are stored inside the story document using user IDs.

---

# API Endpoints

## Authentication Routes

### Register User

```bash
POST /api/auth/register
```

### Login User

```bash
POST /api/auth/login
```

---

## Story Routes

### Scrape Stories

```bash
POST /api/stories/scrape
```

### Get Stories

```bash
GET /api/stories
```

### Toggle Bookmark

```bash
POST /api/stories/:id/bookmark
```

---

# Environment Variables

Create a `.env` file inside backend:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# Installation

## Clone Repository

```bash
git clone <your-repository-url>
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Future Improvements

* Dark Mode
* Search Stories
* Pagination
* Infinite Scroll
* Better Mobile Responsiveness
* Toast Notifications
* User Profile Section

---

# Learning Outcomes

Through this project, I learned:

* JWT Authentication
* Full Stack MERN Development
* React Context API
* REST API Design
* MongoDB Relationships
* Web Scraping with Cheerio
* Frontend & Backend Integration
* Protected Routing
* State Management
* Deployment Workflow

---

# Author

Anubhav Kulshreshtha
