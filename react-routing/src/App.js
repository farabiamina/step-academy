import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Home from "./components/Home";
import Friends from "./components/Friends";
import Friend from "./components/Friend";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [authed, setAuthed] = useState(false);
  const navigate = useNavigate();

  function logout() {
    setAuthed(false);
    navigate("/");
  }

  return (
    <section>
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/profile" className="link">Profile</Link>
        <Link to="/friends" className="link">Friends</Link>
        {!authed && (
          <Link to="/login" className="link">
            Login
          </Link>
        )}
        {authed && (
          <a onClick={logout} className="link">
            Logout
          </a>
        )}
      </nav>
      <Routes>
        <Route
          path="/profile"
          element={
            <Profile authed={authed} setAuthed={setAuthed} name="Pablo" />
          }
        />
        <Route
          path="/login"
          element={<Login authed={authed} setAuthed={setAuthed} />}
        />
        <Route
          path="/friends"
          element={<Friends authed={authed} setAuthed={setAuthed} />}
        >
          <Route
            path="Alex"
            element={<Friend
              name="Alex"
              age="35"
              country="USA"
              img="https://via.placeholder.com/350x150?text=Alex"
            />}
          />
          <Route
            path="John"
            element={<Friend
              name="John"
              age="21"
              country="Netherlands"
              img="https://via.placeholder.com/350x150?text=John"
            />}
          />
          <Route
            path="Martha"
            element={
              <Friend 
                name="Martha"
                age="25"
                country="UK"
                img="https://via.placeholder.com/350x150?text=Martha"
              />
            }
          />
        </Route>
        <Route path="/" element={<Home authed={authed} />} />
      </Routes>
    </section>
  );
}

export default App;
