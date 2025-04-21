import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import ManagerUser from "./ManagerUser";

const ManagerUserRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <Layout>
              <ManagerUser />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default ManagerUserRoutes;
