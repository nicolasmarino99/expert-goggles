import { createContext } from "react";
import { IProduct, IProductsContextType } from "../../@types/products";
import { mockData } from "./productsState";

const ProductsContext = createContext<IProductsContextType | null>(null);

export default ProductsContext;
