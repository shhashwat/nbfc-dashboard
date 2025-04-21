import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import AppList from "./AppList";

const AppListRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <Layout>
              <AppList />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default AppListRoutes;
