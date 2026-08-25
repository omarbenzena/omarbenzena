export type Id = string;

export type UserRole = 'owner' | 'manager' | 'recruiter' | 'staff' | 'worker';
export type VerificationState = 'unverified' | 'pending' | 'verified';
export type AvailabilityStatus = 'available' | 'unavailable' | 'flexible';

export interface Profile {
  id: Id;
  username: string;
  displayName: string;
  avatarUrl?: string;
  coverUrl?: string;
  countryCode?: string;
  languages: string[];
  roles: string[];
  skills: string[];
  bio?: string;
  verification: VerificationState;
}

export interface AvailabilitySlot {
  id: Id;
  profileId: Id;
  startsAt: string;
  endsAt: string;
  status: AvailabilityStatus;
  location?: string;
}

export interface EventCard {
  id: Id;
  title: string;
  startsAt: string;
  venueName?: string;
  city: string;
  genres: string[];
  artists: string[];
  imageUrl?: string;
  sourceName: string;
  sourceUrl: string;
  ticketUrl?: string;
}

export interface JobCard {
  id: Id;
  eventId?: Id;
  companyId: Id;
  title: string;
  city: string;
  startsAt: string;
  endsAt?: string;
  roles: string[];
  hourlyRate?: number;
}

export interface ApiEnvelope<T> {
  data: T;
  error?: { code: string; message: string };
}
