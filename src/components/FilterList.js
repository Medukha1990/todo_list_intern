const FilterList = ({
                        completed,
                        inProgress,
                        setIsCompleted,
                        setIsInProgress
                    }) => {

    return (
      <>
          <div className="form-check">
              <input className="form-check-input" type="radio"
                     name="flexRadioDefault" id="flexRadioDefault1"
                     onClick={() => {
                         inProgress();
                         setIsInProgress(true);
                         setIsCompleted(false);
                     }}/>
              <label className="form-check-label"
                     htmlFor="flexRadioDefault1">
                  in progress
              </label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="radio"
                     name="flexRadioDefault" id="flexRadioDefault2"
                     onClick={() => {
                         completed();
                         setIsCompleted(true);
                         setIsInProgress(false);
                     }}/>
              <label className="form-check-label"
                     htmlFor="flexRadioDefault2">
                  completed
              </label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="radio"
                     name="flexRadioDefault" id="flexRadioDefault2"
                     onClick={() => {
                         setIsCompleted(true);
                         setIsInProgress(true);
                     }}/>
              <label className="form-check-label"
                     htmlFor="flexRadioDefault2">
                  all
              </label>
          </div>
      </>
    );
};

export default FilterList;
