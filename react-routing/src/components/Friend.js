import "./style.css";

export default function Friend({ name, age, country, img }) {
  return (
    <section className="friend">
      <img src={img} />
      <p><b>{name}</b></p>
      <p><b>Age: </b>{age}</p>
      <p><b>Country: </b>{country}</p>
    </section>
  );
}