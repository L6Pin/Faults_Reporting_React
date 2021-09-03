import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage, Profile } from "./pages";
import "./assets/styles/App.scss"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
