// import styles from "./TodoItem.module"
import { MdDelete } from "react-icons/md";
const TodoItem=({todoDate,todoName,handleDeleteItem})=>{
    return(
        <>
        <div className="items-container">
            <div className="row  kg-row">
              <div className="col-sm-6">{todoName}</div>
              <div className="col-sm-4">{todoDate}</div>
              <div className="col-sm-2">
                <button type="button" className="btn btn-danger kg-button" onClick={()=>handleDeleteItem(todoName)}>
                  <MdDelete/>
                </button>
              </div>
            </div>
            </div>
        </>
    );
}
export default TodoItem;