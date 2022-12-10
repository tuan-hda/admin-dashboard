import { Box, Stack } from "@mui/system";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m='20px'>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
      </Stack>
    </Box>
  );
};

export default Dashboard;
