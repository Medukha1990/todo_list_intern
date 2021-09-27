import { useContext } from "react";
import Context from "../context";

const TableItem = ({ rowData }) => {
    const { removeTask } = useContext(Context);
    const { changeStatus } = useContext(Context);

    return (
      <tr>
          <th scope="row">{rowData.id}</th>
          <td>{rowData.title}</td>
          <td>{rowData.description}</td>
          <td>
              <button type="button"
                      className="btn btn-outline-danger btn-sm cellButton"
                      onClick={() => removeTask(rowData.id)}>Delete
              </button>
              {rowData.status !== 'completed' ? (
                <button type="button"
                        className="btn btn-outline-primary btn-sm cellButton"
                        onClick={() => changeStatus(rowData.id)}>Complete
                </button>
              ) : null}
          </td>
          <td
            className={rowData.status === 'completed' ? "taskCompleted" : "taskInProgress"}>
              {rowData.status}
          </td>
      </tr>
    );
};

export default TableItem;
