import React, { useState } from "react";
import { useAppState } from "../state/context";
import { ClientCard } from "../components/ClientCard";
import { ProjectList } from "../components/ProjectList";
import { DashboardStats } from "../components/DashboardStatus";
import { recordPayment } from "../utils";


export const DashboardPage: React.FC = () => {
const { state, dispatch } = useAppState();
const [search, setSearch] = useState("");


const projects = state.projects;


function addPaymentExample() {
// Example of recording a new payment with validation
const payment = { projectId: "p1", amount: 1500, date: new Date().toISOString() };
const result = recordPayment(state, payment);
if (!result.ok) {
alert(result.message);
return;
}
dispatch({ type: "ADD_PAYMENT", payload: { payment } });
}


return (
<div style={{ padding: 20 }}>
<h1>Freelance Management Dashboard</h1>
<DashboardStats />


<div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 20 }}>
<div>
<h2>Clients</h2>
<input placeholder="Search clients" value={search} onChange={(e) => setSearch(e.target.value)} />
<div style={{ marginTop: 12 }}>
{state.clients
.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
.map((c) => (
<ClientCard client={c} key={c.id} />
))}
</div>
</div>


<div>
<h2>Projects</h2>
<ProjectList projects={projects} />


<h3 style={{ marginTop: 20 }}>Payments</h3>
<ul>
{state.payments.map((p, i) => (
<li key={i}>
{p.projectId} — {p.amount} — {new Date(p.date).toISOString()}
</li>
))}
</ul>


<div style={{ marginTop: 12 }}>
<button onClick={addPaymentExample}>Record Payment for p1 (example)</button>
</div>
</div>
</div>
</div>
);
};