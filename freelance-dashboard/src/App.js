import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./state/context";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { DashboardPage } from "./pages/Dashboard";
import { ClientsPage } from "./pages/Clients";
import { PaymentsPage } from "./pages/Payments";
import { ThemeProvider } from "./state/ThemeContext"; // import theme context
const AppContent = () => {
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(Navbar, {}), _jsx("main", { className: "flex-1 py-6", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(DashboardPage, {}) }), _jsx(Route, { path: "/clients", element: _jsx(ClientsPage, {}) }), _jsx(Route, { path: "/payments", element: _jsx(PaymentsPage, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }) })] }));
};
const App = () => {
    return (_jsx(ThemeProvider, { children: _jsx(AppProvider, { children: _jsx(AppContent, {}) }) }));
};
export default App;
