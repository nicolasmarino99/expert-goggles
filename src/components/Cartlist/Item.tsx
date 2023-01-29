import { FC } from "react";
import { ICart } from "../../@types/cart";
import { ItemContainer } from "../../containers/containers";

const Item: FC<ICart> = ({ name, quantity, total_price, unit_price }) => {
  return (
    <div>
      <ItemContainer>
        <p>{name}</p>
        <p>{quantity}</p>
        <p>{unit_price}</p>
        <p>{total_price}</p>
      </ItemContainer>
    </div>
  );
};

export default Item;
