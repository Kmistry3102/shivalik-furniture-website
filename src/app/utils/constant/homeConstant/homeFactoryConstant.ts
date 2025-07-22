import { FactorySectionData, SustainableManufacturingData } from '@/app/types/homeTypes/homeFactoryTypes';

export const factorySectionData: FactorySectionData = {
  title: "Shivalik   Factory",
  subtitle: "India's Premium Green Furniture Factory.",
  features: [
    {
      id: "precision",
      title: "Precision-engineered.",
      description: "Every piece crafted with meticulous attention to detail and engineering excellence."
    },
    {
      id: "sustainable",
      title: "Sustainably built.",
      description: "Committed to eco-friendly practices and responsible manufacturing processes."
    },
    {
      id: "trusted",
      title: "Trusted by architects, builders, and global brands.",
      description: "Partnering with industry leaders to deliver exceptional quality and design."
    }
  ],
  image: {
    src: "/factory-img.png",
    alt: "Shivalik Factory - India's Premium Green Furniture Factory"
  }
};

export const sustainableManufacturingData: SustainableManufacturingData = {
  title: "Sustainable Manufacturing",
  subtitle: "Committed to environmental responsibility and sustainable practices.",
  features: [
    {
      id: "eco-friendly-materials",
      title: "Eco-Friendly Materials",
      description: "Sustainable materials and eco-friendly finishes for minimal environmental impact.",
      icon: "leaf"
    },
    {
      id: "clean-energy",
      title: "Clean Energy",
      description: "Solar-powered operations with renewable energy sources.",
      icon: "factory"
    },
    {
      id: "zero-waste-goal",
      title: "Zero Waste Goal",
      description: "Comprehensive recycling programs and waste reduction strategies.",
      icon: "tree"
    }
  ]
};
