import styles from "./InputBox.module.css";
import { MdAddReaction } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";


import { useRef} from "react";

export default function InputBox() {
  const {addNewItem}=useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const[todoName,setTodoName]=useState("");
  // const[dueDate,setDueDate]=useState("");

  // const handleNameChange=(event)=>{
  //   setTodoName(event.target.value);

  // }
  // const handleDateChange=(event)=>{
  //   setDueDate(event.target.value);

  // }
  const handleButtonClicked = () => {
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    console.log(`${todoName}  ${dueDate}`);
    addNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };
  return (
    <>
      <div className={styles.inputBox}>
        <div className="row space-row">
          <div className="col-4">
            <input
              type="text"
              ref={todoNameElement}
             // value={todoName}
              placeholder="Enter todo here"
              // onChange={handleNameChange}
            ></input>
          </div>
          <div className="col-4">
            <input
              type="date"
              ref={dueDateElement}
             // value={dueDate}
              // onChange={handleDateChange}
            ></input>
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-success my-button"
              onClick={handleButtonClicked}
            >
              <MdAddReaction /> {/*add button */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}



