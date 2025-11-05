import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./state/context";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { DashboardPage } from "./pages/Dashboard";
import { ClientsPage } from "./pages/Clients";
import { PaymentsPage } from "./pages/Payments";
import { ThemeProvider } from "./state/ThemeContext"; // import theme context

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
