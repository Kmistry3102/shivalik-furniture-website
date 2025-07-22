import { IconType } from 'react-icons';

export interface WhyChooseItem {
  icon: IconType;
  title: string;
  description: string;
}

export interface ResourceItem {
  icon: IconType;
  title: string;
  link: string;
}

export interface LetsBuildTogetherSectionData {
  title: string;
  subtitle: string;
  whyChooseTitle: string;
  whyChooseItems: WhyChooseItem[];
  resourcesTitle: string;
  resourceItems: ResourceItem[];
  formTitle: string;
  formFields: {
    companyName: string;
    contactPerson: string;
    businessEmail: string;
    phoneNumber: string;
    projectType: string;
    estimatedQuantity: string;
    projectTimeline: string;
    projectDetails: string;
  };
  submitButtonText: string;
} 