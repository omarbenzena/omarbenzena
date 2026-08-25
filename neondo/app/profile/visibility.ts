export type ProfileFieldVisibility = 'public' | 'connections' | 'private';

export interface ProfileVisibility {
  country: ProfileFieldVisibility;
  languages: ProfileFieldVisibility;
  portfolio: ProfileFieldVisibility;
  rates: ProfileFieldVisibility;
  modelingDetails: ProfileFieldVisibility;
  contact: ProfileFieldVisibility;
}

export const DEFAULT_PROFILE_VISIBILITY: ProfileVisibility = {
  country: 'public',
  languages: 'public',
  portfolio: 'public',
  rates: 'connections',
  modelingDetails: 'connections',
  contact: 'connections',
};
