import { useState } from "react";
import "./App.css";
// import Saloni from "./saloni";
// import TodoItem from "./components/TodoItem"
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  let initiatodoItems = [];

  const [todoItems, setTodoItems] = useState(initiatodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added ${itemName} and date is ${itemDueDate}`);
    // const newTodoItem=[...todoItems,{name:itemName,date:itemDueDate}]

    // setTodoItems((currValue)=>{
    //   const newTodoItem=[...currValue,{name:itemName,date:itemDueDate}]
    //   return newTodoItem
    // })

    setTodoItems((currValue) => 
      [...currValue, { name: itemName, date: itemDueDate }]
    );
  };

  const handleDeleteItem = (itemName) => {
    console.log(`deleted item ${itemName}`);
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
    <TodoItemsContext.Provider value={todoItems}>
      <center>
        
        <h1>TO DO LIST</h1>
        <AddTodo handleNewItem={handleNewItem} />
        { <WelcomeMessage ></WelcomeMessage>}

        <TodoItems
         
          handleDeleteItem={handleDeleteItem}
        ></TodoItems>
      </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
