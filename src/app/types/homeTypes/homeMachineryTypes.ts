export interface MachineryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface MachineryFeature {
  id: string;
  title: string;
}

export interface MachinerySectionData {
  title: string;
  subtitle: string;
  images: MachineryImage[];
  features: MachineryFeature[];
}
