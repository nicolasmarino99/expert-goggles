import { FC, useRef } from "react";
import { Alert, Button } from "react-bootstrap";
import { IProduct } from "../../../@types/products";
import {
  ControlsWrapper,
  ProductWrapper,
} from "../../../containers/containers";
import AlertComponent from "../Alert";
import useAddtoCart from "./hooks/useAddtoCart";
import { useImage } from "./hooks/useImage";

const Product: FC<IProduct> = (props) => {
  const { name, stock } = props;
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = useAddtoCart({ ref, ...props });
  const image = useImage(name);
  return (
    <ProductWrapper>
      <h5 ref={ref}>{name}</h5>
      <img src={image} alt="product image" />
      <ControlsWrapper>
        <span>{stock}</span>
        {stock === 0 && (
          <AlertComponent
            text={`The product ${name} is out of stock`}
            type="danger"
          />
        )}
        <Button onClick={handleClick}>Add to cart</Button>
      </ControlsWrapper>
    </ProductWrapper>
  );
};

export default Product;
