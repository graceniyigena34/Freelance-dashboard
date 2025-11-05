import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { AppState, Client, Project, Payment } from "../types";
import { Action } from "./actions";


const initialState: AppState = {
clients: [
{ id: "c1", name: "Acme Co.", country: "Rwanda", email: "hello@acme.com" },
{ id: "c2", name: "Beta LLC", country: "Kenya" },
],
projects: [
{ id: "p1", clientId: "c1", title: "Website Redesign", budget: 1500, status: "in-progress", paymentStatus: "unpaid" },
{ id: "p2", clientId: "c2", title: "Mobile App", budget: 3000, status: "pending", paymentStatus: "paid" },
],
payments: [
{ projectId: "p2", amount: 3000, date: new Date().toISOString() },
],
};


function reducer(state: AppState, action: Action): AppState {
switch (action.type) {
case "ADD_PAYMENT": {
const { payment } = action.payload;
// Mark related project as paid (type-safe)
const projects = state.projects.map((proj) =>
proj.id === payment.projectId ? { ...proj, paymentStatus: "paid" as const } : proj
);


return { ...state, payments: [...state.payments, payment], projects };
}
case "MARK_PROJECT_PAID": {
const { projectId } = action.payload;
const projects = state.projects.map((p) => (p.id === projectId ? { ...p, paymentStatus: "paid" } : p));
return { ...state, projects };
}
case "ADD_CLIENT": {
return { ...state, clients: [...state.clients, action.payload.client] };
}
case "ADD_PROJECT": {
return { ...state, projects: [...state.projects, action.payload.project] };
}
case "UPDATE_PROJECT_STATUS": {
const { projectId, status } = action.payload;
const projects = state.projects.map((p) => (p.id === projectId ? { ...p, status } : p));
return { ...state, projects };
}
default:
return state;
}
}


const StateContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | undefined>(undefined);


export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState);
return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};


export function useAppState() {
const ctx = useContext(StateContext);
if (!ctx) throw new Error("useAppState must be used within AppProvider");
return ctx;
}