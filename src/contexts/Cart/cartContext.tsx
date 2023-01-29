import { createContext } from "react";
import { ICartContext } from "../../@types/cart";

const CartContext = createContext<ICartContext | null>(null);

export default CartContext;
