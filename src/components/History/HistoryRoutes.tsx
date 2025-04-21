import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import History from "./History";

const HistoryRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <Layout>
                <History/>
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default HistoryRoutes;
