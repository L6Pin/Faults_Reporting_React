import "../assets/styles/components/LoginForm.scss";
import faculty_logo from "../assets/images/faculty_logo.png";
import { useEffect, useState } from "react";
import { userLogin } from "../redux/actions/loginUserAction";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Loader } from "../components";

const LoginForm = ({ userData, userLogin }) => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [viewLoader, setViewLoader] = useState(false);
  const [helloMessage, setHelloMessage] = useState("");

  useEffect(() => greetingMessage(), []);

  let greetingMessage = () => {
    let date = new Date();
    let currentHour = date.getHours();
    if (currentHour >= 0 && currentHour <= 11) setHelloMessage("Good Morning!");
    else if (currentHour >= 12 && currentHour <= 17)
      setHelloMessage("Good Afternoon!");
    else setHelloMessage("Good Evening!");
  };

  let userLoginObject = {
    email: email,
    password: password,
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setViewLoader(true);
    userLogin(userLoginObject);
  };
  if (userData) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <>
        {viewLoader && <Loader />}
        <div className="loginForm">
          <div className="faculty-banner">
            <img src={faculty_logo} alt="" className="faculty-logo" />
            <div className="faculty-name-container">
              <p>University of Kragujevac</p>
              <p>Faculty of Technical Sciences Cacak</p>
            </div>
          </div>
          <p className="greeting-message">{helloMessage}</p>
          <form action="" onSubmit={handleSubmit}>
            <div className="email-container">
              <p>Email</p>
              <input
                type="text"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password-container">
              <p>Password</p>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      </>
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
