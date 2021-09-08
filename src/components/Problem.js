import "../assets/styles/components/Problem.scss";

const Problem = ({ issue }) => {
  var moment = require("moment-timezone");

  let renderPriority = () => {
    switch (issue.priority_name) {
      case "Niski":
        return "Low";
      case "Srednji":
        return "Medium";
      case "Visoki":
        return "High";
      default:
        return "";
    }
  };

  let renderStatus = () => {
    switch (issue.status_name) {
      case "Prijavljen":
        return "Reported";
      case "U toku":
        return "In process";
      case "Resen":
        return "Completed";
      default:
        return "";
    }
  };

  return (
    <div className="problem">
      <div
        className={
          issue.status_id === 1
            ? "status-indicator reported"
            : issue.status_id === 2
            ? "status-indicator in-process"
            : issue.status_id === 3
            ? "status-indicator completed"
            : ""
        }
      ></div>
      <p className="problem-name">{issue.problem_name}</p>
      <div className="problem-info">
        {/* <span>Time: {moment(issue.created_at).local().format("hh:mm")}h</span> */}
        <span>
          Time: {moment(issue.created_at).utcOffset("+0400").format("hh:mm")}h
        </span>
        <span>Date: {moment(issue.created_at).format("DD-MM-YYYY")}</span>
        <span>Priority: {renderPriority()}</span>
        <span>Status: {renderStatus()}</span>
      </div>
    </div>
  );
};

export default Problem;
