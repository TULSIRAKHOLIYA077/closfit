import { useState } from "react"
import TodoList from "./TodoList"

const TodoApp = () => {
  const [task, setTask]= useState([{id: 1, name: "task1"}, {id: 2, name: "task2"}]);
  const [text, setText]= useState("");

  const addTask = ()=>{
    if(text !== ""){
      setTask([...task, {id: Date.now(), name: text}])
    }
    setText("");
  }

  const deleteTask = (id)=>{
    setTask(task.filter(t => t.id !== id))
  }
  return (
    <div className="p-5 bg-gray-500 h-screen">
      <input type="text" value={text} onChange={(e)=> setText(e.target.value)}  className="border p-2 mb-2 text-white" placeholder="Enter task"/>
      <button className="border ml-2 cursor-pointer bg-green-500 p-2" onClick={addTask}>Add</button>
      <TodoList tasks={task} deleteTask={deleteTask}/>
    </div>
  )
}

export default TodoApp