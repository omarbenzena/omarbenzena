import type { Id, JobCard } from '../api/contracts';

export type ApplicationStatus = 'draft' | 'submitted' | 'reviewing' | 'accepted' | 'rejected' | 'withdrawn';

export interface JobApplication {
  id: Id;
  jobId: Id;
  applicantId: Id;
  status: ApplicationStatus;
  message?: string;
  createdAt: string;
}

export interface ShiftAssignment {
  id: Id;
  jobId: Id;
  workerId: Id;
  startsAt: string;
  endsAt: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
}

export function jobMatchesPreferences(job: JobCard, preferredRoles: string[], preferredLocations: string[], minimumHourlyRate?: number): boolean {
  const roleMatch = preferredRoles.length === 0 || job.roles.some(role => preferredRoles.includes(role));
  const locationMatch = preferredLocations.length === 0 || preferredLocations.some(location => location.toLowerCase() === job.city.toLowerCase());
  const rateMatch = minimumHourlyRate == null || (job.hourlyRate ?? 0) >= minimumHourlyRate;
  return roleMatch && locationMatch && rateMatch;
}
