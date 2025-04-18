//SELECT DROPDOWNS

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

export const lpconfigLoanTypes = [
  { label: "Gold Loan", value: "Gold Loan" },
  { label: "Personal Loan", value: "Personal Loan" },
  { label: "Business Loan", value: "Business Loan" },
  { label: "Two-Wheeler Loan", value: "Two-Wheeler Loan" },
  { label: "Used Car Loan", value: "Used Car Loan" },
  { label: "New Car Loan", value: "New Car Loan" },
  { label: "Loan Against Property (LAP)", value: "Loan Against Property" },
  { label: "Home Loan", value: "Home Loan" },
  { label: "Education Loan", value: "Education Loan" },
  { label: "Consumer Durable Loan", value: "Consumer Durable Loan" },
  { label: "Agricultural Loan", value: "Agricultural Loan" },
  { label: "SME/MSME Loan", value: "SME/MSME Loan" },
  { label: "Microfinance Loan", value: "Microfinance Loan" },
  {
    label: "Construction Equipment Loan",
    value: "Construction Equipment Loan",
  },
  { label: "Commercial Vehicle Loan", value: "Commercial Vehicle Loan" },
  { label: "Working Capital Loan", value: "Working Capital Loan" },
  { label: "Invoice Financing", value: "Invoice Financing" },
  { label: "Loan Against Securities", value: "Loan Against Securities" },
  { label: "Top-Up Loan", value: "Top-Up Loan" },
  { label: "Balance Transfer Loan", value: "Balance Transfer Loan" },
];

export const lpconfigLoanPurposes = [
  { label: "Education", value: "Education" },
  { label: "Home Renovation", value: "Home Renovation" },
  { label: "Business Expansion", value: "Business Expansion" },
  { label: "Working Capital", value: "Working Capital" },
  { label: "Debt Consolidation", value: "Debt Consolidation" },
  { label: "Medical Expenses", value: "Medical Expenses" },
  { label: "Wedding", value: "Wedding" },
  { label: "Travel", value: "Travel" },
  { label: "Vehicle Purchase", value: "Vehicle Purchase" },
  { label: "Purchase of Machinery", value: "Purchase of Machinery" },
  { label: "Construction of House", value: "Construction of House" },
  { label: "Purchase of Land", value: "Purchase of Land" },
  {
    label: "Purchase of Commercial Property",
    value: "Purchase of Commercial Property",
  },
  { label: "Agricultural Activities", value: "Agricultural Activities" },
  { label: "Emergency Fund", value: "Emergency Fund" },
  { label: "Loan Against Deposit", value: "Loan Against Deposit" },
  { label: "House Purchase", value: "House Purchase" },
  { label: "Equipment Financing", value: "Equipment Financing" },
  { label: "Export/Import Financing", value: "Export/Import Financing" },
  { label: "Student Loan (Overseas)", value: "Student Loan (Overseas)" },
];

export const lpConfigRepaymentScheduleTypes = [
  { label: "EMI", value: "EMI" },
  { label: "Bullet", value: "Bullet" },
  { label: "Lump Sum", value: "Lump Sum" },
  { label: "Step-Up", value: "Step-Up" },
  { label: "Step-Down", value: "Step-Down" },
  { label: "Interest Only", value: "Interest Only" },
  { label: "Custom", value: "Custom" },
];

export const lpConfigEmiFrequencies = [
  { label: "Monthly", value: "Monthly" },
  { label: "Bi-Monthly", value: "Bi-Monthly" },
  { label: "Quarterly", value: "Quarterly" },
  { label: "Half-Yearly", value: "Half-Yearly" },
  { label: "Annually", value: "Annually" },
  { label: "Weekly", value: "Weekly" },
  { label: "Daily", value: "Daily" },
];

export const lpConfigGoldPurityOptions = [
  { label: "75% 18K", value: "75% 18K" },
  { label: "80% 22K", value: "80% 22K" },
  { label: "85% 24K", value: "85% 24K" },
  { label: "90% 22K", value: "90% 22K" },
  { label: "95% 24K", value: "95% 24K" },
  { label: "100% 24K", value: "100% 24K" },
];

export const lpConfigCollateralTypes = [
  { label: "Gold", value: "Gold" },
  { label: "Property", value: "Property" },
  { label: "Vehicle", value: "Vehicle" },
  { label: "Securities", value: "Securities" },
  { label: "Cash", value: "Cash" },
  { label: "Inventory", value: "Inventory" },
  { label: "Other", value: "Other" },
];



// DISBURSEMENT

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

//BRE

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

//bre params
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

//bre - tab content (ALL TABS)
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

//LOAN PRODUCT CONFIG

export const loanProductConfigTabs = [
  { name: "1. Product Info", key: "productInfo" },
  { name: "2. Loan Amount & Tenure", key: "loanAmountAndTenure" },
  { name: "3. Charges & Fees", key: "chargesAndFees" },
  { name: "4. Repayment & Schedule", key: "repaymentAndSchedule" },
  { name: "5. Collateral & Risk Controls", key: "collateralAndRiskControls" }
];

export const loanProductConfigTableHeaders = [
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
    name: "Mandatory",
    key: "mandatory",
  },
];

export const loanProductConfigProductInfoParams = [
  {
    name: "Loan Type",
    key: "loanType",
    subtitle: "Select the type of loan being configured",
    dropdown: lpconfigLoanTypes,
  },
  {
    name: "Loan Category / Purpose",
    key: "loanCategory",
    subtitle: "Specify the purpose for which the loan is offered",
    dropdown: lpconfigLoanPurposes,
  },
];

export const loanProductConfigLoanAmountParams = [
  {
    name: "Max Disbursement Cap",
    key: "maxDisbursementCap",
    subtitle: "Disbursement limit for this loan product",
  },
  {
    name: "Min Loan Amount",
    key: "minLoanAmount",
    subtitle: "Lowest amount that can be disbursed",
  },
  {
    name: "Max Loan Amount",
    key: "maxLoanAmount",
    subtitle: "Loan exposure allowed per customer across products",
  },
  {
    name: "Min Tenure",
    key: "minTenure",
    subtitle: "Shortest allowable repayment period in Months",
  },
  {
    name: "Max Tenure",
    key: "maxTenure",
    subtitle: "Longest allowable repayment period",
  },
];

export const loanProductConfigChargesParams = [
  {
    name: "Rate of Interest (ROI)",
    key: "roi",
    subtitle: "Annual interest rate applicable",
  },
  {
    name: "Processing Fee",
    key: "processingFee",
    subtitle: "Fixed one-time loan setup fee",
  },
  {
    name: "Service Fee",
    key: "serviceFee",
    subtitle: "Additional service charge on the loan",
  },
  {
    name: "GST on Service Fee ",
    key: "gstOnServiceFee",
    subtitle: "GST percentage applicable on the service fee",
  },
];

export const loanProductConfigRepaymentParams = [
  {
    name: "Repayment Schedule Type",
    key: "repaymentScheduleType",
    subtitle: "Repayment structure (e.g., EMI, Bullet)",
    dropdown: lpConfigRepaymentScheduleTypes,
  },
  {
    name: "EMI Frequency / Cycle",
    key: "emiFrequency",
    subtitle: "Select how often repayments will be made",
    dropdown: lpConfigEmiFrequencies,
  },
  {
    name: "Moratorium Period",
    key: "moratoriumPeriod",
    subtitle: "Grace period before repayment starts (if applicable)",
  }
];

export const loanProductConfigCollateralParams = [
  {
    name: "Gold Purity %",
    key: "goldPurity",
    subtitle: "Set minimum acceptable purity for pledged gold",
    dropdown: lpConfigGoldPurityOptions,
  },
  {
    name: "Loan-to-Value (LTV) %",
    key: "ltvPercentage",
    subtitle: "Minimum experience in months ",
  },
  {
    name: "Collateral Type Required?",
    key: "collateralTypeRequired",
    subtitle: "Indicate if the loan requires any form of security",
    dropdown: lpConfigCollateralTypes,
  },
];


//loan product - tab content (ALL TABS)
export const loanProductConfigTabContent = [
  {
    value: "productInfo",
    title: "Product Info",
    subtitle: "Get creditworthiness and repayment history",
    navTo: "loanAmountAndTenure",
    paramsArr: loanProductConfigProductInfoParams,
  },
  {
    value: "loanAmountAndTenure",
    title: "Loan Amount & Tenure",
    subtitle: "Get cash flow assessment & repayment ability.",
    navTo: "chargesAndFees",
    paramsArr: loanProductConfigLoanAmountParams,
  },
  {
    value: "chargesAndFees",
    title: "Charges & Fees",
    subtitle: "Get Identity validation and fraud prevention.",
    navTo: "repaymentAndSchedule",
    paramsArr: loanProductConfigChargesParams,
  },
  {
    value: "repaymentAndSchedule",
    title: "Repayment & Schedule",
    subtitle: "Get Validate income consistency.",
    navTo: "collateralAndRiskControls",
    paramsArr: loanProductConfigRepaymentParams,
  },
  {
    value: "collateralAndRiskControls",
    title: "Collateral & Risk Controls",
    subtitle: "Understand stability and risk based on employment",
    navTo: "/",
    paramsArr: loanProductConfigCollateralParams,
  },
];