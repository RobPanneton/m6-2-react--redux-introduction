import React from "react";

const initialState = {};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const currentItem = state[action.item.id];
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: currentItem ? currentItem.quantity + 1 : 1,
        },
      };

    case "SET_QUANTITY":
      console.log(action.payload);
      console.log(action.payload.newQuantity);

      const id = state[action.payload.item].id;
      const quantity = parseInt(action.payload.newQuantity);
      console.log(quantity);
      return {
        ...state,
        [action.payload.item]: {
          ...state[action.payload.item],
          quantity: parseInt(action.payload.newQuantity),
        },
      };

    case "REMOVE_ITEM":
      const stateCopy = { ...state };
      delete stateCopy[action.item];
      return stateCopy;
    default:
      return state;
  }
};

export const getStoreItemArray = (state) => Object.values(state);

export const calculateTotal = (state) => {
  let sum = 0;
  Object.values(state).forEach((item) => {
    sum += item.price * item.quantity;
  });
  if (!sum) return 0;
  return sum;
};
