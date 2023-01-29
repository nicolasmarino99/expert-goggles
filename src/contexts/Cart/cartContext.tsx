import { createContext } from "react";
import { ICart, ICartContext } from "../../@types/cart";

const CartContext = createContext<ICartContext | null>(null);

export default CartContext;
