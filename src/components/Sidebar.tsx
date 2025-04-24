import { cn } from "@/lib/utils";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const getLinkClass = (pathSegment: string) => {
    const isActive =
      location.pathname === "/" || location.pathname.includes(pathSegment);
    return `flex items-center px-4 py-1 rounded-full ${
      isActive
        ? "bg-blue-100 text-blue-600 font-bold"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600 hover:font-bold"
    }`;
  };

  return (
    <aside className="sticky top-0 h-screen w-64 bg-white p-4">
      {/* Logo */}
      <div className="mb-8">
        <NavLink to="/" className="block">
          <img
            src="/images/Bank_of_Maharashtra_logo.svg"
            alt="Bank of Maharashtra Logo"
            className="w-48 h-auto"
          />
        </NavLink>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/overview"
              className={({ isActive }) => {
                const linkClasses = isActive
                  ? "bg-blue-100 text-blue-600 font-bold"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-600 hover:font-bold";

                return `flex items-center px-4 py-1 rounded-full ${linkClasses}`;
              }}
            >
              {({ isActive }) => (
                <>
                  <img
                    src="/images/icons/overview_sidebar.svg"
                    alt="overview"
                    className={`mr-2 w-6  hover:filter-blue ${
                      isActive ? "filter-blue" : ""
                    }`}
                  />
                  Overview
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={getLinkClass("/nbfc")}>
              <img
                src="/images/icons/nbfc_sidebar.svg"
                alt="overview"
                className={cn(
                  "mr-2 w-6",
                  location.pathname.includes("/nbfc") ||
                    location.pathname === "/"
                    ? "filter-blue"
                    : "filter-gray"
                )}
              />
              NBFC Onboarding
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upload-pool-file"
              className={({ isActive }) =>
                `flex items-center px-4 py-1 rounded-full ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-bold"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-600 hover:font-bold"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src="/images/icons/upload_pool_file_sidebar.svg"
                    alt="applications list"
                    className={`mr-2 w-6  hover:filter-blue ${
                      isActive ? "filter-blue" : ""
                    }`}
                  />
                  Upload Pool File
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `flex items-center px-4 py-1 rounded-full ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-bold"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-600 hover:font-bold"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src="/images/icons/history_sidebar.svg"
                    alt="history"
                    className={`mr-2 w-6  hover:filter-blue ${
                      isActive ? "filter-blue" : ""
                    }`}
                  />
                  History
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manager-user"
              className={({ isActive }) =>
                `flex items-center px-4 py-1 rounded-full ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-bold"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-600 hover:font-bold"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src="/images/icons/manager_user_sidebar.svg"
                    alt="manager user"
                    className={`mr-2 w-6  hover:filter-blue ${
                      isActive ? "filter-blue" : ""
                    }`}
                  />
                  Manager User
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `flex items-center px-4 py-1 rounded-full ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-bold"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-600 hover:font-bold"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src="/images/icons/reports_sidebar.svg"
                    alt="reports"
                    className={`mr-2 w-6  hover:filter-blue ${
                      isActive ? "filter-blue" : ""
                    }`}
                  />
                  Reports
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `flex items-center px-4 py-1 rounded-full ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-bold"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-600 hover:font-bold"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src="/images/icons/help_sidebar.svg"
                    alt="reports"
                    className={`mr-2 w-6  hover:filter-blue ${
                      isActive ? "filter-blue" : ""
                    }`}
                  />
                  Help
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
