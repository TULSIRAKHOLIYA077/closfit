import TodoItem from "./TodoItem"

const TodoList = ({tasks, deleteTask}) => {
  return (
    <ul className="flex flex-col gap-2 w-60">
      {
        tasks && tasks.map(task =>(
          <TodoItem key={task.id} todoItem={task.name} deleteTask={deleteTask} taskId={task.id}/>
        ))
      }
    </ul>
  )
}

export default TodoList