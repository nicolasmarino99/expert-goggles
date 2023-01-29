import { actionProductsReducer, IProduct } from "../../@types/products";

export const productsReducer = (
    state: IProduct[],
    action: actionProductsReducer
  ): IProduct[] => {
    switch (action.type) {
      case "GET_PRODUCT":
        return [...state];
      case "TAKE_PRODUCT":
        const i = state.findIndex(({ name }) => name === action.name);
        state[i].stock > 0 && (state[i].stock = state[i].stock - 1);
        return [...state];
      default:
        return state;
    }
  };