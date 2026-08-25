# NEONDO application architecture

This branch is the source of truth for the NEONDO web app and future native clients.

## Product domains
- auth: Supabase Auth, protected sessions, email verification, password reset, OAuth
- people: public professional profiles, experience, skills, languages, country, portfolio, verification
- companies: company profiles, team membership, owner/manager/recruiter/staff permissions
- availability: date/time availability, preferences, locations, roles, rate preferences
- jobs: jobs, shifts, applications, shortlisting, hiring and schedules
- events: first-party events plus moderated discovery imports from permitted sources
- social: posts, media, mentions, likes, comments, follows, reports
- messaging: realtime conversations tied to people, companies, jobs and events
- private workspace: documents, contracts, payslips, payroll and tax data; never public
- moderation: user/job/event/post review, reports, verification and audit actions

## UI principles
- Use semantic design tokens instead of hard-coded theme-dependent colors.
- Every public profile must remain readable in light and dark mode.
- Verification and role crowns are NEONDO vector/UI components, never emoji.
- Country and language indicators use accessible flag assets with text fallbacks.
- Availability is a calendar-first workflow and is directly usable by job matching.
- Event discovery is city-first and combines events with relevant NEONDO work opportunities.

## Event discovery contract
Every imported event must retain:
- source name and source URL
- canonical event URL
- external event ID when available
- title, description, start/end time and timezone
- venue name/address/city/coordinates
- genres, event type and artists when available
- image URL plus provenance/attribution
- deduplication key
- moderation/publishing status

NEONDO must only ingest data through permitted APIs, feeds, widgets, partnerships or other sources whose terms allow the intended use. Never assume permission to scrape or republish a third-party catalogue.

## Native-app readiness
Business logic must be exposed through stable domain APIs/services so future iOS/Android clients can reuse authentication, profiles, availability, jobs, events, social and messaging without duplicating rules in a mobile UI.
