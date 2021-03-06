import React  from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos,filter) => {
	switch(filter) {
		case 'SHOW_ALL': {
			return todos;	
		}
		case "SHOW_COMPLETED":{
			return todos.filter(todo =>{
				return todo.completed;
			})
		}
		case "SHOW_ACTIVE":{
			return todos.filter(todo =>{
				return !todo.completed;
			})
		}
		default:
      throw new Error(`Unknown filter: ${filter}.`);
	}
};

const mapStateToProps = (state) => {
	return {todos: getVisibleTodos(state.todos, state.setVisibility)};
};

const mapDispatchToProps = (dispatch) => {
	return {onTodoClick:(id)=>{dispatch(toggleTodo(id))}};
};
 
const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);
export default VisibleTodoList;