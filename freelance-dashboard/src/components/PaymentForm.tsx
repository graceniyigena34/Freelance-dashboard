import React, { useState } from "react";
import { useAppState, useAppDispatch } from "../state/context";
import { Payment } from "../types";

export const PaymentForm: React.FC = () => {
  const { state } = useAppState();
  const dispatch = useAppDispatch();

  const [projectId, setProjectId] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectId || !amount || !date) {
      alert("Please fill all fields!");
      return;
    }

    const payment: Payment = {
      projectId,
      amount: Number(amount),
      date,
    };

    dispatch({ type: "ADD_PAYMENT", payload: { payment } });

    // reset form
    setProjectId("");
    setAmount("");
    setDate("");
    alert("✅ Payment recorded successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Record Payment
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Select Project
        </label>
        <select
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
        >
          <option value="">-- Select Project --</option>
          {state.projects
            .filter((p) => p.paymentStatus === "unpaid")
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} ({p.status})
              </option>
            ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Amount (USD)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
          placeholder="Enter payment amount"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-all"
      >
        Record Payment
      </button>
    </form>
  );
};
