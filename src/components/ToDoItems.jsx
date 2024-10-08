import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ toDoItems }) => {
  return (
    <div className={styles.itemcontainer}>
      {toDoItems.map((item) => (
        <ToDoItem date={item.date} todo={item.todo} />
      ))}
    </div>
  );
};

export default ToDoItems;
