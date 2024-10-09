function ToDoItem({ todo, date, onDeleteItem }) {
  return (
    <>
      <div className="kg-row row">
        <div className="col-6">{todo}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteItem(todo)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;
