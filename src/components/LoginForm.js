import "../assets/styles/components/LoginForm.scss";
import faculty_logo from "../assets/images/faculty_logo.png";

const LoginForm = () => {
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
          <input type="text" />
        </div>
        <div className="password-container">
          <p>Password</p>
          <input type="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
