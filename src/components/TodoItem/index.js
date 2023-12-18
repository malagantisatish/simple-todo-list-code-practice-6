// Write your code here

import './index.css'

const TodoItem = props => {
  const {
    todoItemDetails,
    deleteTheTodoItem,
    isEditing,
    editTheTitle,
    editTheTitleValue,
    editTitle,
    saveTheTitleEdit,
    changeTheStatus,
  } = props
  const {id, title, isChecked} = todoItemDetails
  const text = isChecked ? 'checked' : 'not-checked'
  const inputValue = isEditing ? editTitle : title

  const deleteItem = () => {
    deleteTheTodoItem(id)
  }

  const editButtonClicked = () => {
    editTheTitle(id)
  }

  const editTheTitleText = event => {
    editTheTitleValue(event)
  }

  const saveTheTitle = () => {
    saveTheTitleEdit(id)
  }

  const changeTheCheckBox = () => {
    changeTheStatus(id)
  }

  return (
    <li className="todo-details">
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          className="editng-title-input"
          onChange={editTheTitleText}
        />
      ) : (
        <div className="todo-item-container">
          <input type="checkbox" onChange={changeTheCheckBox} />
          <p className={`todo-title ${text}`}>{title}</p>
        </div>
      )}

      <button onClick={deleteItem} className="delete-btn" type="button">
        Delete
      </button>
      {isEditing ? (
        <button onClick={saveTheTitle} className="delete-btn" type="button">
          Save
        </button>
      ) : (
        <button
          onClick={editButtonClicked}
          className="delete-btn"
          type="button"
        >
          Edit
        </button>
      )}
    </li>
  )
}

export default TodoItem
