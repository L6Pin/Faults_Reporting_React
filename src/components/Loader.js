import loader from "../assets/images/loader.gif";
import "../assets/styles/components/Loader.scss";

const Loader = () => (
  <div className="loader-page">
    <div className="loader-container">
      <img src={loader} alt="" className="loader" />
    </div>
  </div>
);

export default Loader;
