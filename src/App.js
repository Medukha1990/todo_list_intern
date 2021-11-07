import { useEffect, useState } from "react";
import TableList from "./components/TableList";
import Input from "./components/Input";
import FilterIcon from "./components/FilterIcon";
import FilterList from "./components/FilterList";
import { status } from "./helpers/status";

import Context from "./context";
import './App.css';

const App = () => {
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
    });
    const [isFilterMenu, setIsFilterMenu] = useState(false);
    const [listOfTasks, setListOfTasks] = useState(new Map());
    const [completedTasks, setCompletedTasks] = useState(new Map());
    const [inProgressTasks, setInProgressTasks] = useState(new Map());
    const [isCompleted, setIsCompleted] = useState(false);
    const [isInProgress, setIsInProgress] = useState(false);
    const [idTodo, setIdTodo] = useState(0);

    useEffect(() => {
        setListOfTasks(new Map(JSON.parse(localStorage.tableData)));
    }, []);

    useEffect(() => {
        localStorage.setItem('tableData', JSON.stringify(Array.from(listOfTasks.entries())));
    }, [listOfTasks]);

    const completed = () => {
        const newArr = [...listOfTasks].filter((item) => item[1].status === status.COMPLETED);
        setCompletedTasks(new Map(newArr));
    };

    const inProgress = () => {
        const newArr = [...listOfTasks].filter((item) => item[1].status === status.IN_PROGRESS);
        setInProgressTasks(new Map(newArr));
    };

    const addNewRowInTable = () => {
        const id = idTodo + 1;
        setIdTodo(id);
        (taskData.title && taskData.description) === '' ?
          window.alert('The fields should not be empty')
          : listOfTasks.set(`todo${id}`, {
                id: idTodo + 1,
                title: taskData.title,
                description: taskData.description,
                status: status.IN_PROGRESS
            }
          );
        setListOfTasks(new Map(listOfTasks));
    };

    const removeTask = (key) => {
        const newList = listOfTasks;
        newList.delete(key);

        setListOfTasks(new Map(newList));
    };

    const changeStatus = (id) => {
        listOfTasks.get(`todo${id}`).status = 'completed';
        setListOfTasks(new Map(listOfTasks));
    };

    return (
      <Context.Provider value={{ removeTask, changeStatus }}>
          <div className="App">
              <h1>Todo List</h1>
              <div className="mainFilter">
                  <div onClick={() => setIsFilterMenu(!isFilterMenu)}>
                      <FilterIcon/>
                  </div>
                  <div className="filterList">
                      {isFilterMenu ?
                        <FilterList completed={completed}
                                    inProgress={inProgress}
                                    setIsCompleted={setIsCompleted}
                                    setIsInProgress={setIsInProgress}
                        /> : null}
                  </div>
              </div>
              <TableList
                data={(isCompleted && isInProgress) ? listOfTasks :
                  isCompleted ? completedTasks :
                    isInProgress ? inProgressTasks :
                      listOfTasks}
              />
              <Input
                addNewRowInTable={addNewRowInTable}
                taskData={taskData}
                setTaskData={setTaskData}/>
          </div>
      </Context.Provider>
    );
};

export default App;
