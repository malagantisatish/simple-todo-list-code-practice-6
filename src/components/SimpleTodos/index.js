import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: uuidv4(),
    title: 'Book the ticket for today evening',
    isChecked: false,
  },
  {
    id: uuidv4(),
    title: 'Rent the movie for tomorrow movie night',
    isChecked: false,
  },
  {
    id: uuidv4(),
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isChecked: false,
  },
  {
    id: uuidv4(),
    title: 'Drop the parcel at Bloomingdale',
    isChecked: false,
  },
  {
    id: uuidv4(),
    title: 'Order fruits on Big Basket',
    isChecked: false,
  },
  {
    id: uuidv4(),
    title: 'Fix the production issue',
  },
  {
    id: uuidv4(),
    title: 'Confirm my slot for Saturday Night',
    isChecked: false,
  },
  {
    id: uuidv4(),
    title: 'Get essentials for Sunday car wash',
    isChecked: false,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todoListItems: initialTodosList,
    inputValue: '',
    editingId: '',
    editTitle: '',
  }

  getTheInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  addToTodoList = () => {
    const {inputValue} = this.state
    const todoItem = {title: inputValue, id: uuidv4(), isChecked: false}
    this.setState(prevState => ({
      todoListItems: [...prevState.todoListItems, todoItem],
    }))
  }

  deleteTodoItem = id => {
    const {todoListItems} = this.state
    const filteredTodoList = todoListItems.filter(
      eachTodoItem => eachTodoItem.id !== id,
    )
    this.setState({todoListItems: filteredTodoList})
  }

  editTheTitleValue = event => {
    console.log(event.target.value)
    this.setState({editTitle: event.target.value})
  }

  editTheTitle = id => {
    const {editingId, todoListItems} = this.state
    if (editingId === id) {
      this.setState({editingId: ''})
    } else {
      const todoItem = todoListItems.filter(each => each.id === id)
      console.log(todoItem[0].title)
      this.setState({editingId: id, editTitle: todoItem[0].title})
    }
  }

  saveTheTitleEdit = id => {
    const {editTitle, todoListItems} = this.state
    const newTodoList = todoListItems.map(each => {
      if (each.id === id) {
        return {id: each.id, title: editTitle}
      }
      return each
    })
    this.setState({todoListItems: newTodoList, editingId: ''})
  }

  changeTheStatus = id => {
    const {todoListItems} = this.state
    const newTodoList = todoListItems.map(each => {
      if (each.id === id) {
        return {id: each.id, title: each.title, isChecked: !each.isChecked}
      }
      return each
    })
    this.setState({todoListItems: newTodoList})
  }

  render() {
    const {todoListItems, inputValue, editingId, editTitle} = this.state
    return (
      <div className="bg-container">
        <div className="todolist-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={this.getTheInputValue}
              className="input-element"
            />
            <button
              type="button"
              className="add-btn"
              onClick={this.addToTodoList}
            >
              Add
            </button>
          </div>

          <ul className="todo-items-list">
            {todoListItems.map(eachTodoItem => (
              <TodoItem
                key={eachTodoItem.id}
                deleteTheTodoItem={this.deleteTodoItem}
                editTheTitle={this.editTheTitle}
                todoItemDetails={eachTodoItem}
                editTheTitleValue={this.editTheTitleValue}
                isEditing={editingId === eachTodoItem.id}
                editTitle={editTitle}
                saveTheTitleEdit={this.saveTheTitleEdit}
                changeTheStatus={this.changeTheStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
