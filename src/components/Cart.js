import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, addToCart } from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Функція для додавання товару в корзину, перевірка наявності в корзині
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (!existingItem) {
      dispatch(addToCart(item));
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
  {cartItems.map((item, index) => (
    <li key={`${item.id}-${index}`}> {/* Додаємо індекс до ключа */}
      {item.title} - ${item.price}
      <button onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </li>
  ))}
</ul>

      )}
      {cartItems.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      )}
      <button onClick={() => handleAddToCart({ id: 1, title: 'New Item', price: 10 })}>
        Add Item
      </button>
    </div>
  );
};

export default Cart;
