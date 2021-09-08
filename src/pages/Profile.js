import "../assets/styles/pages/Profile.scss";
import { Problem, Loader } from "../components";
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
import { getAllUsers } from "../redux/actions/getAllUsersAction";

const Profile = ({
  allProblems,
  getAllProblems,
  singleProblemReset,
  allProblemsSortByNewest,
  allProblemsSortByOldest,
  userData,
  userLogout,
  getAllUsers,
  allUsers,
}) => {
  useEffect(() => {
    getAllProblems();
    getAllUsers();
    singleProblemReset();
  }, [getAllProblems, singleProblemReset, getAllUsers]);

  const history = useHistory();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [sort, setSort] = useState("1");
  const [user, setUser] = useState("");
  const [expandFilters, setExpandFilters] = useState(false);

  let searchFilter = (issue, search) => {
    let problemInfo =
      issue.problem_name + issue.assigned_to + issue.description;
    return problemInfo.toLowerCase().includes(search.toLowerCase());
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

  let userFilter = (assigned_to_id, user) => {
    if (user === "") {
      return true;
    } else {
      if (assigned_to_id === parseInt(user)) {
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

  let handleOpenFilters = () => {
    if (expandFilters) {
      if (userData.is_admin) {
        return "problem-controls problem-controls-admin";
      } else {
        return "problem-controls problem-controls-user";
      }
    }
  };

  return (
    <>
      {allProblems.length <= 0 && <Loader />}
      <div className="profile">
        <div className="profile-container">
          <div
            className={expandFilters ? handleOpenFilters() : "problem-controls"}
          >
            <div className="user">
              <div className="user-container">
                <i class="fas fa-user-circle "></i>
                <div className="user-name-container">
                  <p>{`${userData.first_name} ${userData.last_name}`}</p>
                  <p>University staff</p>
                </div>
              </div>

              <div className="controls-buttons">
                <Link to="/report">
                  <div className="report-button-mobile">
                    <i class="fas fa-plus"></i>
                  </div>
                </Link>
                <div
                  className={
                    expandFilters
                      ? "filter-button filter-button-open"
                      : "filter-button "
                  }
                  onClick={() => setExpandFilters(!expandFilters)}
                >
                  <i class="fas fa-filter"></i>
                </div>
                <div className="logout" onClick={handleLogout}>
                  <i class="fas fa-sign-out-alt"></i>
                </div>
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
              {userData.is_admin && (
                <div className="filter">
                  <p className="filter-name">User</p>
                  <select
                    name=""
                    id=""
                    className="filter-options"
                    onChange={(e) => setUser(e.target.value)}
                  >
                    <option value=""></option>
                    {allUsers.map((user) => (
                      <option
                        value={user.id}
                      >{`${user.first_name} ${user.last_name}`}</option>
                    ))}
                  </select>
                  <div className="filter-arrow"></div>
                </div>
              )}
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
            </div>
            <Link to="/report">
              <p className="report-button">Report issue</p>
            </Link>
          </div>
          <div className="problems">
            <div className="problems-container">
              {allProblems.map((issue) => {
                if (searchFilter(issue, search)) {
                  if (priorityFilter(issue.priority_id, priority)) {
                    if (statusFilter(issue.status_id, status)) {
                      if (checkUser(issue)) {
                        if (userFilter(issue.assigned_to_id, user)) {
                          return (
                            <Link to={`/edit/${issue.id}`}>
                              <Problem issue={issue} />
                            </Link>
                          );
                        }
                      }
                    }
                  }
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    allProblems: state.getAllProblemsReducer,
    userData: state.loginUserReducer,
    allUsers: state.getAllUsersReducer,
  };
}

const mapDispatchToProps = {
  getAllProblems,
  singleProblemReset,
  allProblemsSortByNewest,
  allProblemsSortByOldest,
  userLogout,
  getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
