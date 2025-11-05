import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded flex items-center justify-center font-bold">
              FD
            </div>
            <div>
              <div className="text-lg font-semibold">Freelance Dashboard</div>
              <div className="text-xs text-gray-500">
                Manage clients, projects & payments
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-medium"
                  : "text-gray-600 hover:text-indigo-500 transition"
              }
            >
              Clients
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-medium"
                  : "text-gray-600 hover:text-indigo-500 transition"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/payments"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-medium"
                  : "text-gray-600 hover:text-indigo-500 transition"
              }
            >
              Payments
            </NavLink>
            <Link
              to="/"
              className="ml-4 px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
