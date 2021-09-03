import "../assets/styles/components/Problem.scss";

const Problem = () => {
  return (
    <div className="problem">
      <div className="status-indicator"></div>
      <p className="problem-name">Problem name</p>
      <div className="problem-info">
        <span>Time: 11:00h</span>
        <span>Date: 22.12.2021</span>
        <span>Priority: Low</span>
        <span>Status: Solved</span>
      </div>
    </div>
  );
};

export default Problem;
