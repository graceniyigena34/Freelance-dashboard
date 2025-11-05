import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useAppDispatch } from "../state/context";
export const ProjectForm = () => {
    const dispatch = useAppDispatch();
    const [form, setForm] = useState({
        title: "",
        clientId: "",
        budget: "",
        status: "pending",
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.clientId || !form.budget) {
            alert("Please fill in all fields!");
            return;
        }
        dispatch({
            type: "ADD_PROJECT",
            payload: {
                id: Math.random().toString(36).substr(2, 9),
                title: form.title,
                clientId: form.clientId,
                budget: Number(form.budget),
                status: form.status,
                paymentStatus: "unpaid",
            },
        });
        setForm({ title: "", clientId: "", budget: "", status: "pending" });
        alert("✅ Project added successfully!");
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "bg-white shadow-lg rounded-xl p-6 w-full max-w-md mx-auto mt-8", children: [_jsx("h2", { className: "text-2xl font-semibold text-gray-700 mb-4 text-center", children: "Add New Project" }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-600 mb-1", children: "Project Title" }), _jsx("input", { type: "text", name: "title", value: form.title, onChange: handleChange, className: "w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300", placeholder: "Enter project title" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-600 mb-1", children: "Client ID" }), _jsx("input", { type: "text", name: "clientId", value: form.clientId, onChange: handleChange, className: "w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300", placeholder: "Enter client ID" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-600 mb-1", children: "Budget (USD)" }), _jsx("input", { type: "number", name: "budget", value: form.budget, onChange: handleChange, className: "w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300", placeholder: "Enter project budget" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-600 mb-1", children: "Status" }), _jsxs("select", { name: "status", value: form.status, onChange: handleChange, className: "w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300", children: [_jsx("option", { value: "pending", children: "Pending" }), _jsx("option", { value: "in-progress", children: "In Progress" }), _jsx("option", { value: "completed", children: "Completed" })] })] }), _jsx("button", { type: "submit", className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all", children: "Add Project" })] }));
};
