import "../assets/styles/components/LoginForm.scss";
import faculty_logo from "../assets/images/faculty_logo.png";
import { useState } from "react";
import { userLogin } from "../redux/actions/loginUserAction";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const LoginForm = ({ userData, userLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let userLoginObject = {
    email: email,
    password: password,
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    userLogin(userLoginObject);
  };
  if (userData) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <div className="loginForm">
        <div className="faculty-banner">
          <img src={faculty_logo} alt="" className="faculty-logo" />
          <div className="faculty-name-container">
            <p>University of Kragujevac</p>
            <p>Faculty of Technical Sciences Cacak</p>
          </div>
        </div>
        <p className="greeting-message">Good Afternoon!</p>
        <form action="">
          <div className="email-container">
            <p>Email</p>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="password-container">
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    userData: state.loginUserReducer,
  };
}

const mapDispatchToProps = {
  userLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
