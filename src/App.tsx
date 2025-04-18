import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import OnboardingPage from './components/OnboardingPage';
import SegmentSelection from './components/SegmentSelection';
import NBFCform from './components/NBFCform';
import DisbursementFileUpload from './components/DisbursementFileUpload';
import DisbursementFileInfer from './components/DisbursementFileInfer';
import BREConfig from './components/BREConfig';
import LoanProductConfig from './components/LoanProductConfig';
import NotFound from './components/NotFound';
import ContactPage from './components/Contact';

function App() {

  return (
    <>
      {/* ONBOARDING */}
      <Routes>
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
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </>
  );
}

export default App
