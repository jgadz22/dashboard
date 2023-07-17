import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../DataTableSource";
import { Link } from "react-router-dom";

const DataTable = ({ title }) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const userId = params.row.id;
        return (
          <div className="cellAction">
            <Link to={`/users/${userId}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        List of {title}
        <Link to="new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
