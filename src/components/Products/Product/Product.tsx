import { FC, useRef } from "react";
import { IProduct } from "../../../@types/products";
import {
  ControlsWrapper,
  ProductWrapper,
} from "../../../containers/containers";
import useAddtoCart from "./hooks/useAddtoCart";
import { useImage } from "./hooks/useImage";

const Product: FC<IProduct> = (props) => {
  const { name, stock } = props;
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = useAddtoCart({ ref, ...props });
  const image = useImage(name);
  return (
    <ProductWrapper>
      <h3 ref={ref}>{name}</h3>
      <img src={image} alt="product image" />
      <ControlsWrapper>
        <span>{stock}</span>
        <button onClick={handleClick}>Add to cart</button>
      </ControlsWrapper>
    </ProductWrapper>
  );
};

export default Product;
