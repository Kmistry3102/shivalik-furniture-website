export interface ManufacturingFeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ManufacturingSectionData {
  title: string;
  subtitle: string;
  featureCards: ManufacturingFeatureCard[];
}
