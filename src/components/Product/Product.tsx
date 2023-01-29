import { FC, useRef } from "react";
import { IProduct } from "../../@types/products";
import useAddtoCart from "./hooks/useAddtoCart";
import { useImage } from "./hooks/useImage";

const Product: FC<IProduct> = (props) => {
  const { name, stock } = props;
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = useAddtoCart({ ref, ...props });
  const image = useImage(name);
  return (
    <div style={{ width: "14em" }}>
      <h3 ref={ref}>{name}</h3>
      <img src={image} alt="product image" />
      <div>
        <span>{stock}</span>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
