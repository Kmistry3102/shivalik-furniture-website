import { FounderData } from '@/app/types/aboutTypes/aboutFounderTypes';

export const founderData: FounderData = {
  title: "Meet Our Founder",
  name: "Mr. Taral Shah",
  position: "Managing Director & Founder",
  image: {
    src: "/taral-shah.png",
    alt: "Mr. Taral Shah - Managing Director of Shivalik Group"
  },
  socialMedia: [
    {
      id: 1,
      platform: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/taralsshah/?hl=en"
    },
    {
      id: 2,
      platform: "Facebook",
      icon: "facebook",
      url: "https://www.facebook.com/taral.shah.77"
    },
    {
      id: 3,
      platform: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/taral-shah-shivalik?originalSubdomain=in"
    },
    {
      id: 4,
      platform: "Twitter",
      icon: "twitter",
      url: "https://x.com/taralsshah"
    },
    {
      id: 5,
      platform: "Website",
      icon: "globe",
      url: "https://shivalikgroup.com/taralshah"
    }
  ],
  description: {
    quote: "My journey in furniture began with a simple belief: that the spaces we inhabit should reflect not just our taste, but our values. Every piece we create at Shivalik is a testament to the marriage of traditional craftsmanship and contemporary design.",
    experience: "With over two decades of experience in luxury furniture and interior design, Mr. Taral Shah has established Shivalik as a beacon of quality and innovation in the industry.",
    vision: "His vision extends beyond creating beautiful furniture – it's about crafting pieces that become integral parts of people's lives, growing more meaningful with each passing year."
  }
}; 