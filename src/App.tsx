import { Route, Routes } from "react-router-dom";
import "./App.css";

import NBFCRoutes from "./components/NBFC/NBFCRoutes";
import OverviewRoutes from "./components/Overview/OverviewRoutes";
import AppListRoutes from "./components/Applications List/AppListRoutes";
import HistoryRoutes from "./components/History/HistoryRoutes";
import ManagerUserRoutes from "./components/Manager User/ManagerUserRoutes";
import ReportRoutes from "./components/Reports/ReportRoutes";
import HelpRoutes from "./components/Help/HelpRoutes";
import UploadPoolFileRoutes from "./components/Upload Pool File/UploadPoolFileRoutes";

function App() {
  return (
    <>
      <Routes>
        {/*NBFC ROUTES */}
        <Route path="/*" element={<NBFCRoutes />} />
        <Route path="/overview/*" element={<OverviewRoutes />} />
        <Route path="/applications/*" element={<AppListRoutes />} />
        <Route path="/history/*" element={<HistoryRoutes />} />
        <Route path="/manager-user/*" element={<ManagerUserRoutes />} />
        <Route path="/reports/*" element={<ReportRoutes />} />
        <Route path="/help/*" element={<HelpRoutes />} />
        <Route path="/upload-pool-file/*" element={<UploadPoolFileRoutes />} />
      </Routes>
    </>
  );
}

export default App;
