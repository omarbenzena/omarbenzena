import type { Id, Profile, VerificationState } from '../api/contracts';

export type ProfileBadge = 'verified' | 'owner' | 'manager' | 'recruiter' | 'staff';

export interface ProfessionalProfile extends Profile {
  headline?: string;
  location?: string;
  experience: { role: string; company?: string; from: string; to?: string; description?: string }[];
  portfolio: { title: string; url: string; imageUrl?: string }[];
  hourlyRate?: number;
  badges: ProfileBadge[];
}

export function profileBadges(profile: Pick<ProfessionalProfile, 'verification'> & { roles?: string[]; badges?: ProfileBadge[] }): ProfileBadge[] {
  const badges = new Set(profile.badges ?? []);
  if (profile.verification === 'verified') badges.add('verified');
  for (const role of profile.roles ?? []) {
    const normalized = role.toLowerCase();
    if (['owner', 'manager', 'recruiter', 'staff'].includes(normalized)) badges.add(normalized as ProfileBadge);
  }
  return [...badges];
}

export interface ProfilePrivacy {
  profileId: Id;
  showEmail: boolean;
  showPhone: boolean;
  showRate: boolean;
  showAvailability: boolean;
}
