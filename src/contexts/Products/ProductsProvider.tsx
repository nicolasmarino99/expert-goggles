import { FC, useReducer } from "react";
import { Props } from "../../@types/global";
import ProductsContext from "./productsContext";
import { productsReducer } from "./productsReducer";
import { mockData } from "./productsState";

const ProductsProvider: FC<Props> = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, mockData);
  return (
    <ProductsContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
