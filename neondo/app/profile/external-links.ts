export type ExternalProfileLink = {
  provider: 'website' | 'instagram' | 'portfolio' | 'linkedin' | 'other';
  url: string;
  visibleToRecruiters: boolean;
};

/** GitHub is intentionally not a supported public profile provider. */
export const PUBLIC_PROFILE_PROVIDERS = [
  'website', 'instagram', 'portfolio', 'linkedin', 'other'
] as const;

export function filterRecruiterVisibleLinks(links: ExternalProfileLink[]) {
  return links.filter(link => link.visibleToRecruiters && link.provider !== 'other' || link.provider !== 'github');
}
