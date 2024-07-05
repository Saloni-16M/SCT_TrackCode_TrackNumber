import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const todoItems=useContext(TodoItemsContext)
  return(todoItems.length===0 &&
  <p>Enjoy Your Day</p>);
};
export default WelcomeMessage;
