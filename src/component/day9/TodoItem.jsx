
const TodoItem = ({todoItem, deleteTask, taskId}) => {
  return (
    <li className="flex items-center justify-between text-white">
      {todoItem}
      <button className="border py-1 px-2 bg-red-500 cursor-pointer" onClick={()=>deleteTask(taskId)}>Delete</button>
    </li>
  )
}

export default TodoItem