import React, { useState } from "react";
import { useAppDispatch } from "../state/context";

export const ProjectForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState({
    title: "",
    clientId: "",
    budget: "",
    status: "pending",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
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
        status: form.status as "pending" | "in-progress" | "completed",
        paymentStatus: "unpaid",
      },
    });

    setForm({ title: "", clientId: "", budget: "", status: "pending" });
    alert("✅ Project added successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mx-auto mt-8"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Add New Project
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Project Title
        </label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
          placeholder="Enter project title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Client ID
        </label>
        <input
          type="text"
          name="clientId"
          value={form.clientId}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
          placeholder="Enter client ID"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Budget (USD)
        </label>
        <input
          type="number"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
          placeholder="Enter project budget"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Status
        </label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all"
      >
        Add Project
      </button>
    </form>
  );
};