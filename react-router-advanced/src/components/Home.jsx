// src/components/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <nav>
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/101">Blog Post 101</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

