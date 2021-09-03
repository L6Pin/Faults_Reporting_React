import "../assets/styles/components/ProblemForm.scss";

const ProblemForm = () => {
  return (
    <div className="problem-form">
      <p className="problem-form-title">Report issue</p>
      {/* <p className="problem-form-title">Edit issue</p> */}

      <div className="input">
        <p className="input-title">Problem name</p>
        <input type="text" />
      </div>

      <div className="input">
        <p className="input-title">Room</p>
        <input type="text" />
      </div>

      <div className="filter">
        <p className="filter-name">Category</p>
        <select name="" id="" className="filter-options">
          <option value="">Opcija 1</option>
        </select>
        <div className="filter-arrow"></div>
      </div>

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
        <p className="filter-name">Asign to</p>
        <select name="" id="" className="filter-options">
          <option value="">Opcija 1</option>
        </select>
        <div className="filter-arrow"></div>
      </div>

      <div className="textarea">
        <p className="textarea-title">Description</p>
        <textarea cols="30" rows="10"></textarea>
      </div>

      <div className="report-container">
        <p className="report add">Report</p>
        {/* <p className="report edit">Edit</p>
        <p className="report delete">Delete</p> */}
      </div>
    </div>
  );
};

export default ProblemForm;
