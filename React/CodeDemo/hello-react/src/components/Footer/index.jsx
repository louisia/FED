import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

	handleCheckAlll = (event) => {
		this.props.checkAllTodo(event.target.checked)
	}
	handleclearAllDone = () => {
		this.props.clearAllDone()

	}


	render() {
		const { todos } = this.props
		const doneCount = todos.reduce((pre, todo) => {
			if (todo.done) {
				return pre + 1
			} else {
				return pre
			}
		}, 0)
		const totalCount = todos.length

		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.handleCheckAlll} checked={doneCount == totalCount && doneCount != 0 ? true : false} />
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{totalCount}
				</span>
				<button onClick={this.handleclearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
		)
	}
}
