import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: true },
      { id: "004", name: "逛街", done: false }
    ]
  }

  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, done: done }
      } else {
        return todo
      }
    })
    this.setState({ todos: newTodos })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id != id
    })
    this.setState({ todos: newTodos })


  }

  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      return { ...todo, done: done }
    })
    this.setState({ todos: newTodos })
  }

  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return todo.done == false
    })
    this.setState({ todos: newTodos })

  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}
