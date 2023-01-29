import { useContext } from "react";
import { ClickhandlerType } from "../../../../@types/global";
import { IProduct } from "../../../../@types/products";
import CartContext from "../../../../contexts/Cart/cartContext";
import ProductsContext from "../../../../contexts/Products/productsContext";

interface Reference {
  ref: React.RefObject<HTMLInputElement>,
}

const useAddtoCart = ({ref, name, stock, unit_price, type}: Reference & IProduct) => {
    const cardCtx = useContext(CartContext);
    const productCtx = useContext(ProductsContext);

    const handleClick: ClickhandlerType = () => {
        productCtx?.dispatch({
          type: "TAKE_PRODUCT",
          name: ref.current?.innerHTML,
        });
        const cartItem = cardCtx?.carts.find((product) => product.name === name);
        if (cartItem && stock) {
          const { quantity, unit_price } = cartItem;
            cartItem.quantity = quantity + 1;
            cartItem.total_price = unit_price * (quantity + 1);
            cardCtx?.setCarts([...cardCtx.carts]);
        } else if (stock) {
          cardCtx?.setCarts([
            ...cardCtx.carts,
            {
              name,
              quantity: 1,
              unit_price,
              total_price: unit_price,
              type,
            },
          ]);
        }
      };
  return handleClick
}

export default useAddtoCart