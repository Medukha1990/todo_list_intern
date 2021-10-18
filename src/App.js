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
    const [idTodo, setIdTodo] = useState(0);

    // useEffect(() => {
    //     const tableData = JSON.parse(localStorage.getItem('tableData'));
    //     setListOfTasks(tableData);
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem('tableData', JSON.stringify(listOfTasks));
    // }, [listOfTasks]);
    //

    console.log(listOfTasks);


    const addNewRowInTable = () => {
        const id = idTodo + 1;
        setIdTodo(id);
        listOfTasks.set(`todo${id}`, {
              id: idTodo + 1,
              title: taskData.title,
              description: taskData.description,
              status: status.IN_PROGRESS
          }
        );
        setListOfTasks(listOfTasks);
    };

    const removeTask = (key) => {
        const newList = listOfTasks;
        newList.delete(key);

        setListOfTasks(newList);
    };

    const changeStatus = (id) => {
        listOfTasks.set(`todo${id}`, {
              id: idTodo + 1,
              title: taskData.title,
              description: taskData.description,
              status: status.COMPLETED
          }
        );
        setListOfTasks(listOfTasks);
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
                        <FilterList
                        /> : null}
                  </div>
              </div>
              <TableList data={listOfTasks}
                // data={(statusList.all || (statusList.completed && statusList.inProgress)) ? arrOfTasks :
                //   statusList.completed ? completedTasks :
                //     statusList.inProgress ? inProgressTasks : arrOfTasks}
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
