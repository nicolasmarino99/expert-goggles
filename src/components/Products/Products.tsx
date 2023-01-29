import React, { useContext } from "react";
import { ProductsContainer } from "../../containers/containers";
import ProductsContext from "../../contexts/Products/productsContext";
import Product from "./Product/Product";

const Products = () => {
  const productCtx = useContext(ProductsContext);
  return (
    <ProductsContainer>
      {productCtx?.products?.map((products, id) => (
        <Product {...products} key={id} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
