# NEONDO application layer

This folder is the domain layer for the eventual component-based NEONDO app. The current production prototype remains in `index.html`; new business logic should be placed here first so the future web/mobile clients share the same contracts.

## Domains

- `core/` — shared types and semantic design tokens
- `events/` — city-first event discovery, normalization and deduplication
- `profiles/` — professional identity, verification and role permissions
- `availability/` — calendar and worker availability
- `work/` — jobs, applications, shifts and scheduling
- `social/` — posts, mentions, media, follows and moderation
- `messaging/` — conversations and realtime message contracts
- `private/` — documents, payroll, tax and employment data; never expose these through public profile queries

## Architecture rule

Business logic must be independent of the UI. Supabase access should live behind small services/repositories so a future native client can call the same backend without copying business rules.
