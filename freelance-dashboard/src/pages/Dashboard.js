import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useAppState } from '../state/context';
import { DashboardStats } from '../components/DashboardStatus';
import { ProjectList } from '../components/ProjectList';
import { ProjectForm } from '../components/Projectform';
import { ClientCard } from '../components/ClientCard';
export const DashboardPage = () => {
    const { state } = useAppState();
    const [projectQuery, setProjectQuery] = useState('');
    const projects = state.projects.filter((p) => p.title.toLowerCase().includes(projectQuery.toLowerCase()));
    return (_jsxs("div", { className: "max-w-7xl mx-auto p-6", children: [_jsx(DashboardStats, {}), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "lg:col-span-1 space-y-4", children: [_jsxs("div", { className: "card", children: [_jsx("h3", { className: "font-semibold mb-2", children: "Quick Clients" }), _jsx("div", { className: "space-y-3", children: state.clients.slice(0, 3).map(c => _jsx(ClientCard, { client: c }, c.id)) })] }), _jsx(ProjectForm, {})] }), _jsxs("div", { className: "lg:col-span-2", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h2", { className: "text-lg font-semibold", children: "Projects" }), _jsx("input", { className: "border rounded px-2 py-1", placeholder: "Search projects", value: projectQuery, onChange: (e) => setProjectQuery(e.target.value) })] }), _jsx(ProjectList, { projects: projects })] })] })] }));
};
