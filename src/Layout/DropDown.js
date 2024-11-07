import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [selectedItem, setSelectedItem] = useState(null); // State to manage selected item

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Close the dropdown after selection (optional)
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div>Selected Item: {selectedItem || "None"}</div>
        <div>{isOpen ? "▲" : "▼"}</div>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          <div onClick={() => handleItemClick("Option 1")}>Option 1</div>
          <div onClick={() => handleItemClick("Option 2")}>Option 2</div>
          <div onClick={() => handleItemClick("Option 3")}>Option 3</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
