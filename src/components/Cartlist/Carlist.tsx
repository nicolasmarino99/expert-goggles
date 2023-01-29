import { useContext } from "react";
import {
  ListContainer,
  ItemsContainer,
  OrdersWrapper,
} from "../../containers/containers";
import CartContext from "../../contexts/Cart/cartContext";
import { generateJSONBill } from "../../Utils/downloadJSON";
import Item from "./Item";

const CartList = () => {
  const cartCtx = useContext(CartContext);

  return (
    <ListContainer>
      <ItemsContainer>
        {cartCtx?.carts.map((cart, id) => (
          <Item {...cart} key={id} />
        ))}
      </ItemsContainer>
      <OrdersWrapper>
        <button
          onClick={generateJSONBill("total-price.json", cartCtx?.carts, true)}
        >
          total order price
        </button>
        <button onClick={generateJSONBill("bill.json", cartCtx?.carts)}>
          Create order
        </button>
      </OrdersWrapper>
    </ListContainer>
  );
};

export default CartList;
