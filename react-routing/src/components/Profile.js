import Login from "./Login";
import "./style.css";

export default function Profile({ authed, setAuthed }) {
  return authed ? (
    <section className="profile">
      <h2>Profile Page</h2>
      <div>
        <h1>Pablo</h1>
        <p>29 years old</p>
      </div>
      <img src="https://via.placeholder.com/150?text=Pablo" />
    </section>
  ) : (
    <Login authed={authed} setAuthed={setAuthed} />
  );
}
