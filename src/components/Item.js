import React, { useState } from 'react';

function Item({ name, category }) {
  // State to track if item is in cart
  const [isInCart, setIsInCart] = useState(false);

  // Handler for adding/removing item from cart
  const handleToggleCart = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleToggleCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
