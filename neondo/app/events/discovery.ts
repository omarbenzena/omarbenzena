import type { DiscoveredEvent, EventSource } from '../core/types';

export interface EventDiscoveryFilters {
  city: string;
  from?: string;
  to?: string;
  genres?: string[];
  eventTypes?: string[];
  venue?: string;
  artist?: string;
}

export interface EventDiscoveryAdapter {
  source: EventSource;
  discover(filters: EventDiscoveryFilters): Promise<DiscoveredEvent[]>;
}

/**
 * Normalize third-party/partner event records into NEONDO's canonical shape.
 * Adapters must only use sources that permit the intended use of their data.
 */
export function normalizeEvent(input: DiscoveredEvent): DiscoveredEvent {
  return {
    ...input,
    title: input.title.trim(),
    city: input.city.trim(),
    genres: [...new Set(input.genres.map((x) => x.trim()).filter(Boolean))],
    artists: [...new Set(input.artists.map((x) => x.trim()).filter(Boolean))],
  };
}

export function eventDeduplicationKey(event: Pick<DiscoveredEvent, 'city' | 'title' | 'startAt' | 'venueName'>) {
  return [event.city, event.title, event.startAt, event.venueName ?? '']
    .join('|')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}
