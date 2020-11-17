export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const setQuantity = (item, newQuantity) => ({
  type: "SET_QUANTITY",
  payload: {
    item,
    newQuantity,
  },
});
