import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todo, setToDo] = useState("");
  const [date, setDate] = useState("");

  const handleToDoChange = (e) => {
    setToDo(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const addButtonHandler = (todo, date) => {
    onNewItem(todo, date);
    setToDo("");
    setDate("");
  };

  return (
    <>
      <div className="kg-row row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo Here"
            onChange={handleToDoChange}
            value={todo}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={date} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => addButtonHandler(todo, date)}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddToDo;
