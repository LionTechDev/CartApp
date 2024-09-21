export interface Menu {
  menu_id: string
  title: string
  categories: []
  image?: string
  isActive: boolean
}
export interface Store {
 store_id: string
 name: string,
 address: string,
 phone: string,
 email: string,
 country: string,
 city: string,
 state: string,
 image?: string,
 zipcode: string,
 schedule:{},
 store_email: string,
 lang:[],
 currency: [],
}

export interface Category {
  menu_id: string;
	category_id: string;
	title: string;
	image?: string ;
	products?: Product[];
}
export interface Product {
  category_id: string[];
	product_id: string;
	title: string;
	price: string;
	description?: string;
	image?: string;
  allergen?: Allergen[];
}

export type Allergen = 
  | 'Gluten'
  | 'Crustáceos'
  | 'Huevos'
  | 'Pescado'
  | 'Cacahuetes'
  | 'Soja'
  | 'Leche'
  | 'Frutos secos'
  | 'Apio'
  | 'Mostaza'
  | 'Sésamo'
  | 'Sulfitos'
  | 'Lupino'
  | 'Mariscos'
  | 'Frutas cítricas'
  | 'Miel'
  | 'Altramuces'
;
