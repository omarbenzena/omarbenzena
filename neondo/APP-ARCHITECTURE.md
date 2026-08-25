# NEONDO App Architecture

The current NEONDO build is a working visual prototype with Supabase integration. The next stage is a progressive migration to a component-based application without losing the existing visual identity.

## App domains

- Auth: email/password, Google, Apple, verification, password reset, protected routes.
- People: professional profiles, country/language flags, roles, skills, experience, portfolios, verification.
- Companies: company pages, team members and role permissions.
- Availability: visual calendar, status, time windows, location/role/rate preferences.
- Work: jobs, applications, matching, shifts and schedules.
- Events: first-party events plus moderated discovered events.
- Social: feed, photos, videos, mentions, follows, comments, shares and reports.
- Messaging: realtime conversations tied to a person, booking, job or event.
- Private workspace: documents, payroll, tax and employment records.
- Trust: verification, moderation, reporting and admin controls.

## Design rules

- Preserve NEONDO's paper/black/lime/pink/blue visual language.
- Use semantic theme tokens for every foreground/background/border combination.
- Light and dark themes must pass contrast checks.
- Crowns, verification badges, role markers and status indicators are custom NEONDO UI components, never emoji substitutes.
- Keep interactions simple: tap a card, see the relevant detail, take one clear action.
- Build mobile-first responsive layouts so the web app can later become a PWA/native shell.

## Data rules

- Public profile data and private employment/financial data are separate.
- Tax numbers, banking information, IDs, contracts and payslips are never returned by public profile queries.
- Supabase RLS is mandatory on exposed tables.
- Authorization decisions must not rely on user-editable `raw_user_meta_data`; use trusted database/app metadata.
- The browser uses only the publishable Supabase key. Service-role/secret credentials stay server-side.

## Event discovery

`event_sources` and `discovered_events` provide a source-normalization layer. External events remain distinct from first-party `events` until they are accepted/published through the appropriate workflow. Every imported event keeps source identity, canonical URL, attribution, image provenance and raw-source metadata.

This makes NEONDO ready for city discovery without coupling the product to a single external platform.

## Migration strategy

1. Keep the existing homepage as the visual reference.
2. Extract theme/design tokens.
3. Extract navigation and app shell.
4. Move authentication and data access into reusable modules.
5. Move profile and availability screens.
6. Move jobs/events/social/messaging/private workspace domains.
7. Add event discovery adapters and background ingestion.
8. Add realtime notifications/chat.
9. Add PWA/app packaging after the web application is stable.
