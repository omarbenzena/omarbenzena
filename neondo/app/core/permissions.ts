import type { UserRole } from '../api/contracts';

const rank: Record<UserRole, number> = { worker: 1, staff: 2, recruiter: 3, manager: 4, owner: 5 };

export function canManageTeam(role: UserRole) { return rank[role] >= rank.manager; }
export function canManageCompany(role: UserRole) { return rank[role] >= rank.owner; }
export function canRecruit(role: UserRole) { return rank[role] >= rank.recruiter; }
export function canPublishJobs(role: UserRole) { return rank[role] >= rank.recruiter; }

export function roleLabel(role: UserRole) {
  return ({ owner: 'Owner', manager: 'Manager', recruiter: 'Recruiter', staff: 'Staff', worker: 'Worker' })[role];
}
