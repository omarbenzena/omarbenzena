export const PROFESSIONAL_ROLES = [
  'stagehand', 'dj', 'musician', 'producer', 'sound_engineer', 'lighting_technician',
  'camera_operator', 'videographer', 'photographer', 'bartender', 'service_crew',
  'security', 'host', 'performer', 'artist', 'promoter', 'event_manager',
  'production_manager', 'designer', 'makeup_artist', 'stylist', 'model'
] as const;

export type ProfessionalRole = typeof PROFESSIONAL_ROLES[number];

export function isProfessionalRole(value: string): value is ProfessionalRole {
  return (PROFESSIONAL_ROLES as readonly string[]).includes(value);
}
