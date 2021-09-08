import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage, Profile, Issue, RouteGuard } from "./pages";
import "./assets/styles/App.scss";
import { connect } from "react-redux";

function App(userData) {
  let route = (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="*" component={RouteGuard} />
    </Switch>
  );

  if (userData) {
    route = (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/report" component={Issue} />
        <Route path="/edit/:id" component={Issue} />
        <Route path="*" component={RouteGuard} />
      </Switch>
    );
  }

  return <Router>{route}</Router>;
}

function mapStateToProps(state) {
  return {
    userData: state.loginUserReducer,
  };
}

export default connect(mapStateToProps)(App);
