import React from "react";
import { Project } from "../types";
import { useAppState, useAppDispatch } from "../state/context";

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const { state } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <div className="space-y-4">
      {projects.map((p) => {
        const client = state.clients.find((c) => c.id === p.clientId);

        return (
          <div
            key={p.id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <strong className="text-lg">{p.title}</strong>
              <span className="text-sm text-gray-500">
                {client?.name ?? "Client not found"}
              </span>
            </div>

            <div className="mb-1">
              Status: <em>{p.status}</em>
            </div>
            <div>
              Payment:{" "}
              <strong
                className={
                  p.paymentStatus === "paid" ? "text-green-600" : "text-red-600"
                }
              >
                {p.paymentStatus}
              </strong>
            </div>

            {p.paymentStatus === "unpaid" && (
              <button
                onClick={() =>
                  dispatch({
                    type: "MARK_PROJECT_PAID",
                    payload: { projectId: p.id },
                  })
                }
                className="mt-3 px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition"
              >
                Mark as Paid
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
