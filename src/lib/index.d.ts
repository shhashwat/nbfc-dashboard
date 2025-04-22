declare type myCardComponents = {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  subtext: string;
  badge?: string;
};

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
  onSubmit?: () => void;
}

declare interface LoanProductTablesProps {
  title: string;
  subtitle: string;
  navTo: string;
  paramsArr: any[];
  onSubmit?: () => void;
}

declare interface TabStore {
  submittedTabs: string[];
  markTabAsSubmitted: (tab: string) => void;
}

declare interface ButtonRoundProps {
  src: string;
  alt: string;
  id: string;
  className?: string;
  progress? : number;
}