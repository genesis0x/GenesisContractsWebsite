import "./styles.css";
import { Platforms } from "./Platforms";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Genesis Contracts</h1>
      <h2>Smart Contract - Platform Comparison 4</h2>
      <Welcome name="Chris Pelling" />
      <Platforms />
    </div>
  );
}
