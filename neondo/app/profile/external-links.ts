export type ExternalProfileLink = {
  provider: 'website' | 'instagram' | 'portfolio' | 'linkedin' | 'other';
  url: string;
  visibleToRecruiters: boolean;
};

/** GitHub is intentionally not supported as a public NEONDO profile link. */
export const PUBLIC_PROFILE_PROVIDERS = [
  'website', 'instagram', 'portfolio', 'linkedin', 'other'
] as const;

export function filterRecruiterVisibleLinks(links: ExternalProfileLink[]) {
  return links.filter(link => link.visibleToRecruiters);
}
