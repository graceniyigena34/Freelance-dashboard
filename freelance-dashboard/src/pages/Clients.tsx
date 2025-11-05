import React, { useState } from "react";
import { useAppState, useAppDispatch } from "../state/context";
import { ClientCard } from "../components/ClientCard";
import { v4 as uuidv4 } from "uuid";

export const ClientsPage: React.FC = () => {
  const { state } = useAppState();
  const dispatch = useAppDispatch();

  const [q, setQ] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !country.trim()) {
      return alert("Name and country are required!");
    }

    const client = {
      id: uuidv4(),
      name: name.trim(),
      country: country.trim(),
      email: email.trim() || undefined,
    };

    dispatch({ types: "ADD_CLIENT", payload: { client } });

    setName("");
    setCountry("");
    setEmail("");
  };

  const clients = state.clients.filter((c) =>
    c.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Clients</h2>
        <input
          className="border rounded px-2 py-1"
          placeholder="Search clients"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {clients.map((c) => (
          <ClientCard key={c.id} client={c} />
        ))}
      </div>

      {/* Add Client Form */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="font-semibold text-lg mb-4">Add Client</h3>
        <form
          onSubmit={submit}
          className="grid grid-cols-1 gap-3"
        >
          <input
            className="border rounded px-3 py-2 focus:ring focus:ring-indigo-300"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border rounded px-3 py-2 focus:ring focus:ring-indigo-300"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            className="border rounded px-3 py-2 focus:ring focus:ring-indigo-300"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition"
          >
            Add Client
          </button>
        </form>
      </div>
    </div>
  );
};
