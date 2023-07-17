import React from "react";


const TodoItem = ({ todo, deleteTodo }) => {
    const { id, text, priority } = todo;

    const handleDelete = () => {
      deleteTodo(id);
    };

    return (
      <div>
        <span>{text}</span>
        <span>{priority}</span>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  export default TodoItem
   