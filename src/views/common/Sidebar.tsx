import React, { ReactElement, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlined,
  BarChartOutlined,
  PieChartOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import "react-pro-sidebar/dist/css/styles.css";

interface IItem {
  title: string;
  to: string;
  icon: ReactElement;
  selected: string;
  setSelected: (title: string) => void;
}

const Item: React.FC<IItem> = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const sidebarItems = [
  ["Dashboard", "/", <HomeOutlined />],
  "Data",
  ["Manage Team", "/team", <PeopleOutlined />],
  ["Contacts Information", "/contacts", <ContactsOutlined />],
  ["Invoices Balances", "/invoices", <ReceiptOutlined />],
  "Pages",
  ["Profile Form", "/form", <PersonOutlined />],
  ["Calendar", "/calendar", <CalendarTodayOutlined />],
  ["FAQ Page", "/faq", <HelpOutlined />],
  "Charts",
  ["Bar Chart", "/bar", <BarChartOutlined />],
  ["Pie Chart", "/pie", <PieChartOutlined />],
  ["Line Chart", "/line", <TimelineOutlined />],
  ["Geography Chart", "/geography", <MapOutlined />],
] as const;

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfd !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Stack direction='row' justifyContent='space-between' alignItems='center' ml='15px'>
                <Typography variant='h3' color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Stack>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb='25px'>
              <Stack direction='row' justifyContent='center' alignItems='center'>
                <img
                  alt='profile-user'
                  width='100px'
                  height='100px'
                  src={`../../assets/user.jpg`}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
              </Stack>

              <Box textAlign='center'>
                <Typography
                  variant='h2'
                  color={colors.grey[100]}
                  fontWeight='bold'
                  sx={{
                    mt: "10px",
                  }}
                >
                  Ed Roh
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box pl={isCollapsed ? undefined : "10%"}>
            {sidebarItems.map((item, index) => {
              return Array.isArray(item) ? (
                <Item
                  title={item[0]}
                  to={item[1]}
                  icon={item[2]}
                  key={index}
                  selected={selected}
                  setSelected={setSelected}
                />
              ) : (
                <Typography key={index} variant='h6' color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                  {item}
                </Typography>
              );
            })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
