import React from "react"
import TodoItem from "./ToDoItem"
import todoData from "../json/todoData"

class MainContent extends React.Component{
    constructor() {
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedList = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedList
            }
        })
    }

    render () {
        const  todoList = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <div className="todo-list">
                {todoList}
            </div>
        )
    }
}

export default MainContent