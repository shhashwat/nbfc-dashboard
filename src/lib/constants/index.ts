export const rbiLisenceTypes = [
  {
    type: "Investment and Credit Company (ICC)",
    value: "Investment and Credit Company",
  },
  {
    type: "Infrastructure Finance Company (IFC)",
    value: "Infrastructure Finance Company",
  },
  {
    type: "Infrastructure Debt Fund (IDF)",
    value: "Infrastructure Debt Fund",
  },
  {
    type: "Micro Finance Institution (MFI)",
    value: "Micro Finance Institution",
  },
  {
    type: "Core Investment Company (CIC)",
    value: "Core Investment Company",
  },
  {
    type: "Asset Finance Company (AFC)",
    value: "Asset Finance Company",
  },
  {
    type: "Housing Finance Company (HFC)",
    value: "Housing Finance Company",
  },
  {
    type: "Peer to Peer Lending Platform (P2P)",
    value: "Peer to Peer Lending Platform",
  },
  {
    type: "Account Aggregator (AA)",
    value: "Account Aggregator",
  },
  {
    type: "Factor (Factor)",
    value: "Factor",
  },
  {
    type: "Mortgage Guarantee Company (MGC)",
    value: "Mortgage Guarantee Company",
  },
  {
    type: "Non-Operative Financial Holding Company (NOFHC)",
    value: "Non-Operative Financial Holding Company",
  },
];

export const DisbursementFileTags = [
    {name: "Customer_Name", value: "customerName"},
    {name: "Borrower_Name", value: "borrowerName"},
    {name: "Loan_ID", value: "loanId"},
    {name: "Loan_Account_Number", value: "loanAccountNumber"},
    {name: "Loan_Ammount", value: "loanAmount"},
    {name: "Loan_Term", value: "loanTerm"},
    {name: "Sanctioned_Amount", value: "sanctionedAmount"},
    {name: "Disbursed_Amount", value: "disbursedAmount"},
    {name: "Disbursement_Date", value: "disbursementDate"},
    {name: "Tenure", value: "tenure"},
    {name: "Interest_Rate", value: "interestRate"},
    {name: "ROI", value: "roi"},
];

export const DisbursementFileInferTableHeaders = [
  { name: "Platform Field", key: "pf" },
  { name: "Expected Column Name (from NBFC file)", key: "ec" },
  { name: "Required", key: "r" },
];

export const breConfigTabs = [
  { name: "1. Bureau", value: "bureau" },
  { name: "2. Bank Statement", value: "bankStatement" },
  { name: "3. KYC", value: "kyc" },
  { name: "4. Income", value: "income" },
  { name: "5. Occupation", value: "occupation" },
  { name: "6. Demographic", value: "demographic" },
];

export const breConfigTableHeaders = [
  {
    name: "Parameter",
    key: "parameter",
    icon: "/images/icons/bre_config_th_icon.svg",
  },
  {
    name: "Value",
    key: "value",
    icon: "/images/icons/bre_config_th_icon.svg",
  },
  {
    name: "Weightage",
    key: "weightage",
    icon: "/images/icons/bre_config_th_icon.svg",
  },
  {
    name: "Mandatory",
    key: "mandatory",
  },
];

export const breConfigBureauParams = [
  {
    name: "Credit Score",
    key: "creditScore",
    subtitle: "Minimum credit score required",
  },
  {
    name: "Bureau Vintage",
    key: "bureauVintage",
    subtitle: "History in months",
  },
  {
    name: "DPD (Days Past Due)",
    key: "dpd",
    subtitle: "Maximum DPD allowed",
  },
  {
    name: "Number of Enquiries",
    key: "numOfEnquiries",
    subtitle: "Max enquiries in last 3/6 months",
  },
  {
    name: "Active Loans Numbers",
    key: "activeLoans",
    subtitle: "Numbers of secured/unsecured loans",
  },
  {
    name: "Write-off/settlement ac",
    key: "writeOffSettlement",
    subtitle: "Past write-offs or settlements",
  },
];

export const breConfigBankStatementParams = [
  {
    name: "Average Monthly Balance",
    key: "avgMonthlyBalance",
    subtitle: "Minimum Average Monthly Balance required",
  },
  {
    name: "Monthly Credits",
    key: "monthlyCredits",
    subtitle: "Minimum salary/income inflow",
  },
  {
    name: "FOIR",
    key: "foir",
    subtitle: "Max EMI to Income Ratio",
  },
  {
    name: "Debit Bounce Count",
    key: "debitBounceCount",
    subtitle: "Max Bounce in last 3/6 months",
  },
  {
    name: "Overdraft Instances",
    key: "overdraftInstances",
    subtitle: "Max OD instances in last 3/6 months",
  },
  {
    name: "EOD Balance Threshold",
    key: "eodBalanceThreshold",
    subtitle: "Min EOD Balance",
  },
];

export const breConfigKycParams = [
  {name: "PAN Verification", key: "panVerification", subtitle: "Minimum Name match %"},
  {name: "Aadhaar Authentication", key: "aadharAuth", subtitle: "Minimum Name match %"},
  {name: "Video KYC", key: "videoKyc", subtitle: "Minimum face match %"},
  {name: "Min Age", key: "minAge", subtitle: "Min Age of applicant in years"},
  {name: "Max Age", key: "maxAge", subtitle: "Max Age of applicant in years"},
];

export const breConfigIncomeParams = [
  {
    name: "ITR Filing",
    key: "itrFiling",
    subtitle: "Minimum Name match %",
  },
  {
    name: "GST Filing",
    key: "gstFiling",
    subtitle: "Minimum GST filing value",
  },
  {
    name: "Udyam Verification",
    key: "udyamVerification",
    subtitle: "Min udyam details match %",
  },
  {
    name: "Source of Income",
    key: "sourceOfIncome",
    subtitle: "Salaried / Self-employed/ Business",
  },
  {
    name: "Consistency",
    key: "consistency",
    subtitle: "Min consistency of income in months",
  },
];

export const breConfigOccupationParams = [
  {
    name: "Employer Type",
    key: "employerType",
    subtitle: "Govt / Pvt / Self-employed",
  },
  {
    name: "Employment Stability",
    key: "employmentStability",
    subtitle: "Minimum experience in months ",
  },
  {
    name: "Business Vintage",
    key: "businessVintage",
    subtitle: "Min vintage in months",
  },
];

export const breConfigDemographicParams = [
  {
    name: "Pin Code Risk Mapping",
    key: "pinCodeRiskMapping",
    subtitle: "Flag based on high-risk geographic areas.",
  },
];

export const breConfigTabContent = [
  {
    value: "bureau",
    title: "Bureau Rules",
    subtitle: "Get creditworthiness and repayment history",
    navTo: "bankStatement",
    paramsArr: breConfigBureauParams,
  },
  {
    value: "bankStatement",
    title: "Bank Statement",
    subtitle: "Get cash flow assessment & repayment ability",
    navTo: "kyc",
    paramsArr: breConfigBankStatementParams,
  },
  {
    value: "kyc",
    title: "KYC",
    subtitle: "Get Identity validation and fraud prevention",
    navTo: "income",
    paramsArr: breConfigKycParams,
  },
  {
    value: "income",
    title: "Income",
    subtitle: "Get Validate income consistency",
    navTo: "occupation",
    paramsArr: breConfigIncomeParams,
  },
  {
    value: "occupation",
    title: "Occupation",
    subtitle: "Understand stability and risk based on employment",
    navTo: "demographic",
    paramsArr: breConfigOccupationParams,
  },
  {
    value: "demographic",
    title: "Demographic",
    subtitle: "Understand stability and risk based on employment",
    navTo: "",
    paramsArr: breConfigDemographicParams,
  },
];