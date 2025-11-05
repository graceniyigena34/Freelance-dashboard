import React from "react";
import { Project } from "../types";
import { useAppState } from "../state/context";


export const ProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {
const { state, dispatch } = useAppState();


return (
<div>
{projects.map((p) => {
const client = state.clients.find((c) => c.id === p.clientId);
return (
<div key={p.id} style={{ border: "1px solid #eee", padding: 12, marginBottom: 8, borderRadius: 6 }}>
<strong>{p.title}</strong> — {client?.name ?? "Client not found"}
<div>Status: <em>{p.status}</em></div>
<div>Payment: <strong>{p.paymentStatus}</strong></div>
{p.paymentStatus === "unpaid" && (
<button
onClick={() => dispatch({ type: "MARK_PROJECT_PAID", payload: { projectId: p.id } })}
style={{ marginTop: 8 }}
>
Mark as Paid
</button>
)}
</div>
);
})}
</div>
);
};