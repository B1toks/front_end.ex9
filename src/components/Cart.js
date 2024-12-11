import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, clearCart, addToCart } from '../store/cartSlice';

const Cart = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (!existingItem) {
      addToCart(item);
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
              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={() => clearCart()}>Clear Cart</button>
      )}
      <button onClick={() => handleAddToCart({ id: 1, title: 'New Item', price: 10 })}>
        Add Item
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
