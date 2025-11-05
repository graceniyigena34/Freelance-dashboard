export function countPaidUnpaid(projects) { const paid = projects.filter((p) => p.paymentStatus === 'paid').length; const unpaid = projects.length - paid; return { paid, unpaid }; }
export function findClientById(state, id) { if (!id)
    return undefined; return state.clients.find((c) => c.id === id); }
export function recordPayment(state, payment) { const project = state.projects.find((p) => p.id === payment.projectId); if (!project)
    return { ok: false, message: 'Project not found' }; if (payment.amount <= 0)
    return { ok: false, message: 'Amount must be positive' }; if (Number.isNaN(Date.parse(payment.date)))
    return { ok: false, message: 'Invalid date' }; return { ok: true }; }
export function filterProjects(projects, opts) { return projects.filter((p) => { if (opts?.status && p.status !== opts.status)
    return false; if (opts?.payment && p.paymentStatus !== opts.payment)
    return false; return true; }); }
export function searchByName(items, q) { const low = q.trim().toLowerCase(); return items.filter((it) => (it.name ?? it.title ?? '').toLowerCase().includes(low)); }
