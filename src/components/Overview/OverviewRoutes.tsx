import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Overview from "./Overview";

const OverviewRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <Layout>
              <Overview />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default OverviewRoutes;
