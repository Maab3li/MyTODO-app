import { useState } from "react"
import App from "./App.css"

function MyTODO() {
    const [newTask,setNewTask] = useState('')
    const[taskList,setTaskList] = useState([])

    function handleInputChange(e) {
      setNewTask(e.target.value)
    }
    function addTask() {
      if(newTask.trim() !== '') {
        setTaskList(t => [...t, newTask])
        setNewTask('')
      }
    }

    function deleteTask(index) {
      const updatedTaskList = taskList.filter((__,i) => i !== index)
      setTaskList(updatedTaskList)
    }

    function moveTaskUp(index) {
      if(index > 0) {
        const updatedTaskList = [...taskList];
      [updatedTaskList[index], updatedTaskList[index - 1]] = [updatedTaskList[index - 1], updatedTaskList[index]]
      setTaskList(updatedTaskList)
      }
    }
    
    function moveTaskDown(index) {
      const updatedTaskList = [...taskList];
      if(index < updatedTaskList.length) {
        [updatedTaskList[index], updatedTaskList[index + 1]] = [updatedTaskList[index +1], updatedTaskList[index]]
        setTaskList(updatedTaskList)
      }
    }

    function resetTasks() {
      setTaskList([])
    }
  
    return (
      <div className="mytodo-list">
        <h1>MyTODO List</h1>
        <div className="input-div">
        <input type="text" maxLength={40} placeholder="Enter a task..." onChange={handleInputChange} value={newTask} />
        <button type="button" className="btn add-btn" onClick={addTask}>Add Task</button>
        <button type="reset" className="btn reset-btn" onClick={resetTasks}>Reset Tasks</button>
        </div>
        <ol>
        {taskList.map((task,index) => 
          <li key={index}>
            <span className="text">{task}</span>
            <button className="btn delete-btn" onClick={() => deleteTask(index)}>X</button>
            <button className="btn moveup-btn" onClick={() => moveTaskUp(index)}>⬆️</button>
            <button className="btn movedown-btn" onClick={() => moveTaskDown(index)}>⬇️</button>
          </li>
          
      )}
      </ol>
      </div>
    )
  }

  export default MyTODO
  
  