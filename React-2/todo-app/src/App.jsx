import "./App.css";
import AppName from "./Components/AppName";
import InputBox from "./Components/InputBox";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import {useState} from "react";
import {TodoItemsContext} from "./store/todo-items-store";


function App() {

const[todoItems,setTodoItems]=useState([]);

const addNewItem=(itemName,itemDueDate)=>{
  console.log(`${itemName} ${itemDueDate}`);
  const newTodoItems=[...todoItems,{name : itemName, date : itemDueDate}]
  setTodoItems(newTodoItems);
};

const deleteItem=(todoItemName)=>{
  const newTodoItems=todoItems.filter(item=>item.name!==todoItemName);
  setTodoItems(newTodoItems);
  console.log(todoItemName);
} 

return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
    <div>
    <div className="todo-container">
        <AppName />
      </div>
      <div className="container">
        <InputBox/>
        {<WelcomeMessage/>}
        <TodoItems />
      </div>
    </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
