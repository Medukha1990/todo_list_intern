import TableItem from "./TableItem";

const TableList = ({ data }) => {
    return (
      <table className="table">
          <thead>
          <tr>
              <th scope="col">ID</th>
              <th scope="col">Task Name</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
              <th scope="col">Status</th>
          </tr>
          </thead>
          <tbody>
          {data.map((item) => {
              return <TableItem rowData={item} key={item.id}/>;
          })}
          </tbody>
      </table>
    );
};

export default TableList;
