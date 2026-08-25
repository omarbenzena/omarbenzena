export type AccountRole = 'worker' | 'company' | 'admin';
export type CompanyMemberRole = 'owner' | 'manager' | 'recruiter' | 'staff';
export type AvailabilityStatus = 'available' | 'unavailable' | 'flexible';
export type EventStatus = 'pending' | 'published' | 'rejected' | 'cancelled';
export type EventSourceKind = 'official' | 'partner' | 'api' | 'feed' | 'submission';

export interface Profile {
  id: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  coverUrl?: string;
  bio?: string;
  countryCode?: string;
  city?: string;
  languages: string[];
  roles: string[];
  skills: string[];
  verified: boolean;
}

export interface AvailabilityWindow {
  id?: string;
  userId: string;
  date: string;
  startTime?: string;
  endTime?: string;
  status: AvailabilityStatus;
  city?: string;
  roles?: string[];
  minimumRate?: number;
}

export interface DiscoveredEvent {
  id: string;
  sourceId: string;
  sourceEventId?: string;
  canonicalUrl?: string;
  title: string;
  description?: string;
  startAt: string;
  endAt?: string;
  city: string;
  venueName?: string;
  venueAddress?: string;
  latitude?: number;
  longitude?: number;
  genres: string[];
  eventType?: string;
  artists: string[];
  imageUrl?: string;
  imageAttribution?: string;
  status: EventStatus;
}

export interface EventSource {
  id: string;
  name: string;
  kind: EventSourceKind;
  baseUrl?: string;
  enabled: boolean;
}
