import { useState } from "react";

const AddTodoForm = (props) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");
  

  const OnChange = (e) => {
    const value = e.target.value;
    setPriority(value);
  };


  const Add = () => {
    props.addTodo(text, priority);
    setText("");
    setPriority("");
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Enter tasks"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select className="add" value={priority} onChange={OnChange}>
        <option className="red" value="low">
          Low
        </option>

        <option className="yellow" value="medium">
          Medium
        </option>

        <option className="Green" value="high">
          High
        </option>
      </select>
      
      <button onClick={Add}>Add</button>

    
    </div>
  );
};
export default AddTodoForm;
