import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { Client, Project, Payment, ProjectStatus, PaymentStatus } from "../types";

// ------------------- Types -------------------
interface AppState {
  clients: Client[];
  projects: Project[];
  payments: Payment[];
}

type Action =
  | { type: "ADD_CLIENT"; payload: Client } // <-- added client support
  | { type: "ADD_PROJECT"; payload: Project }
  | { type: "ADD_PAYMENT"; payload: Payment }
  | { type: "MARK_PROJECT_PAID"; payload: { projectId: string } };

// ------------------- Initial State -------------------
const initialState: AppState = {
  clients: [],
  projects: [],
  payments: [],
};

// ------------------- Reducer -------------------
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_CLIENT":
      return { ...state, clients: [...state.clients, action.payload] };

    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };

    case "ADD_PAYMENT": {
      const payment = action.payload;
      const updatedProjects = state.projects.map((p) =>
        p.id === payment.projectId
          ? { ...p, paymentStatus: "paid" as PaymentStatus }
          : p
      );
      return {
        ...state,
        projects: updatedProjects,
        payments: [...state.payments, payment],
      };
    }

    case "MARK_PROJECT_PAID": {
      const updatedProjects = state.projects.map((p) =>
        p.id === action.payload.projectId
          ? { ...p, paymentStatus: "paid" as PaymentStatus }
          : p
      );
      return { ...state, projects: updatedProjects };
    }

    default:
      return state;
  }
};

// ------------------- Context -------------------
const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined
);

// ------------------- Provider -------------------
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
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

