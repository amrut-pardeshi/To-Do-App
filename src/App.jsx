import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const list = [
    {
      todo: "Buy Milk",
      date: "8/10/24",
    },
    {
      todo: "Go to college",
      date: "8/10/24",
    },
  ];

  const [todoList, setTodoList] = useState(list);

  const handleNewItem = (todo, date) => {
    setTodoList([...todoList, { todo, date }]);
  };

  const handleDeleteItem = (todo) => {
    const newToDoList = todoList.filter((item) => item.todo !== todo);
    setTodoList(newToDoList);
  };

  return (
    <center id="todo-container" className="container text-center">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      <ErrorComponent toDoItems={todoList} />
      <ToDoItems toDoItems={todoList} onDeleteItem={handleDeleteItem} />
    </center>
  );
}

export default App;
