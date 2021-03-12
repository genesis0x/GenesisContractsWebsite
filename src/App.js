import "./styles.css";
import { Platforms } from "./Platforms";
import background from "./images/gc_background.png";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat"
      }}
    >
      <h1>Genesis Contracts</h1>
      <h2>Smart Contract - Platform Comparison 4</h2>
      <Welcome name="Chris Pelling" />
      <Platforms />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
