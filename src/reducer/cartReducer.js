export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const payloadPrice = action.payload.price;
      const price =
        typeof payloadPrice === "string"
          ? parseFloat(payloadPrice.replace(/[^0-9.-]+/g, ""))
          : payloadPrice;

      const normalizedImage =
        action.payload.img ||
        action.payload.image ||
        action.payload.imageUrl ||
        "";
      const itemToAdd = {
        ...action.payload,
        price,
        qty: 1,
        img: normalizedImage,
      };
      const exist = state.find((item) => item.id === action.payload.id);

      if (exist) {
        return state.map((item) =>
          item.id === exist.id ? { ...item, qty: item.qty + 1 } : item,
        );
      } else {
        return [...state, itemToAdd];
      }
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "INCREASE_QTY":
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item,
      );

    case "DECREASE_QTY":
      return state.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item,
      );

    default:
      return state;
  }
};
