import React from "react";
import { AppProvider } from "./state/context";
import { DashboardPage } from "./pages/Dashboard";


const App: React.FC = () => {
return (
<AppProvider>
<div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
<aside style={{ width: 220, background: "#2c3e50", color: "#fff", padding: 20 }}>
<h2>Freelance Dashboard</h2>
<nav>
<div style={{ margin: "12px 0" }}>Home</div>
<div style={{ margin: "12px 0" }}>Projects</div>
<div style={{ margin: "12px 0" }}>Payments</div>
</nav>
</aside>
<main style={{ flex: 1, overflow: "auto" }}>
<DashboardPage />
</main>
</div>
</AppProvider>
);
};


export default App;