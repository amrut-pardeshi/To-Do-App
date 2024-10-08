import ToDoItem from "./ToDoItem";

const ToDoItems = ({ toDoItems }) => {
  console.log(toDoItems);
  return (
    <div className="item-container">
      {toDoItems.map((item) => (
        <ToDoItem date={item.date} todo={item.todo} />
      ))}
      ;
    </div>
  );
};

export default ToDoItems;
