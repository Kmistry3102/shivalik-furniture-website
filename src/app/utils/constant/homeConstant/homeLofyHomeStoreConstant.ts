import { LofyHomeStoreSectionData } from '@/app/types/homeTypes/homeLofyHomeStoreTypes';

export const lofyHomeStoreSectionData: LofyHomeStoreSectionData = {
  title: "SHIVALIK FURNITURE",
  tagline: "Discover our curated collection of premium furniture brands.",
  navigationItems: [
    { id: 1, name: "LOFY HOME STORE", isActive: true },
    { id: 2, name: "STANLEY LEVEL NEXT", isActive: false },
    { id: 3, name: "STANLEY SOFAS & MORE", isActive: false },
    { id: 4, name: "HAWORTH", isActive: false },
    { id: 5, name: "GODREJ INTERIO", isActive: false }
  ],
  heroImage: "/banner/banner-img2.png",
  heroTitle: "Lofy Home Store",
  heroSubtitle: "360° Virtual Tour",
  description: "Lofy Home Store is Shivalik's own multi-brand furniture and decor destination in Ahmedabad. We offer over 3,000+ curated products from 30+ top-tier brands, providing an immersive retail experience that blends timeless elegance with modern functionality.",
  features: [
    "Over 3,000+ curated products",
    "30+ top-tier brands",
    "Immersive retail experience",
    "Timeless elegance with modern functionality"
  ],
  contactInfo: {
    phone: "+91 9737114441",
    email: "homestore@shivalikgroup.com",
    address: "Ground Floor, Prominence by Sangath IPL, Nr. Vaishnodevi, Zundal",
    website: "Visit Website"
  },
  formTitle: "Get in Touch",
  formFields: {
    name: "Your Name",
    phone: "Phone Number",
    email: "Email Address",
    interest: "Interested In?",
    message: "Your Message"
  },
  submitButtonText: "SEND INQUIRY"
}; 