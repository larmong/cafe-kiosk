export interface ITypeCategories {
  id: string;
  name: string;
}
export interface ITypeCoupons {
  id: string;
  type: string;
  name: string;
  price: number;
}
export interface ITypeProducts {
  categoryId: string;
  name: string;
  price: number;
  option?: ITypeProductOption[] | undefined;
}
export interface ITypeProductOption {
  name: string;
  price: number;
}
