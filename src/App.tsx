import { Route, Routes } from "react-router-dom";
import "./App.css";

import NBFCRoutes from "./components/NBFC/NBFCRoutes";

function App() {
  return (
    <>
      <Routes>
        {/*NBFC ROUTES */}
        <Route path="/*" element={<NBFCRoutes />} />
      </Routes>
    </>
  );
}

export default App;
