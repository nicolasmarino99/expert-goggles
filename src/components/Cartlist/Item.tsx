import { FC } from "react";
import { ICart } from "../../@types/cart";

const Item: FC<ICart> = ({ name, quantity, total_price, unit_price }) => {
  return (
    <>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{unit_price}</p>
      <p>{total_price}</p>
    </>
  );
};

export default Item;
