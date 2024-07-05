// import styles from "./TodoItem.module.css"

import { useRef } from "react";
import { MdAddBox } from "react-icons/md";

const AddTodo = ({ handleNewItem }) => {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setdueDate] = useState("");
  // let noOfUpdates=useRef(0)
  let todoElementName=useRef()
  let dueDateElement=useRef()

  // const handleNameChange = (e) => {
  //   console.log(e.target.value);
  //   setTodoName(e.target.value);
  //   noOfUpdates.current+=1
  // };
  // const handleDueDate = (e) => {
  //   console.log(e.target.value);
  //   setdueDate(e.target.value);
  //   console.log(`no. of updates ${noOfUpdates.current}`)
  // };
  const handleAddButton = (e) => {
    e.preventDefault();
    const todoName=todoElementName.current.value;
    const dueDate=dueDateElement.current.value
    todoElementName.current.value=''
    dueDateElement.current.value=''
    handleNewItem(todoName, dueDate);
    // setTodoName("");
    // setdueDate("");
  };

  return (
    <>
      <form className="row kg-row" onSubmit={handleAddButton}>
        <div className="col-sm-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Todo here"
            
            // value={todoName}
            ref={todoElementName}
          />
        </div>
        <div className="col-sm-4">
          <input type="date"   ref={dueDateElement} />
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdAddBox />
          </button>
        </div>
      </form>
    </>
  );
};
export default AddTodo;
