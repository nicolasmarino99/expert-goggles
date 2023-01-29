export interface IProduct {
name: string;
unit_price: number;
stock: number;
type: string;
}

export interface IProductsContextType {
    products: IProduct[];
    dispatch: (value: any) => void;
};

export enum productTypes {
    FILTER_PRODUCT = "FILTER_PRODUCT",
    TAKE_PRODUCT = "TAKE_PRODUCT",
    SHOW_PRODUCTS = "SHOW_PRODUCTS",
}

export type actionProductsReducer = {
    type: productTypes;
    name: string;
    filter: string;
};