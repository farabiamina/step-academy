import Login from "./Login";
import {BrowserRouter as Router, Routes, Route, Link, Outlet,} from "react-router-dom";
import "./style.css";

export default function Friends({ authed, setAuthed }) {
  return authed ? (
    <section className="friends">
      <h2>Friends' page</h2>
      <div>
        <ul>
          <li>
            <Link to="Alex" className="link">
              Alex
            </Link>
          </li>
          <li>
            <Link to="John" className="link">
              John
            </Link>
          </li>
          <li>
            <Link to="Martha" className="link">
              Martha
            </Link>
          </li>
        </ul>
        <Outlet className="outlet" />
      </div>
    </section>
  ) : (
    <Login authed={authed} setAuthed={setAuthed} />
  );
}
