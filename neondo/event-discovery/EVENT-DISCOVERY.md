# NEONDO Event Discovery

NEONDO will have a city-first event discovery layer inspired by the best parts of RA Guide: discover events near you, filter by date/genre/type, see venue context, and jump to the original ticket/source page.

## Product behavior

1. Detect the user's selected city (with permission) or let them choose a city manually.
2. Pull events from approved/licensed sources through adapters.
3. Normalize every source into one `discovered_events` shape.
4. Deduplicate by source event ID first, then by canonical URL/content hash and a conservative title + venue + start-time match.
5. Enrich the event with venue coordinates, genre, artists, event type and a licensed/attributed image where permitted.
6. Keep the original source and ticket URL visible on the event page.
7. Show source attribution wherever third-party event data is displayed.
8. Expire events automatically after their end time and keep historical records separate from live discovery.

## Important source policy

NEONDO should **not blindly scrape or republish third-party sites**. Each source must have a permitted API, feed, partner agreement, embeddable listing, or explicit permission for the fields and images we use. For sources such as Resident Advisor, use their official integrations/embeds or a commercial/partner data arrangement where required instead of copying their database or images wholesale.

Resident Advisor currently offers event discovery by city/genre and an embeddable event-listing widget for promoters; its event pages are a useful product reference, not a permission to copy its catalogue. See the official RA documentation before enabling an RA adapter.

## Initial source categories

- Venue/club official calendars
- Promoter feeds and APIs
- Ticketing/partner APIs with redistribution rights
- iCal/ICS feeds
- Approved event platforms
- Manual company/organizer submissions

## Image strategy

Prefer, in order:

1. Event image supplied under an explicit redistribution/license right.
2. Official venue image where its usage rights permit it.
3. Licensed stock/editorial image.
4. A NEONDO-generated visual fallback based only on factual event metadata.

Do not download and permanently host third-party images merely because they are publicly visible. Store the source URL and attribution metadata.

## Event card

Every card should make these immediately scannable:

- Event image
- Event name
- Date/time
- City + venue
- Genre(s)
- Event type
- Featured artists
- Price/ticket status when supplied by the source
- Source badge
- `View event` / `Tickets` action

## Future personalization

Use follows, saved events, preferred genres, preferred venues, previous interactions and availability to rank events. Never infer sensitive traits. Location should be opt-in and replaceable with a manually selected city.
