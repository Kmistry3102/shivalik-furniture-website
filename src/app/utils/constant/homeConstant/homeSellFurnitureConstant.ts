import { SellFurnitureSectionData } from '@/app/types/homeTypes/homeSellFurnitureTypes';

export const sellFurnitureSectionData: SellFurnitureSectionData = {
  mainHeading: "We Don't Just Sell Furniture.\nWe Build It.",
  subtitle: "India's Premium Green Furniture Factory - Crafted in India. Carried Worldwide.",
  buttons: [
    {
      id: "explore-manufacturing",
      text: "Explore Manufacturing",
      icon: "factory",
      variant: "primary",
      action: "/manufacturing"
    },
    {
      id: "bulk-inquiry",
      text: "Bulk Inquiry",
      icon: "users",
      variant: "secondary",
      action: "/bulk-inquiry"
    }
  ],
  featureCards: [
    {
      id: "state-of-art-factory",
      title: "State-of-the-Art Factory",
      description: "Advanced manufacturing facility",
      icon: "factory"
    },
    {
      id: "iso-certified",
      title: "ISO Certified",
      description: "Quality & environmental standards",
      icon: "award"
    }
  ]
};
