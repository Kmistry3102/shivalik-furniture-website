import { HomeInteriorProjectsSection } from '@/app/types/homeTypes/homeInteriorProjectsTypes';

export const homeInteriorProjectsData: HomeInteriorProjectsSection = {
  title: "Interior's Projects",
  tabs: [
    { label: 'Residence', value: 'residence' },
    { label: 'Retail', value: 'retail' },
    { label: 'Commercial', value: 'commercial' },
  ],
  projects: {
    residence: [
      '/interiors/Residence-img1.png',
      '/interiors/Residence-img2.png',
      '/interiors/Residence-img3.png',
      '/interiors/Residence-img4.png',
    ],
    retail: [
      '/interiors/Retail-img1.png',
      '/interiors/Retail-img2.png',
      '/interiors/Retail-img3.png',
      '/interiors/Retail-img4.png',
    ],
    commercial: [
      '/interiors/Commercial-img1.png',
      '/interiors/Commercial-img2.png',
      '/interiors/Commercial-img3.png',
      '/interiors/Commercial-img4.png',
      '/interiors/Commercial-img5.png',
      '/interiors/Commercial-img6.png',
    ],
  },
}; 