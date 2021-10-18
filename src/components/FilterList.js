const FilterList = () => {

    return (
      <>
          <div className="form-check">
              <input className="form-check-input"
                     type="checkbox"
                     id="flexCheckDefault" />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault">
                  completed
              </label>
          </div>
          <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault" />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault">
                  in progress
              </label>
          </div>
          <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault" />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault">
                  all
              </label>
          </div>
      </>
    );
};

export default FilterList;
