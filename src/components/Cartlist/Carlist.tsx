import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import {
  ListContainer,
  ItemsContainer,
  OrdersWrapper,
} from "../../containers/containers";
import CartContext from "../../contexts/Cart/cartContext";
import { generateJSONBill } from "../../Utils/downloadJSON";
import AlertComponent from "../Products/Alert";
import Item from "./Item";

const CartList = () => {
  const cartCtx = useContext(CartContext);
  const [show, setShow] = useState(false);

  return (
    <ListContainer>
      {show && (
        <AlertComponent text="Downloading your bill..." type="success" />
      )}
      <ItemsContainer>
        {cartCtx?.carts.map((cart, id) => (
          <Item {...cart} key={id} />
        ))}
      </ItemsContainer>
      <OrdersWrapper>
        <Button
          onClick={() => {
            generateJSONBill("total-price.json", cartCtx?.carts, true);
            setShow(true);
            setTimeout(() => {
              setShow(false);
            }, 3000);
          }}
        >
          total order price
        </Button>
        <Button
          onClick={() => {
            generateJSONBill("total-price.json", cartCtx?.carts, true);
            setShow(true);
            setTimeout(() => {
              setShow(false);
            }, 3000);
          }}
        >
          Create order
        </Button>
      </OrdersWrapper>
    </ListContainer>
  );
};

export default CartList;
