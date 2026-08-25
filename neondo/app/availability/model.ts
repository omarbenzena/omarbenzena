import type { AvailabilitySlot, AvailabilityStatus, Id } from '../api/contracts';

export interface AvailabilityPreferences {
  profileId: Id;
  preferredRoles: string[];
  preferredLocations: string[];
  minimumHourlyRate?: number;
  weekend: boolean;
  nights: boolean;
}

export function availabilityLabel(status: AvailabilityStatus): string {
  return ({ available: 'Available', unavailable: 'Unavailable', flexible: 'Flexible' })[status];
}

export function slotOverlaps(a: Pick<AvailabilitySlot, 'startsAt' | 'endsAt'>, b: Pick<AvailabilitySlot, 'startsAt' | 'endsAt'>): boolean {
  return new Date(a.startsAt).getTime() < new Date(b.endsAt).getTime()
    && new Date(b.startsAt).getTime() < new Date(a.endsAt).getTime();
}
