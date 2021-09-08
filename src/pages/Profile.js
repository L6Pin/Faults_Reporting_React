import "../assets/styles/pages/Profile.scss";
import { Problem, ProblemForm } from "../components";
import { Link } from "react-router-dom";
import {
  getAllProblems,
  allProblemsSortByNewest,
  allProblemsSortByOldest,
} from "../redux/actions/getAllProblemsActions.js";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { singleProblemReset } from "../redux/actions/singleProblemAction.js";
import { userLogout } from "../redux/actions/loginUserAction";
import { useHistory } from "react-router";

const Profile = ({
  allProblems,
  getAllProblems,
  singleProblemReset,
  allProblemsSortByNewest,
  allProblemsSortByOldest,
  userData,
  userLogout,
}) => {
  useEffect(() => {
    getAllProblems();
    singleProblemReset();
  }, [getAllProblems]);

  const history = useHistory();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [sort, setSort] = useState("1");

  let searchFilter = (issueName, search) => {
    return issueName.toLowerCase().includes(search.toLowerCase());
  };

  let statusFilter = (status_id, status) => {
    if (status === "") {
      return true;
    } else {
      if (status_id === parseInt(status)) {
        return true;
      }
    }
  };

  let priorityFilter = (priority_id, priority) => {
    if (priority === "") {
      return true;
    } else {
      if (priority_id === parseInt(priority)) {
        return true;
      }
    }
  };

  let checkUser = (issue) => {
    if (userData.is_admin) {
      return true;
    } else {
      if (issue.assigned_to_id === userData.id) {
        return true;
      }
    }
  };

  let handleSort = (sortValue) =>
    sortValue === "1"
      ? allProblemsSortByNewest()
      : sortValue === "2"
      ? allProblemsSortByOldest()
      : "";

  let handleLogout = () => {
    userLogout();
    history.push("/");
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="problem-controls">
          <div className="user">
            <div className="user-container">
              <i class="fas fa-user-circle "></i>
              <div className="user-name-container">
                <p>{`${userData.first_name} ${userData.last_name}`}</p>
                <p>University staff</p>
              </div>
            </div>
            <div className="logout" onClick={handleLogout}>
              <i class="fas fa-sign-out-alt"></i>
            </div>
          </div>
          <div className="filters">
            <div className="search-container">
              <input
                type="text"
                className="search"
                placeholder="🔎 Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <p className="filter-title">Issue Filters</p>
            <div className="filter">
              <p className="filter-name">Status</p>
              <select
                name=""
                id=""
                className="filter-options"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value=""></option>
                <option value="1">Reported</option>
                <option value="2">In process</option>
                <option value="3">Resolved</option>
              </select>
              <div className="filter-arrow"></div>
            </div>
            <div className="filter">
              <p className="filter-name">Priority</p>
              <select
                name=""
                id=""
                className="filter-options"
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value=""></option>
                <option value="3">Low</option>
                <option value="2">Medium</option>
                <option value="1">High</option>
              </select>
              <div className="filter-arrow"></div>
            </div>
            <div className="filter">
              <p className="filter-name">Sort</p>
              <select
                name=""
                id=""
                className="filter-options"
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  handleSort(sort);
                }}
              >
                <option value="1">Newest first</option>
                <option value="2">Oldest first</option>
              </select>
              <div className="filter-arrow"></div>
            </div>
          </div>
          <Link to="/report">
            <p className="report-button">Report issue</p>
          </Link>
        </div>
        <div className="problems">
          <div className="problems-container">
            {allProblems.map((issue) => {
              if (searchFilter(issue.problem_name, search)) {
                if (priorityFilter(issue.priority_id, priority)) {
                  if (statusFilter(issue.status_id, status)) {
                    if (checkUser(issue)) {
                      return (
                        <Link to={`/edit/${issue.id}`}>
                          <Problem issue={issue} />
                        </Link>
                      );
                    }
                  }
                }
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    allProblems: state.getAllProblemsReducer,
    userData: state.loginUserReducer,
  };
}

const mapDispatchToProps = {
  getAllProblems,
  singleProblemReset,
  allProblemsSortByNewest,
  allProblemsSortByOldest,
  userLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
