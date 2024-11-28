import { useContext } from "react";
import PrintBox from "./PrintBox";
import { TodoItemsContext } from "../store/todo-items-store";

export default function TodoItems() {
  const {todoItems}=useContext(TodoItemsContext);
  console.log(todoItems);
  return (
    <div className="items-container">
      {todoItems.map((items) => (
        <PrintBox
          key={items.name}
          list={items.name}
          date={items.date}
        />
      ))}
    </div>
  );
}
