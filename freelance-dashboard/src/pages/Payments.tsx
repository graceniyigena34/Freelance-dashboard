import React from 'react'
import { useAppState } from '../state/context'
import { PaymentForm } from '../components/PaymentForm'


export const PaymentsPage: React.FC = () => {
const { state } = useAppState()
return (
<div className="max-w-6xl mx-auto p-6">
<h2 className="text-xl font-semibold mb-4">Payments</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<PaymentForm />
<div className="card">
<h3 className="font-semibold mb-2">All Payments</h3>
<ul className="space-y-2">
{state.payments.map((p, i) => (
<li key={i} className="flex justify-between items-center">
<div>
<div className="font-medium">{p.projectId}</div>
<div className="text-xs text-gray-500">{new Date(p.date).toLocaleString()}</div>
</div>
<div className="text-sm font-semibold">${p.amount}</div>
</li>
))}
</ul>
</div>
</div>
</div>
)
}