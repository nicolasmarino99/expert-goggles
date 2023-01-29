import { createContext } from "react";
import { IProductsContextType } from "../../@types/products";

const ProductsContext = createContext<IProductsContextType | null>(null);

export default ProductsContext;
