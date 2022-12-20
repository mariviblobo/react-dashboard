import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} className="sidebar" />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes className="routes">
              <Route path="/react-dashboard" element={<Dashboard />} />
              <Route path="/react-dashboard/team" element={<Team />} />
              <Route path="/react-dashboard/contacts" element={<Contacts />} />
              <Route path="/react-dashboard/invoices" element={<Invoices />} />
              <Route path="/react-dashboard/form" element={<Form />} />
              <Route path="/react-dashboard/bar" element={<Bar />} />
              <Route path="/react-dashboard/pie" element={<Pie />} />
              <Route path="/react-dashboard/line" element={<Line />} />
              <Route path="/react-dashboard/faq" element={<FAQ />} />
              <Route path="/react-dashboard/calendar" element={<Calendar />} />
              <Route path="/react-dashboard/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;