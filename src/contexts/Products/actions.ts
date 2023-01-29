export const takeProductAction = (productCtx, name) => productCtx?.dispatch({
    type: "TAKE_PRODUCT",
    name,
  });