import React, { useState } from "react";


function DisplayItems(props) {
  const updatetask = (Id) => {
    props.updatetodo(Id);
  };


  const deletetask = (Id) => {
    props.deletetodo(Id);
  };
  return (
    <div>
      <header className="Homeheader">Tasks list</header>
      {props.listItems.map((item) =>
        item.priority === "medium" ? (
          <li className="priorityYellow" key={item.id}>
            {item.text}
            <span className="YellowDot">{"   .  "}</span>

            <span className="mediumButtons">
              <button onClick={(item) => deletetask(item.id)}>delete</button>
              <button onClick={(item) => updatetask(item.id)}>update</button>
            </span>
          </li>
        ) : item.priority === "high" ? (
          <li className="priorityGreen" key={item.id}>
            {item.text}
            <span className="GreenDot"> {"   .  "}</span>

            <span className="largeButtons">
              <button onClick={(item) => deletetask(item.id)}>delete</button>
              <button onClick={(item) => updatetask(item.id)}>update</button>
            </span>
          </li>
        ) : (
          <li className="priorityRed" key={item.id}>
            {item.text}
            <span className="RedDot">{"   .  "}</span>
            <span className="lowButtons">
              <button onClick={(item) => deletetask(item.id)}>delete</button>
              <button onClick={(item) => updatetask(item.id)}>update</button>
            </span>
          </li>
        )
      )}
    </div>
  );
}

export default DisplayItems;
