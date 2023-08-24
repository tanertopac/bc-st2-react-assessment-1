import { USER_IDS_TO_FETCH, USER_COLUMNS } from "./consts";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useFetchUsers } from "./hooks/services/useFetchUsers";

// Server's base URL is: http://localhost:3001/api
// Path for the Users endpoint: /users/:id
// fetch user with specific Id URL: http://localhost:3001/api/users/:userId

function App() {
  // Modify here
  const userIds = USER_IDS_TO_FETCH;
  const { users } = useFetchUsers(userIds);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={USER_COLUMNS}
        pagination={false}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default App;
