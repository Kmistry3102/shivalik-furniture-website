export interface LofyHomeStoreSectionData {
  title: string;
  tagline: string;
  navigationItems: {
    id: number;
    name: string;
    isActive: boolean;
  }[];
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  features: string[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
    website: string;
  };
  formTitle: string;
  formFields: {
    name: string;
    phone: string;
    email: string;
    interest: string;
    message: string;
  };
  submitButtonText: string;
} 