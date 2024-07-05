import { useContext } from "react";
import {  TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

const TodoItems = ({ handleDeleteItem }) => {
  const todoItems= useContext(TodoItemsContext)
  return (
   
      <div className="container ">
        {todoItems.map(item => (
          <TodoItem todoDate={item.date} todoName={item.name} handleDeleteItem={handleDeleteItem} key={item.name}></TodoItem>
        ))}
      </div>
   
  );
};
export default TodoItems;
