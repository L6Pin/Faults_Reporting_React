import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./pages";
import "./assets/styles/App.scss"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
