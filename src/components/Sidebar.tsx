import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="sticky top-0 h-screen w-64 bg-white p-4">
      {/* Logo */}
      <div className="mb-8">
        <a href="#" className="block">
          <img
            src="/images/Bank_of_Maharashtra_logo.svg"
            alt="Bank of Maharashtra Logo"
            className="w-48 h-auto"
          />
        </a>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-full hover:font-bold"
            >
              <img
                src="/images/icons/overview_sidebar.svg"
                alt="overview"
                className="mr-2 w-6"
              />
              Overview
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-bold"
            >
              <img
                src="/images/icons/nbfc_sidebar.svg"
                alt="overview"
                className="mr-2 w-6"
              />
              NBFC Onboarding
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-full hover:font-bold"
            >
              <img
                src="/images/icons/app_list_sidebar.svg"
                alt="overview"
                className="mr-2 w-6"
              />
              Applications List
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-full hover:font-bold"
            >
              <img
                src="/images/icons/history_sidebar.svg"
                alt="overview"
                className="mr-2 w-6"
              />
              History
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-full hover:font-bold"
            >
              <img
                src="/images/icons/manager_user_sidebar.svg"
                alt="overview"
                className="mr-2 w-6"
              />
              Manager User
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-full hover:font-bold"
            >
              <img
                src="/images/icons/reports_sidebar.svg"
                alt="overview"
                className="mr-2 w-6"
              />
              Reports
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
