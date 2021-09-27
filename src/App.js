import TableList from "./components/TableList";
import FilterIcon from "./components/FilterIcon";
import FilterList from "./components/FilterList";
import { useEffect, useState } from "react";
import Context from "./context";
import './App.css';

const App = () => {
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        status: ''
    });
    const [arrOfTasks, setArrOfTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [isFilterMenu, setIsFilterMenu] = useState(false);
    const [statusList, setStatusList] = useState({
        activeCompleted: false,
        activeInProgress: false,
        activeAll: false,
        completed: false,
        inProgress: false,
        all: false
    });

    useEffect(() => {
        const tableData = JSON.parse(localStorage.getItem('tableData'));
        setArrOfTasks(tableData);
    }, []);

    useEffect(() => {
        localStorage.setItem('tableData', JSON.stringify(arrOfTasks));
    }, [arrOfTasks]);

    const taskObj = {
        id: arrOfTasks.length + 1,
        title: taskData.title,
        description: taskData.description,
        status: 'in progress'
    };

    const changeStatus = (id) => {
        const newArr = arrOfTasks;
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].id === id) {
                newArr[i].status = 'completed';
            }
        }

        return setArrOfTasks([...newArr]);
    };

    const addNewRowInTable = () => {
        const newArr = [...arrOfTasks, taskObj];

        (taskObj.title && taskObj.description) === '' ?
          window.alert('The fields should not be empty')
          : setArrOfTasks(newArr);

        taskData.title = '';
        taskData.description = '';
    };

    const removeTask = (id) => {
        const newArr = arrOfTasks.filter((row) => row.id !== id);
        setArrOfTasks(newArr);
    };

    const showCompletedTask = () => {
        const newArr = arrOfTasks.filter((row) => row.status === 'completed');
        setCompletedTasks(newArr);
    };

    const showInProgressTask = () => {
        const newArr = arrOfTasks.filter((row) => row.status === 'in progress');
        setInProgressTasks(newArr);
    };

    return (
      <Context.Provider value={{ removeTask, changeStatus }}>
          <div className="App">
              <h1>Todo List</h1>
              <div className="mainFilter">
                  {arrOfTasks.length !== 0 ?
                    <div onClick={() => setIsFilterMenu(!isFilterMenu)}>
                        <FilterIcon/>
                    </div> : null}
                  <div className="filterList">
                      {isFilterMenu ?
                        <FilterList isCompletedStatus={showCompletedTask}
                                    isInProgressStatus={showInProgressTask}
                                    statusList={statusList}
                                    setStatusList={setStatusList}
                        /> : null}
                  </div>
              </div>
              <TableList
                data={(statusList.all || (statusList.completed && statusList.inProgress)) ? arrOfTasks :
                  statusList.completed ? completedTasks :
                    statusList.inProgress ? inProgressTasks
                      : arrOfTasks}/>
              <div className="input-group mb-3 taskInput">
                  <button className="btn btn-outline-secondary" type="button"
                          id="button-addon1"
                          onClick={addNewRowInTable}> Add Task
                  </button>
                  <input type="text" className="form-control" placeholder=""
                         aria-label="Example text with button addon"
                         aria-describedby="button-addon1"
                         value={taskData.title}
                         onChange={(e) => setTaskData({
                             ...taskData, title: e.target.value
                         })}/>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1"
                         className="form-label">Description</label>
                  <textarea className="form-control"
                            id="exampleFormControlTextarea1" rows="3"
                            value={taskData.description}
                            onChange={(e) => setTaskData({
                                ...taskData, description: e.target.value
                            })}/>
              </div>
          </div>
      </Context.Provider>
    );
};

export default App;
