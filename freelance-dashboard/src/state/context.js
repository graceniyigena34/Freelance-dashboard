import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useReducer, useContext } from "react";
// ------------------- Initial State -------------------
const initialState = {
    clients: [],
    projects: [],
    payments: [],
};
// ------------------- Reducer -------------------
const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CLIENT":
            return { ...state, clients: [...state.clients, action.payload] };
        case "ADD_PROJECT":
            return { ...state, projects: [...state.projects, action.payload] };
        case "ADD_PAYMENT": {
            const payment = action.payload;
            const updatedProjects = state.projects.map((p) => p.id === payment.projectId
                ? { ...p, paymentStatus: "paid" }
                : p);
            return {
                ...state,
                projects: updatedProjects,
                payments: [...state.payments, payment],
            };
        }
        case "MARK_PROJECT_PAID": {
            const updatedProjects = state.projects.map((p) => p.id === action.payload.projectId
                ? { ...p, paymentStatus: "paid" }
                : p);
            return { ...state, projects: updatedProjects };
        }
        default:
            return state;
    }
};
// ------------------- Context -------------------
const AppStateContext = createContext(undefined);
const AppDispatchContext = createContext(undefined);
// ------------------- Provider -------------------
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (_jsx(AppStateContext.Provider, { value: state, children: _jsx(AppDispatchContext.Provider, { value: dispatch, children: children }) }));
};
// ------------------- Custom Hooks -------------------
export const useAppState = () => {
    const context = useContext(AppStateContext);
    if (!context) {
        throw new Error("useAppState must be used within AppProvider");
    }
    return { state: context };
};
export const useAppDispatch = () => {
    const context = useContext(AppDispatchContext);
    if (!context) {
        throw new Error("useAppDispatch must be used within AppProvider");
    }
    return context;
};
