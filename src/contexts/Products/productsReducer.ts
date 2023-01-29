import { actionProductsReducer, IProduct } from "../../@types/products";
import { mockData } from "./productsState";

export const productsReducer = (
    state: IProduct[],
    action: actionProductsReducer
  ): IProduct[] => {
    switch (action.type) {
      case "SHOW_PRODUCTS":
        return [...mockData]
      case "FILTER_PRODUCT":
        state.filter
        return [...state.filter(({type}) => action.filter === type)];
      case "TAKE_PRODUCT":
        const i = state.findIndex(({ name }) => name === action.name);
        state[i].stock > 0 && (state[i].stock = state[i].stock - 1);
        return [...state];
      default:
        return state;
    }
  };