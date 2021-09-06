import "../assets/styles/components/ProblemForm.scss";
import * as problemsApi from "../api/problems";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";

const ProblemForm = ({ userData }) => {
  let location = useLocation();
  let history = useHistory();
  let newProblemObject = {};

  const [users, setUsers] = useState([]);
  useEffect(() => {
    problemsApi.getAllUsers().then((response) => setUsers(response));
  }, []);

  const [problemName, setProblemName] = useState("");
  const [room, setRoom] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");

  newProblemObject = {
    problem_name: problemName,
    description: description,
    room: room,
    comment: "comment",
    status_id: parseInt(status),
    priority_id: parseInt(priority),
    category_id: parseInt(category),
    creator_id: userData.id,
    user_id: parseInt(userId),
  };

  let handleReportProblem = (e) => {
    e.preventDefault();
    problemsApi
      .problemPost(newProblemObject)
      .then(() => alert("Issue reported"))
      .then(() => history.push("/profile"));
  };

  return (
    <div className="problem-form">
      {location.pathname === "/report" && (
        <p className="problem-form-title">Report issue</p>
      )}
      {location.pathname === "/edit" && (
        <p className="problem-form-title">Edit issue</p>
      )}

      <form action="" onSubmit={handleReportProblem}>
        <div className="input">
          <p className="input-title">Problem name</p>
          <input
            type="text"
            required
            onChange={(e) => setProblemName(e.target.value)}
          />
        </div>

        <div className="input">
          <p className="input-title">Room</p>
          <input
            type="text"
            required
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>

        <div className="filter">
          <p className="filter-name">Category</p>
          <select
            name=""
            id=""
            className="filter-options"
            required
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""></option>
            <option value="1">Water</option>
            <option value="2">Electricity </option>
            <option value="3">IT</option>
            <option value="4">Other</option>
          </select>
          <div className="filter-arrow"></div>
        </div>

        {userData.is_admin && (
          <div className="filter">
            <p className="filter-name">Status</p>
            <select
              name=""
              id=""
              className="filter-options"
              required
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value=""></option>
              <option value="1">Reported</option>
              <option value="2">In process</option>
              <option value="3">Resolved</option>
            </select>
            <div className="filter-arrow"></div>
          </div>
        )}

        {userData.is_admin && (
          <div className="filter">
            <p className="filter-name">Priority</p>
            <select
              name=""
              id=""
              className="filter-options"
              required
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value=""></option>
              <option value="3">Low</option>
              <option value="2">Medium</option>
              <option value="1">High</option>
            </select>
            <div className="filter-arrow"></div>
          </div>
        )}

        {userData.is_admin && (
          <div className="filter">
            <p className="filter-name">Asign to</p>
            <select
              name=""
              id=""
              className="filter-options"
              required
              onChange={(e) => setUserId(e.target.value)}
            >
              <option value=""></option>
              {users.map((user) => (
                <option
                  value={user.id}
                >{`${user.first_name} ${user.last_name}`}</option>
              ))}
            </select>
            <div className="filter-arrow"></div>
          </div>
        )}

        <div className="textarea">
          <p className="textarea-title">Description</p>
          <textarea
            cols="30"
            rows="10"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="report-container">
          {location.pathname === "/report" && (
            <button className="report add">Report</button>
          )}

          {location.pathname === "/edit" && (
            <>
              <button className="report edit">Edit</button>
              <button className="report delete">Delete</button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userData: state.loginUserReducer,
  };
}

export default connect(mapStateToProps)(ProblemForm);
