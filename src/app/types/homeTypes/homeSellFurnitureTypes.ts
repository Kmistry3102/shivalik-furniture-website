export interface Button {
  id: string;
  text: string;
  icon: string;
  variant: 'primary' | 'secondary';
  action: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SellFurnitureSectionData {
  mainHeading: string;
  subtitle: string;
  buttons: Button[];
  featureCards: FeatureCard[];
}
