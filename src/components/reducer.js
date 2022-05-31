
export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      break;
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem => cartItem.id === action.id)
      );

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.log("boş");
      }
      return {...state, cart: newCart}
      break;
      return { state };
    default:
  }
}

export default reducer;
