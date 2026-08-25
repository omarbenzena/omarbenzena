import type { EventCard } from '../api/contracts';

export interface EventSourceAdapter {
  readonly name: string;
  discover(city: string, from: string, to: string): Promise<Partial<EventCard>[]>;
}

export function normalizeEvents(items: Partial<EventCard>[]): EventCard[] {
  const seen = new Set<string>();
  return items.filter(item => {
    if (!item.title || !item.startsAt || !item.city || !item.sourceName || !item.sourceUrl) return false;
    const key = `${item.title.trim().toLowerCase()}|${item.startsAt}|${item.venueName ?? ''}|${item.city.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }) as EventCard[];
}

export async function discoverEvents(
  adapters: EventSourceAdapter[],
  city: string,
  from: string,
  to: string,
): Promise<EventCard[]> {
  const results = await Promise.allSettled(adapters.map(a => a.discover(city, from, to)));
  return normalizeEvents(results.flatMap(r => r.status === 'fulfilled' ? r.value : []));
}
