import React from 'react'
import { Link } from 'react-router-dom'


export const Home: React.FC = () => {
return (
<div className="max-w-5xl mx-auto p-8 text-center">
<h1 className="text-4xl font-bold mb-4">Freelance Management Dashboard</h1>
<p className="text-lg text-gray-600 mb-6">Keep clients, projects and payments organized — built with React, TypeScript and Tailwind.</p>
<div className="flex justify-center gap-4">
<Link to="/dashboard" className="px-6 py-3 bg-indigo-600 text-white rounded-md">Go to Dashboard</Link>
<Link to="/clients" className="px-6 py-3 border rounded-md">View Clients</Link>
</div>


<section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="card text-center">
<h3 className="font-semibold">Projects</h3>
<p className="text-sm text-gray-500 mt-2">Track status and budgets</p>
</div>
<div className="card text-center">
<h3 className="font-semibold">Payments</h3>
<p className="text-sm text-gray-500 mt-2">Record and reconcile payments</p>
</div>
<div className="card text-center">
<h3 className="font-semibold">Clients</h3>
<p className="text-sm text-gray-500 mt-2">Manage client contacts</p>
</div>
</section>
</div>
)
}