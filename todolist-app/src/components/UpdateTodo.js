import React, { useState } from 'react'
  
function UpdateTodo(props) {
  
 const [itemToupdate,setItemToUpdate] = useState("")

  const HandleUpdate = (e) => {
    e.preventDefault();
    const Updatedata = props.listitems.map((update) => {
      if (update.id=== itemToupdate) {
        return{
          ...update, itemToupdate
        }

        
      }
      return update;
    })
    props.listitems(Updatedata)
    setItemToUpdate("")
  }


  const editEmployee = (Id) => {
    const task = props.listitems.find((item) => item.Id === Id);
    if (task) {
    
      setItemToUpdate(task.Id ,task.priority);
      return (
        <div>
        <input type='text' value={itemToupdate} onChange={(e) => setItemToUpdate(e.target.value)} />
        <button onClick={editEmployee}>save</button> 
        <button onClick={HandleUpdate}>save</button>
        </div>
      )
    } 
  }
  
  return (
    <div>updateTodo</div>
  )
}

export default UpdateTodo