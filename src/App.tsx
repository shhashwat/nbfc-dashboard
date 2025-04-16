import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import OnboardingPage from './components/OnboardingPage';
import SegmentSelection from './components/SegmentSelection';
import NBFCform from './components/NBFCform';
import DisbursementFileUpload from './components/DisbursementFileUpload';
import DisbursementFileInfer from './components/DisbursementFileInfer';

function App() {

  return (
    <>
    {/* ONBOARDING */}
    <Routes>
      <Route
      path="/"
      element={
      <Layout >
        <OnboardingPage />
      </Layout>}/>
      
      {/* SEGMENT SELECTION */}
      <Route
      path='/nbfc/2'
      element={
      <Layout >
        <SegmentSelection />
      </Layout>}/>

      {/* NBFC FORM */}
      <Route
      path='/nbfc/3'
      element={
      <Layout >
        <NBFCform />
      </Layout>}/>

      {/* DISBURSEMENT FILE UPLOAD */}
      <Route
      path='/nbfc/4'
      element={
      <Layout >
        <DisbursementFileUpload />
      </Layout>}/>

      {/* DISBURSEMENT FILE INFER */}
      <Route
      path='/nbfc/5'
      element={
      <Layout >
        <DisbursementFileInfer />
      </Layout>}/>
    </Routes>
    </>
  );
}

export default App
