import "./styles.css";
import { PlatformGrid } from "./PlatformGrid";
import { PlatformDetails } from "./PlatformDetails";
import { Button } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function HomeButton() {
  let history = useHistory();

  function handleClick(data) {
    history.push("/");
  }

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={(data) => handleClick("message data")}
    >
      Home
    </Button>
  );
}

export default function App() {
  return (
    <div className="App">
      <HomeButton />
      <h1>Genesis Contracts</h1>
      <h2>Smart Contract - Platform Comparison 4</h2>
      <Welcome name="Chris Pelling" />
      <Switch>
        <Route path="/platform">
          <PlatformDetails />
        </Route>
        <Route path="/">
          <PlatformGrid />
        </Route>
      </Switch>
    </div>
  );
}
