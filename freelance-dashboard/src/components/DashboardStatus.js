import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppState } from "../state/context";
import { countPaidUnpaid } from "../utils";
export const DashboardStats = () => {
    const { state } = useAppState();
    const { paid, unpaid } = countPaidUnpaid(state.projects);
    return (_jsxs("div", { style: { display: "flex", gap: 12, marginBottom: 16 }, children: [_jsxs("div", { style: { padding: 12, borderRadius: 8, border: "1px solid #ddd" }, children: [_jsx("div", { children: "Total Projects" }), _jsx("div", { style: { fontSize: 18, fontWeight: 600 }, children: state.projects.length })] }), _jsxs("div", { style: { padding: 12, borderRadius: 8, border: "1px solid #ddd" }, children: [_jsx("div", { children: "Paid" }), _jsx("div", { style: { fontSize: 18, fontWeight: 600 }, children: paid })] }), _jsxs("div", { style: { padding: 12, borderRadius: 8, border: "1px solid #ddd" }, children: [_jsx("div", { children: "Unpaid" }), _jsx("div", { style: { fontSize: 18, fontWeight: 600 }, children: unpaid })] })] }));
};
