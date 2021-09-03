import "../assets/styles/pages/Profile.scss";
import { Problem } from "../components";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="problem-controls">
          <div className="user">
            <div className="user-container">
              <i class="fas fa-user-circle "></i>
              <div className="user-name-container">
                <p>Luka Peric</p>
                <p>University staff</p>
              </div>
            </div>
            <i class="fas fa-sign-out-alt"></i>
          </div>
          <div className="filters">
            <div className="search-container">
              <input type="text" className="search" placeholder="🔎 Search" />
            </div>
            <p className="filter-title">Issue Filters</p>
            <div className="filter">
              <p className="filter-name">Status</p>
              <select name="" id="" className="filter-options">
                <option value="">Opcija 1</option>
              </select>
              <div className="filter-arrow"></div>
            </div>
            <div className="filter">
              <p className="filter-name">Priority</p>
              <select name="" id="" className="filter-options">
                <option value="">Opcija 1</option>
              </select>
              <div className="filter-arrow"></div>
            </div>
            <div className="filter">
              <p className="filter-name">Sort</p>
              <select name="" id="" className="filter-options">
                <option value="">Opcija 1</option>
              </select>
              <div className="filter-arrow"></div>
            </div>
          </div>
          <p className="report-button">Report issue</p>
        </div>
        <div className="problems">
          <div className="problems-container">
            <Problem />
            <Problem />
            <Problem />
            <Problem />
            <Problem />
            <Problem />
            <Problem />
            <Problem />
            <Problem />
            <Problem />
            <Problem />
            <Problem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
