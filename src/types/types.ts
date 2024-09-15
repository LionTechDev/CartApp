export interface Suggestion {
  titulo: string
  descripcion: string
  precio: number
}

export interface Menu {
  id: number;
  name: string;
  isPublished: boolean;
  categories: string[];
  onlineUrl?: string;
  clientId?: string;
}

export interface categories {
  id?: number;
  name: string;
  isPublished?: boolean;
  products?: product[];
  clientId?: string;
  menuId?: number;
}

export interface product {
  id: number;
  name: string;
  isPublished: boolean;
  clientId?: string;
  categoryId?: number;
  menuId?: number;
}
