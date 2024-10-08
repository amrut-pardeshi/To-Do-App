import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import ToDoItems from "./components/ToDoItems";

function App() {
  const todoList = [
    {
      todo: "Buy Milk",
      date: "8/10/24",
    },
    {
      todo: "Go to college",
      date: "8/10/24",
    },
  ];
  return (
    <center id="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItems toDoItems={todoList} />
    </center>
  );
}

export default App;
