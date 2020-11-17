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
        id: {
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
