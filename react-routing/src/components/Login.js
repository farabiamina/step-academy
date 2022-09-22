import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Login({ authed, setAuthed }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [correct, setCorrect] = useState(true);
  const navigate = useNavigate();

  function onSubmit() {
    if (login === "Pablo" && password === "qwerty") {
      setAuthed(true);
      navigate("/");
    } else {
      setCorrect(false);
    }
  }
  return (
    <section className="login">
      <form>
        <h1>Login Page</h1>
        <span className="form-text">User</span>
        <input
          value={login}
          type="text"
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <span className="form-text">Password</span>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </form>
      {!correct && <p className="warning">Username or password is not correct</p>}
    </section>
  );
}
