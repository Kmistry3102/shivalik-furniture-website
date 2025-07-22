export interface BrandSectionData {
  id?: string;
  title?: string;
  tagline?: string;
  heroImage?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  description?: string;
  contactInfo: {
    phone?: string;
    email?: string;
    address?: string;
    website?: string;
    link?: string;
  };
  formTitle?: string;
  formFields: {
    first_name?: string;
    last_name?: string;
    phone?: string;
    email?: string;
    interest?: string;
    message?: string;
  };
  submitButtonText?: string;
} 