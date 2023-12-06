import React from "react";
import StockItem from "./StockItem";

const itemsInStock = [
  {
    name: 'Vinyl LP',
    price: '$30',
    id: '1'
  },
  {
    name: 'T-shirt',
    price: '$15',
    id: '2'
  },
  {
    name: 'Hoodie',
    price: '$45',
    id: '3'
  }
];

function MasterStock(){
  return (
    <React.Fragment>
      <hr/>
      {itemsInStock.map((item, index) =>
        <StockItem name={item.name}
          price={item.price}
          id={item.id}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default MasterStock;