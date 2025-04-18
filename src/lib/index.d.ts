declare interface CardHeaderHandle {
  getValue: () => string;
}

declare interface CardHeaderProps {
  title: string;
  subtitle?: string;
  pclassName?: string;
  weightage?: boolean;
}

declare interface BRETablesProps {
  title: string;
  subtitle: string;
  navTo: string;
  paramsArr: any[];
}

declare interface LoanProductTablesProps {
  title: string;
  subtitle: string;
  navTo: string;
  paramsArr: any[];
}