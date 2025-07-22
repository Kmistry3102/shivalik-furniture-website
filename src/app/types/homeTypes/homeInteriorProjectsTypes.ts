export interface HomeInteriorProjectTab {
  label: string;
  value: string;
}

export interface HomeInteriorProjectsSection {
  title: string;
  tabs: HomeInteriorProjectTab[];
  projects: Record<string, string[]>; // key is tab value, value is array of image URLs
} 