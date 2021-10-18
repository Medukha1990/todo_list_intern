const Input = ({ addNewRowInTable, taskData, setTaskData }) => {
    return (
      <>
          <div className="input-group mb-3 taskInput">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                onClick={addNewRowInTable}>
                  Add Task
              </button>
              <input type="text"
                     className="form-control"
                     placeholder=""
                     aria-label="Example text with button addon"
                     aria-describedby="button-addon1"
                     value={taskData.title}
                     onChange={(e) => setTaskData({
                         ...taskData, title: e.target.value
                     })}/>
          </div>
          <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label">
                  Description
              </label>
              <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={taskData.description}
                        onChange={(e) => setTaskData({
                            ...taskData, description: e.target.value
                        })}/>
          </div>
      </>

    );
};

export default Input;
