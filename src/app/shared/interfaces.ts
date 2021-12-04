export interface Category {
  name: string,
  id?: string
}

export interface Product {
  name: string,
  brandName: string,
  price: number,
  id?: string,
  categoryId?: string
}
