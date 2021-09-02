import "../assets/styles/pages/LoginPage.scss";
import { LoginForm } from "../components";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="loginPage-container">
        <div className="form-container">
          <LoginForm />
        </div>
        <div className="login-form-image"></div>
      </div>
    </div>
  );
};

export default LoginPage;
