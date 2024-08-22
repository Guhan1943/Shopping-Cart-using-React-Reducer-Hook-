// File: src/ShoppingCart.js
import React, { useReducer } from 'react';
import cartReducer, { initialState } from './cartReducer';

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const updateItemQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
      
      <h3>Add Items to Cart</h3>
      <button onClick={() => addItemToCart({ id: 1, name: 'Apple', price: 0.99 })}>Add Apple</button>
      <button onClick={() => addItemToCart({ id: 2, name: 'Banana', price: 0.79 })}>Add Banana</button>
      <button onClick={() => addItemToCart({ id: 3, name: 'Orange', price: 1.29 })}>Add Orange</button>
    </div>
  );
}

export default ShoppingCart;
