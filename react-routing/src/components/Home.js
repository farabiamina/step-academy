import "./style.css";

export default function Home({ authed }) {
  return authed ? (
    <section className="home">
      <h2>Welcome to the homepage!</h2>
      <h1>You have successfully authed in your account!</h1>
      <h1>You can now enter your pages</h1>
    </section>
  ) : (
    <section className="home">
      <h2>Welcome to the homepage!</h2>
      <h1>You are not authed! Please login in to the system</h1>
    </section>
  );
}
