export interface FactoryFeature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SustainableFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FactorySectionData {
  title: string;
  subtitle: string;
  features: FactoryFeature[];
  image: {
    src: string;
    alt: string;
  };
}

export interface SustainableManufacturingData {
  title: string;
  subtitle: string;
  features: SustainableFeature[];
}
