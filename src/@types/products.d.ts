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
    SHOW_CATEGORIES = "SHOW_PRODUCTS",
    TAKE_PRODUCT = "TAKE_PRODUCT",
    DEL_CATEGORY = "DEL_CATEGORY",
    GET_PRODUCT= "GET_PRODUCT"
}

export type actionProductsReducer = {
type: productTypes;
name: string;
};