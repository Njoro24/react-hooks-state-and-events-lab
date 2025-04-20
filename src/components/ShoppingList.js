import React, { useState } from 'react';
import Item from "./Item";

function ShoppingList({ items }) {
  // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handler for category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on selected category
  const filteredItems = items.filter(item => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  // Get unique categories for the dropdown
  const categories = ["All", ...new Set(items.map(item => item.category))];

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map(item => (
          <Item 
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;