import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import { sidebar } from "@/lib/constants/sidebar"; // adjust path as needed
import { cn } from "@/lib/utils";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActivePath = (to: string, match?: string[]) => {
  if (match) {
    return match.some((m) => location.pathname === m || location.pathname.startsWith(m + "/"));
  }
  return location.pathname === to;
};

  return (
    <aside className="sticky top-0 h-screen min-w-64 bg-white p-4">
      <div className="mb-8">
        <NavLink to="/" className="block">
          <img
            src="/images/Bank_of_Maharashtra_logo.svg"
            alt="Bank of Maharashtra Logo"
            className="w-48 h-auto"
          />
        </NavLink>
      </div>

      <nav>
        <ul className="space-y-1">
          {sidebar.map(({ to, label, icon, match }) => {
            const isActive = isActivePath(to, match);
            return (
              <li key={to}>
                <NavLink
                  to={to}
                  className={`flex items-center px-4 py-1 rounded-full ${
                    isActive
                      ? "bg-blue-100 text-blue-600 font-bold"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-600 hover:font-bold"
                  }`}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={cn(
                      "mr-2 w-6 hover:filter-blue",
                      isActive ? "filter-blue" : ""
                    )}
                  />
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
