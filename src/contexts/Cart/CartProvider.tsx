import { FC, useState } from "react";
import { ICart } from "../../@types/cart";
import { Props } from "../../@types/global";
import CartContext from "./cartContext";
import { cartState } from "./cartState";

const CartProvider: FC<Props> = ({ children }) => {
  const [carts, setCarts] = useState<ICart[]>(cartState);
  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
