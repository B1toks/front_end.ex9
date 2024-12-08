import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Додавання товару в корзину
    addToCart: (state, action) => {
      const item = action.payload;
      // Перевірка, чи є вже такий товар в корзині
      const existingItem = state.items.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // Якщо товар є, збільшуємо кількість
        existingItem.quantity += 1;
      } else {
        // Якщо товару немає, додаємо новий екземпляр з кількістю 1
        state.items.push({ ...item, quantity: 1 });
      }
    },
    // Видалення одного екземпляра товару
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === itemId);
      if (itemIndex >= 0) {
        // Якщо кількість товару більше 1, зменшуємо її
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          // Якщо кількість 1, просто видаляємо товар
          state.items.splice(itemIndex, 1);
        }
      }
    },
    // Очищення корзини
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
  