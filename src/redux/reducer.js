const initialState = {
  cardProductObj: {
    cartproductList: [],
    total: 0,
    cartProductIdList: []
  }

};

function reducer(state = initialState, action) {
  let newList = [...state.cardProductObj.cartproductList];
  let newCartProductIdList = [...state.cardProductObj.cartProductIdList];
  let total = state.cardProductObj.total
  switch (action.type) {
    case "ADD_PRODUCT":
      newList.push(action.product)
      newCartProductIdList.push(action.product.id)
      return {
        cardProductObj: {
          cartproductList: [...newList],
          total: state.cardProductObj.total + action.product.price,
          cartProductIdList: [...newCartProductIdList]
        }
      };
    case "UPDATE_PRODUCT":
      newList.forEach(data => {
        if (data.id === action.updateQuantityObj.id && action.updateQuantityObj.increaseQuantity) {
          data.quantity = data.quantity + 1;
          total = total + data.price
        } else if (data.id === action.updateQuantityObj.id && !action.updateQuantityObj.increaseQuantity) {
          data.quantity = data.quantity - 1;
          total = total - data.price
        }
      })
      return {
        cardProductObj: {
          cartproductList: [...newList],
          total: total,
          cartProductIdList: [...newCartProductIdList]
        }
      };
    case "REMOVE_PRODUCT":
      newList = [...state.cardProductObj.cartproductList];
      newList = newList.filter(data => data.id !== action.product.id);
      newCartProductIdList = [...state.cardProductObj.cartProductIdList];
      newCartProductIdList = newCartProductIdList.filter(data => data !== action.product.id)
      let deductAmount = action.product.price * action.product.quantity;
      return {
        cardProductObj: {
          cartproductList: [...newList],
          total: total - deductAmount,
          cartProductIdList: [...newCartProductIdList]
        }
      };

    default:
      return state;
  }
}

export default reducer;
