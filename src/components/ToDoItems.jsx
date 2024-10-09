import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ toDoItems, onDeleteItem }) => {
  return (
    <div className={styles.itemcontainer}>
      {toDoItems.map((item) => (
        <ToDoItem
          key={item.todo}
          date={item.date}
          todo={item.todo}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
};

export default ToDoItems;
