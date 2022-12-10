import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>
      ),
    },

    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <Box m='20px'>
      <Header title='INVOICES' subtitle='List of Invoices Balances' />
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection columns={columns} rows={mockDataInvoices} />
      </Box>
    </Box>
  );
};

export default Invoices;
