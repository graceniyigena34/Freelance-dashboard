import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppState } from '../state/context';
import { PaymentForm } from '../components/PaymentForm';
export const PaymentsPage = () => {
    const { state } = useAppState();
    return (_jsxs("div", { className: "max-w-6xl mx-auto p-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Payments" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsx(PaymentForm, {}), _jsxs("div", { className: "card", children: [_jsx("h3", { className: "font-semibold mb-2", children: "All Payments" }), _jsx("ul", { className: "space-y-2", children: state.payments.map((p, i) => (_jsxs("li", { className: "flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("div", { className: "font-medium", children: p.projectId }), _jsx("div", { className: "text-xs text-gray-500", children: new Date(p.date).toLocaleString() })] }), _jsxs("div", { className: "text-sm font-semibold", children: ["$", p.amount] })] }, i))) })] })] })] }));
};
