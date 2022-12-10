import { Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import { DataGrid, GridRowModel } from "@mui/x-data-grid";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age", type: "number" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access level",
      flex: 1,
      renderCell: ({ row: { access } }: GridRowModel) => (
        <Stack
          direction='row'
          justifyContent='center'
          bgcolor={access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}
          width='60%'
          m='0 auto'
          p='5px'
        >
          {access === "admin" && <AdminPanelSettingsOutlined />}
          {access === "manager" && <SecurityOutlined />}
          {access === "user" && <LockOpenOutlined />}

          <Typography
            color={colors.grey[100]}
            sx={{
              ml: "5px",
            }}
          >
            {access.charAt(0).toUpperCase() + access.slice(1)}
          </Typography>
        </Stack>
      ),
    },
  ];

  return (
    <Box m='20px'>
      <Header title='TEAM' subtitle='Managing the Team Members' />
      <Box
        mt='40px'
        height='70vh'
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-root .MuiDataGrid-cell:focus": {
            outline: "none",
          },
        }}
      >
        <DataGrid columns={columns} rows={mockDataTeam} />
      </Box>
    </Box>
  );
};

export default Team;
