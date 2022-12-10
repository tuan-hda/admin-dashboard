import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./views/common/TopBar";
import Sidebar from "./views/common/Sidebar";
import Dashboard from "./views/dashboard";
// import Team from "./views/team";
// import Invoices from "./views/invoices";
// import Contacts from "./views/contacts";
// import Bar from "./views/bar";
// import Form from "./views/form";
// import Line from "./views/line";
// import Pie from "./views/pie";
// import FAQ from "./views/faq";
// import Geography from "./views/geography";
// import Calendar from "./views/calendar";

import { Route, Routes } from "react-router-dom";
import Team from "./views/team";
import Contacts from "./views/contacts";
import Invoices from "./views/invoices";
import Form from "./views/form";

const App: React.FC = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <TopBar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />

              <Route path='/contacts' element={<Contacts />} />

              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              {/* 
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/calendar' element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
