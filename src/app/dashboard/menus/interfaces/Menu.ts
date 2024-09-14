// src/interfaces/Menu.ts
export interface Menu {
  id: number;
  name: string;
  isPublished: boolean;
  categories: string[];
  onlineUrl?: string;
}
