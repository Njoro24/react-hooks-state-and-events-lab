
import React, { useState } from 'react';
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handler for dark mode toggle
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;