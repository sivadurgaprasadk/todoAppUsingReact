import React from 'react';
import _ from 'lodash';
import CreateTodo from '../components/create-todo';
import CreateTodoList from '../components/create-todo-list';

const todos = [];

export default class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			todos:todos
		};
	}

	render(){
		return(
			<div>
				<h1>Todo App</h1>
				<CreateTodo createTodo = {this.createTodo.bind(this)} allTodos = {this.state.todos} />
				<CreateTodoList todoList={this.state.todos} deleteList={this.deleteTodo.bind(this)} saveList={this.saveTodo.bind(this)} taskStatus={this.toggleTask.bind(this)}/>
			</div>
		);
	}

	createTodo(todo){
		this.state.todos.push({
			todo,
			isCompleted:false
		});
		this.setState({
			todos:todos
		});
	}

	deleteTodo(task){
		const foundTodo = _.remove(this.state.todos,(todo)=> todo.todo === task);
		
		this.setState({
			todos
		});
	}

	saveTodo(oldTask, newTask){
		const foundTodo = _.find(this.state.todos,(todo)=> todo.todo === oldTask);
			foundTodo.todo = newTask;
		this.setState({
			todos
		});
	}

	toggleTask(task){
		const foundTodo = _.find(this.state.todos,(todo)=> todo.todo === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({
			todos
		})
	}

	}