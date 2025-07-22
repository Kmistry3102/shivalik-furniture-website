export interface Certification {
  id: string;
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface CertificationsSectionData {
  title: string;
  certifications: Certification[];
}
    