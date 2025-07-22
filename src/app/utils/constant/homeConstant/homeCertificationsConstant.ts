import { CertificationsSectionData } from '@/app/types/homeTypes/homeCertificationsTypes';

export const certificationsSectionData: CertificationsSectionData = {
  title: "Our Certifications",
  certifications: [
    {
      id: "environmental-management",
      title: "Environmental Management",
      subtitle: "ISO 14001:2015 Certification",
      image: {
        src: "/Certified/EnvironmentalManagement-img.png",
        alt: "ISO 14001:2015 Environmental Management Certificate"
      }
    },
    {
      id: "quality-management",
      title: "Quality Management",
      subtitle: "ISO 9001:2015 Certification",
      image: {
        src: "/Certified/QualityManagement-img.png",
        alt: "ISO 9001:2015 Quality Management Certificate"
      }
    },
    {
      id: "health-safety",
      title: "Health & Safety",
      subtitle: "ISO 45001:2018 Certification",
      image: {
        src: "/Certified/Health-Safety-img.png",
        alt: "ISO 45001:2018 Health and Safety Certificate"
      }
    },
    {
      id: "green-certified-factory",
      title: "Green Certified Factory",
      subtitle: "Sustainable Manufacturing",
      image: {
        src: "/Certified/GreenCertifiedFactory-img.png",
        alt: "IGBC Green Certified Factory Certificate"
      }
    }
  ]
};
