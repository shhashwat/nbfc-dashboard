import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Reports from "./Reports";

const ReportRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <Layout>
              <Reports />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default ReportRoutes;
