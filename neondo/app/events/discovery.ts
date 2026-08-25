import type { DiscoveredEvent, EventSource } from '../core/types';

export interface EventDiscoveryFilters {
  city: string; from?: string; to?: string; genres?: string[];
  eventTypes?: string[]; venue?: string; artist?: string;
}
export interface EventDiscoveryAdapter {
  source: EventSource;
  discover(filters: EventDiscoveryFilters): Promise<DiscoveredEvent[]>;
}

export function normalizeEvent(input: DiscoveredEvent): DiscoveredEvent {
  return {...input, title: input.title.trim(), city: input.city.trim(),
    genres: [...new Set(input.genres.map(x => x.trim()).filter(Boolean))],
    artists: [...new Set(input.artists.map(x => x.trim()).filter(Boolean))]};
}
export function eventDeduplicationKey(event: Pick<DiscoveredEvent,'city'|'title'|'startAt'|'venueName'>) {
  return [event.city,event.title,event.startAt,event.venueName??''].join('|').toLowerCase().replace(/\s+/g,' ').trim();
}

/** Apply UI filters after server-side discovery; never use this as authorization. */
export function matchesEventFilters(event: DiscoveredEvent, filters: EventDiscoveryFilters) {
  if (filters.genres?.length && !filters.genres.some(g => event.genres.some(x => x.toLowerCase() === g.toLowerCase()))) return false;
  if (filters.artist && !event.artists.some(a => a.toLowerCase().includes(filters.artist!.toLowerCase()))) return false;
  if (filters.venue && !event.venueName?.toLowerCase().includes(filters.venue.toLowerCase())) return false;
  return true;
}
