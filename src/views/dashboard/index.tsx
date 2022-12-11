import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import { DownloadOutlined, Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Stack>

      {/* GRID & CHARTS */}
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap='20px'>
        {/* ROW 1 */}
        <Box
          gridColumn='span 3'
          bgcolor={colors.primary[400]}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <StatBox
            title='12,361'
            subtitle='Emails sent'
            progress={0.75}
            increase='+14%'
            icon={
              <Email
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          bgcolor={colors.primary[400]}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <StatBox
            title='431,225'
            subtitle='Sales Obtained'
            progress={0.75}
            increase='+14%'
            icon={
              <PointOfSale
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          bgcolor={colors.primary[400]}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <StatBox
            title='32,441'
            subtitle='Emails sent'
            progress={0.3}
            increase='+5%'
            icon={
              <PersonAdd
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          bgcolor={colors.primary[400]}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <StatBox
            title='1,325,324'
            subtitle='Traffic Inbound'
            progress={0.8}
            increase='+43%'
            icon={
              <Traffic
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box gridColumn='span 8' gridRow='span 2' bgcolor={colors.primary[400]}>
          <Box mt='25px' p='0 30px' display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
              <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                #59,342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{
                    fontSize: "26px",
                    color: colors.greenAccent[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height='250px' mt='-20px'>
            <LineChart isDashboard />
          </Box>
        </Box>

        {/* TRANSACTION */}
        <Box gridColumn='span 4' gridRow='span 2' bgcolor={colors.primary[400]} overflow='auto'>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p='15px'
          >
            <Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, index) => (
            <Box
              key={index}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${colors.primary[500]}`}
              p='15px'
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant='h5' fontWeight='600'>
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box bgcolor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px'>
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box gridColumn='span 4' gridRow='span 2' bgcolor={colors.primary[400]} p='30px'>
          <Typography variant='h5' fontWeight='600'>
            Campaign
          </Typography>
          <Stack alignItems='center' mt='25px'>
            <ProgressCircle size='125' />
            <Typography
              variant='h5'
              color={colors.greenAccent[500]}
              sx={{
                mt: "15px",
              }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Stack>
        </Box>

        {/*  */}
        <Box gridColumn='span 4' gridRow='span 2' bgcolor={colors.primary[400]}>
          <Typography variant='h5' fontWeight='600' sx={{ p: "30px 30px 0 30px" }}>
            Sales Quantity
          </Typography>
          <Box height='250px' mt='-20px'>
            <BarChart isDashboard />
          </Box>
        </Box>

        <Box gridColumn='span 4' gridRow='span 2' bgcolor={colors.primary[400]} p='30px'>
          <Typography variant='h5' fontWeight='600' sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height='200px' mt='-20px'>
            <GeographyChart isDashboard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
