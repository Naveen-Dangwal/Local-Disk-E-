import { MdDeleteSweep } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

export default function PrintBox1({list,date}) {
  const {deleteItem}=useContext(TodoItemsContext);

 
  return (
      <div className="row space-row">
      <div className="col-4">{list}</div>
      <div className="col-4">{date}</div>
      <div className="col-4">
        <button type="button" className="btn btn-danger my-button"
        onClick={()=>deleteItem(list)}>
          <MdDeleteSweep />
           {/* Delete buttpn */}
        </button>
      </div>
    </div>
    
  );
}
