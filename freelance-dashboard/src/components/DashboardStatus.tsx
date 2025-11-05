import React from "react";
import { useAppState } from "../state/context";
import { countPaidUnpaid } from "../utils";


export const DashboardStats: React.FC = () => {
const { state } = useAppState();
const { paid, unpaid } = countPaidUnpaid(state.projects);


return (
<div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
<div style={{ padding: 12, borderRadius: 8, border: "1px solid #ddd" }}>
<div>Total Projects</div>
<div style={{ fontSize: 18, fontWeight: 600 }}>{state.projects.length}</div>
</div>
<div style={{ padding: 12, borderRadius: 8, border: "1px solid #ddd" }}>
<div>Paid</div>
<div style={{ fontSize: 18, fontWeight: 600 }}>{paid}</div>
</div>
<div style={{ padding: 12, borderRadius: 8, border: "1px solid #ddd" }}>
<div>Unpaid</div>
<div style={{ fontSize: 18, fontWeight: 600 }}>{unpaid}</div>
</div>
</div>
);
};