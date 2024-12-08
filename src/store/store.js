import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart.items);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.error('Could not save cart state:', e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error('Could not load cart state:', e);
    return undefined;
  }
};

const preloadedState = {
  cart: {
    items: loadFromLocalStorage() || [],
  },
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
  preloadedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
