const FilterList = ({
                        isCompletedStatus,
                        isInProgressStatus,
                        statusList,
                        setStatusList
                    }) => {

    return (
      <>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value=""
                     id="flexCheckDefault" onChange={() => {
                  isCompletedStatus();
                  setStatusList({
                      ...statusList,
                      activeCompleted: !statusList.activeCompleted,
                      completed: !statusList.completed,
                  });
              }}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                  completed
              </label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value=""
                     id="flexCheckDefault" onChange={() => {
                  isInProgressStatus();
                  setStatusList({
                      ...statusList,
                      activeInProgress: !statusList.activeInProgress,
                      inProgress: !statusList.inProgress ,
                  });
              }}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                  in progress
              </label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox"
                     id="flexCheckDefault"
                     onChange={() => setStatusList({
                         ...statusList,
                         activeAll: !statusList.activeAll,
                         all: !statusList.all
                     })}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                  all
              </label>
          </div>
      </>
    );
};

export default FilterList;
