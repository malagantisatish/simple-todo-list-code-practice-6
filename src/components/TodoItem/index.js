// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemDetails, deleteTheTodoItem} = props
  const {id, title} = todoItemDetails
  const deleteItem = () => {
    deleteTheTodoItem(id)
  }

  return (
    <li className="todo-details">
      <p className="todo-title">{title}</p>
      <button onClick={deleteItem} className="delete-btn" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
