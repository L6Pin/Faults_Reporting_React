import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage, Profile, ReportIssue } from "./pages";
import "./assets/styles/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/report" component={ReportIssue} />
      </Switch>
    </Router>
  );
}

export default App;
