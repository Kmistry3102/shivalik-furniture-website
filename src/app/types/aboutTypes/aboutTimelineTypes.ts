export interface TimelineItem {
  year: string;
  label: string;
  subtitle: string;
  description: string;
}

export interface TimelineSectionData {
  title: string;
  items: TimelineItem[];
} 