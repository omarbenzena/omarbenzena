export type ModelingCategory = 'fashion' | 'commercial' | 'editorial' | 'runway' | 'fitness' | 'beauty' | 'parts' | 'promotional' | 'event';

export interface ModelingProfile {
  profileId: string;
  categories: ModelingCategory[];
  portfolioUrls: string[];
  experienceYears?: number;
  agencyName?: string;
  selfRepresented: boolean;
  bookingRate?: number;
  publicMeasurements: boolean;
  heightCm?: number;
  sizes?: Record<string, string>;
}

export function canPublishModelingDetails(profile: ModelingProfile): boolean {
  return profile.publicMeasurements && profile.categories.length > 0;
}
