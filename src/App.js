import "./App.css";
import { JokeList } from "./JokeList";

function App() {
  return (
    <div className="App">
      <JokeList />
      <p style={{ color: "black" }}>
        Built by Karol Lann Vel Lace for learning purposes. Based on The Modern
        React Bootcamp Course by Colt Steele.
      </p>
    </div>
  );
}

export default App;
