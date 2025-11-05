import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../state/ThemeContext";

export const Navbar: React.FC = () => {
  const { darkMode } = useTheme();

  // Use CSS variables from ThemeProvider
  const navbarStyle: React.CSSProperties = {
    backgroundColor: darkMode ? "#333" : "#ffffff",
    color: darkMode ? "#f0f0f0" : "#000000",
    padding: "16px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  };

  const linkStyle = (isActive: boolean): React.CSSProperties => ({
    margin: "0 8px",
    fontWeight: isActive ? 600 : 400,
    color: darkMode ? (isActive ? "#6366F1" : "#f0f0f0") : isActive ? "#4F46E5" : "#4B5563",
    textDecoration: "none",
    transition: "all 0.3s ease",
  });

  return (
    <header style={navbarStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: navbarStyle.color }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#4F46E5",
              color: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            FD
          </div>
          <div>
            <div style={{ fontSize: "16px", fontWeight: 600 }}>Freelance Dashboard</div>
            <div style={{ fontSize: "12px", color: darkMode ? "#ccc" : "#6B7280" }}>
              Manage clients, projects & payments
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", alignItems: "center" }}>
          {["/clients", "/dashboard", "/payments"].map((path) => {
            const name = path.replace("/", "").charAt(0).toUpperCase() + path.slice(2);
            return (
              <NavLink
                key={path}
                to={path}
                style={({ isActive }) => linkStyle(isActive)}
              >
                {name}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
