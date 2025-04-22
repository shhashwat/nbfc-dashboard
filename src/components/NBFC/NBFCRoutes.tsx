import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import OnboardingPage from "./OnboardingPage";
import SegmentSelection from "./SegmentSelection";
import NBFCform from "./NBFCform";
import DisbursementFileUpload from "./DisbursementFileUpload";
import DisbursementFileInfer from "./DisbursementFileInfer";
import BREConfig from "./BREConfig";
import LoanProductConfig from "./LoanProductConfig";
import NotFound from "../NotFound";
import ContactPage from "../Contact";
import DisbursementFileRundown from "./DisbursementFileRundown";

const NBFCRoutes = () => {
  return (
    <>
      <Routes>
        {/* ONBOARDING */}
        <Route
          path="/"
          element={
            <Layout>
              <OnboardingPage />
            </Layout>
          }
        />

        {/* SEGMENT SELECTION */}
        <Route
          path="/nbfc/segment-selection"
          element={
            <Layout>
              <SegmentSelection />
            </Layout>
          }
        />

        {/* NBFC FORM */}
        <Route
          path="/nbfc/nbfc-form"
          element={
            <Layout>
              <NBFCform />
            </Layout>
          }
        />

        {/* DISBURSEMENT FILE UPLOAD */}
        <Route
          path="/nbfc/disbursement-file-upload"
          element={
            <Layout>
              <DisbursementFileUpload />
            </Layout>
          }
        />
        {/* DISBURSEMENT FILE RUNDOWN */}
        <Route
          path="/nbfc/disbursement-file-rundown"
          element={
            <Layout>
              <DisbursementFileRundown />
            </Layout>
          }
        />

        {/* DISBURSEMENT FILE INFER */}
        <Route
          path="/nbfc/disbursement-file-infer"
          element={
            <Layout>
              <DisbursementFileInfer />
            </Layout>
          }
        />

        {/* LOAN PRODUCT CONFIG */}
        <Route
          path="/nbfc/product-config"
          element={
            <Layout>
              <LoanProductConfig />
            </Layout>
          }
        />

        {/* BRE CONFIG */}
        <Route
          path="/nbfc/bre-config"
          element={
            <Layout>
              <BREConfig />
            </Layout>
          }
        />

        {/* 404 PAGE */}
        <Route path="*" element={<NotFound />} />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default NBFCRoutes;
