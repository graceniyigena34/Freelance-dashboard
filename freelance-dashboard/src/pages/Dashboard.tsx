import React, { useState } from 'react'
import { useAppState } from '../state/context'
import { DashboardStats } from '../components/DashboardStatus'
import { ProjectList } from '../components/ProjectList'
import { ProjectForm } from '../components/Projectform'
import { ClientCard } from '../components/ClientCard'


export const DashboardPage: React.FC = () => {
const { state } = useAppState()
const [projectQuery, setProjectQuery] = useState('')
const projects = state.projects.filter((p) => p.title.toLowerCase().includes(projectQuery.toLowerCase()))


return (
<div className="max-w-7xl mx-auto p-6">
<DashboardStats />
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-1 space-y-4">
<div className="card">
<h3 className="font-semibold mb-2">Quick Clients</h3>
<div className="space-y-3">
{state.clients.slice(0,3).map(c => <ClientCard key={c.id} client={c} />)}
</div>
</div>


<ProjectForm />
</div>


<div className="lg:col-span-2">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold">Projects</h2>
<input className="border rounded px-2 py-1" placeholder="Search projects" value={projectQuery} onChange={(e)=> setProjectQuery(e.target.value)} />
</div>


<ProjectList projects={projects} />
</div>
</div>
</div>
)
}