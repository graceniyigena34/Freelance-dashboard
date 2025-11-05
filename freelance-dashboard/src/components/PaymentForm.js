import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useAppState, useAppDispatch } from "../state/context";
export const PaymentForm = () => {
    const { state } = useAppState();
    const dispatch = useAppDispatch();
    const [projectId, setProjectId] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!projectId || !amount || !date) {
            alert("Please fill all fields!");
            return;
        }
        const payment = {
            projectId,
            amount: Number(amount),
            date,
        };
        dispatch({ type: "ADD_PAYMENT", payload: payment });
        
        // reset form
        setProjectId("");
        setAmount("");
        setDate("");
        alert("✅ Payment recorded successfully!");
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "bg-white shadow-lg rounded-xl p-6 w-full max-w-md", children: [_jsx("h2", { className: "text-2xl font-semibold text-gray-700 mb-4 text-center", children: "Record Payment" }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-600 mb-1", children: "Select Project" }), _jsxs("select", { value: projectId, onChange: (e) => setProjectId(e.target.value), className: "w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300", children: [_jsx("option", { value: "", children: "-- Select Project --" }), state.projects
                                .filter((p) => p.paymentStatus === "unpaid")
                                .map((p) => (_jsxs("option", { value: p.id, children: [p.title, " (", p.status, ")"] }, p.id)))] })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-600 mb-1", children: "Amount (USD)" }), _jsx("input", { type: "number", value: amount, onChange: (e) => setAmount(e.target.value), className: "w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300", placeholder: "Enter payment amount" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-600 mb-1", children: "Date" }), _jsx("input", { type: "date", value: date, onChange: (e) => setDate(e.target.value), className: "w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300" })] }), _jsx("button", { type: "submit", className: "w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-all", children: "Record Payment" })] }));
};
