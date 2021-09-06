import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage, Profile, Issue } from "./pages";
import "./assets/styles/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/report" component={Issue} />
        <Route path="/edit/:id" component={Issue} />
      </Switch>
    </Router>
  );
}

export default App;
