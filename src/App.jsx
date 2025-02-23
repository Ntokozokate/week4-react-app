import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Week 3 Homework</h1>
      <Weather city="Gweru" />
      <h1 style={{ fontSize: "12px" }}>
        This project was coded by{" "}
        <a href="https://github.com/Ntokozokate/week4-react-app">Ntokozo</a>
      </h1>
    </div>
  );
}
