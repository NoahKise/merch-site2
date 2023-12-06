import React from "react";
import PropTypes from "prop-types";

function StockItem({ name, price, id }) {
  const handleButtonClick = () => {
    // Define the action when the button is clicked
    console.log(`Button clicked for item ${id}`);
    // You can perform any action you want here
  };

  return (
    <div>
      <p>{name} - {price}</p>
      <button onClick={handleButtonClick}>Add to Cart</button>
      <hr />
    </div>
  );
}

StockItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default StockItem;