import { useContext } from "react";
import Context from "../context";

const TableItem = ({ rowData }) => {

    const { removeTask } = useContext(Context);
    const { changeStatus } = useContext(Context);
    return (
      <tr>
          <th scope="row">{rowData[1].id}</th>
          <td>{rowData[1].title}</td>
          <td>{rowData[1].description}</td>
          <td>
              <button type="button"
                      className="btn btn-outline-danger btn-sm cellButton"
                onClick={() => removeTask(rowData[0])}
              >
                  Delete
              </button>

              <button type="button"
                      className="btn btn-outline-primary btn-sm cellButton"
                onClick={() => changeStatus(rowData[1].id)}
              >
                  Complete
              </button>

          </td>
          <td
            // className={rowData.status === 'completed' ? "taskCompleted" : "taskInProgress"}
          >
              {rowData[1].status}
          </td>
      </tr>
    );
};

export default TableItem;
