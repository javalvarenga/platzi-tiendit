import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart.filter((items) => items.cartId !== payload)],
    });
  };

  const removeAllFromCart = () => {
    setState({
      ...state,
      cart: [],
    });
  }


  const addToBuyer = (payload) => {
    // los datos de buyer deben venir completos
    setState({
      ...state,
      buyer: [payload],
    });

  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    removeAllFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
