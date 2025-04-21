import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import AppList from "./AppList";
import NotFound from "../NotFound";

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

        {/* 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppListRoutes;
