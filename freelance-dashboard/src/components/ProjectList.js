import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppState, useAppDispatch } from "../state/context";
export const ProjectList = ({ projects }) => {
    const { state } = useAppState();
    const dispatch = useAppDispatch();
    return (_jsx("div", { className: "space-y-4", children: projects.map((p) => {
            const client = state.clients.find((c) => c.id === p.clientId);
            return (_jsxs("div", { className: "border border-gray-200 rounded-lg p-4 shadow-sm", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("strong", { className: "text-lg", children: p.title }), _jsx("span", { className: "text-sm text-gray-500", children: client?.name ?? "Client not found" })] }), _jsxs("div", { className: "mb-1", children: ["Status: ", _jsx("em", { children: p.status })] }), _jsxs("div", { children: ["Payment:", " ", _jsx("strong", { className: p.paymentStatus === "paid" ? "text-green-600" : "text-red-600", children: p.paymentStatus })] }), p.paymentStatus === "unpaid" && (_jsx("button", { onClick: () => dispatch({
                            type: "MARK_PROJECT_PAID",
                            payload: { projectId: p.id },
                        }), className: "mt-3 px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition", children: "Mark as Paid" }))] }, p.id));
        }) }));
};
