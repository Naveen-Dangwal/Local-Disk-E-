import { useState } from "react";
import Item from "./Item";

export default function ShowItem({ items, handlebuybutton }) {
  const [activeItems, setActiveItems] = useState([]);
  const onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditem={item}
          bought={activeItems.includes(item)}
          handlebuybutton={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
}
