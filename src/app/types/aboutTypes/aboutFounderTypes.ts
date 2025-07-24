export interface SocialMediaLink {
  id: number;
  platform: string;
  icon: string;
  url: string;
}

export interface FounderData {
  title: string;
  name: string;
  position: string;
  image: {
    src: string;
    alt: string;
  };
  socialMedia: SocialMediaLink[];
  description: {
    quote: string;
    experience: string;
    vision: string;
  };
} 