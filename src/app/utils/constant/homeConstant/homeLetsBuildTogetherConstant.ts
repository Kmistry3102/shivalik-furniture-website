import { LetsBuildTogetherSectionData } from '../../../types/homeTypes/homeLetsBuildTogetherTypes';
import { 
  HiOutlineBuildingOffice2, 
  HiOutlineUserGroup, 
  HiOutlineTruck,
  HiOutlineDocumentText,
  HiOutlineAcademicCap
} from 'react-icons/hi2';

export const letsBuildTogetherSectionData: LetsBuildTogetherSectionData = {
  title: "Let's Build Together",
  subtitle: "Partner with India's leading furniture manufacturer for your next project",
  whyChooseTitle: "Why Choose Shivalik Manufacturing?",
  whyChooseItems: [
    {
      icon: HiOutlineBuildingOffice2,
      title: "State-of-the-Art Facility",
      description: "Manufacturing facility with advanced machinery and quality control systems."
    },
    {
      icon: HiOutlineUserGroup,
      title: "Expert Team",
      description: "Skilled craftsmen and engineers with decades of furniture manufacturing experience."
    },
    {
      icon: HiOutlineTruck,
      title: "Pan-India Delivery",
      description: "Reliable logistics network ensuring timely delivery across India and export capabilities."
    }
  ],
  resourcesTitle: "Resources & Documentation",
  resourceItems: [
    {
      icon: HiOutlineDocumentText,
      title: "Manufacturing Capabilities Brochure",
      link: "#"
    },
    {
      icon: HiOutlineAcademicCap,
      title: "Factory Certification Documents",
      link: "#"
    }
  ],
  formTitle: "Get B2B Quote",
  formFields: {
    companyName: "Company Name*",
    contactPerson: "Contact Person*",
    businessEmail: "Business Email*",
    phoneNumber: "Phone Number*",
    projectType: "Project Type*",
    estimatedQuantity: "Estimated Quantity",
    projectTimeline: "Project Timeline",
    projectDetails: "Project Details & Requirements"
  },
  submitButtonText: "Submit B2B Inquiry"
}; 