import { Client, Project, Payment } from '../types'
export type Action =
| { type: 'ADD_PAYMENT'; payload: { payment: Payment } }
| { type: 'MARK_PROJECT_PAID'; payload: { projectId: string } }
| { type: 'ADD_CLIENT'; payload: { client: Client } }
| { type: 'ADD_PROJECT'; payload: { project: Project } }
| { type: 'UPDATE_PROJECT_STATUS'; payload: { projectId: string; status: Project['status'] } }