import "../assets/styles/components/ProblemForm.scss";
import * as problemsApi from "../api/problems";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleProblem } from "../redux/actions/singleProblemAction";
import { Loader } from "../components";
import { getAllUsers } from "../redux/actions/getAllUsersAction";

const ProblemForm = ({
  userData,
  singleProblem,
  getSingleProblem,
  allUsers,
  getAllUsers,
}) => {
  let location = useLocation();
  let history = useHistory();
  let newProblemObject = {};
  let urlParams = useParams();

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  useEffect(() => {
    if (location.pathname.includes("/edit")) {
      getSingleProblem(urlParams.id);
    }
  }, [getSingleProblem, location.pathname, urlParams.id]);

  useEffect(() => {
    setProblemName(singleProblem?.problem_name);
    setRoom(singleProblem?.room);
    setCategory(singleProblem?.category_id);
    setStatus(singleProblem?.status_id);
    setPriority(singleProblem?.priority_id);
    setDescription(singleProblem?.description);
    setUserId(singleProblem?.assigned_to_id);
  }, [singleProblem]);

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
    comment: "comment", //The comment feature was not included in this project
    status_id: parseInt(status),
    priority_id: parseInt(priority),
    category_id: parseInt(category),
    creator_id: userData.id,
    user_id: parseInt(userId),
  };

  let handleReportProblem = () => {
    if (userData.is_admin) {
      problemsApi.problemPost(newProblemObject);
    } else {
      newProblemObject.status_id = 1;
      newProblemObject.priority_id = 2;
      newProblemObject.user_id = userData.id;
      problemsApi.problemPost(newProblemObject);
    }
    alert("Issue reported");
    history.push("/profile");
  };

  let handleEdit = () => {
    newProblemObject.id = singleProblem.id;
    problemsApi.problemEdit(newProblemObject);
    alert("Issue edited");
    history.push("/profile");
  };

  let handleDeleteProblem = () => {
    if (window.confirm("Are you sure you want to delete this issue?")) {
      problemsApi.problemDelete(urlParams.id);
      alert("Issue Successfuly deleted");
      history.push("/profile");
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname.includes("/edit")) {
      handleEdit();
    } else {
      handleReportProblem();
    }
  };

  return (
    <>
      {location.pathname.includes("/edit") && !singleProblem && <Loader />}
      <div className="problem-form">
        {location.pathname === "/report" && (
          <p className="problem-form-title">Report issue</p>
        )}
        {location.pathname.includes("/edit") && (
          <p className="problem-form-title">Edit issue</p>
        )}

        <form action="" onSubmit={handleSubmit}>
          <div className="input">
            <p className="input-title">Problem name</p>
            <input
              type="text"
              required
              value={problemName}
              onChange={(e) => setProblemName(e.target.value)}
            />
          </div>

          <div className="input">
            <p className="input-title">Room</p>
            <input
              type="text"
              required
              value={room}
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
              value={category}
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
                value={status}
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
                value={priority}
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
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
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

          <div className="textarea">
            <p className="textarea-title">Description</p>
            <textarea
              cols="30"
              rows="10"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="report-container">
            {location.pathname === "/report" && (
              <button className="report add">Report</button>
            )}

            {location.pathname.includes("/edit") && (
              <>
                <button className="report edit">Edit</button>
                <p className="report delete" onClick={handleDeleteProblem}>
                  Delete
                </p>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    userData: state.loginUserReducer,
    singleProblem: state.singleProblemReducer,
    allUsers: state.getAllUsersReducer,
  };
}

const mapDispatchToProps = {
  getSingleProblem,
  getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProblemForm);
