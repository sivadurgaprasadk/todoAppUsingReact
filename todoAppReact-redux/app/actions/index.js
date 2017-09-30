import React from 'react';
import {v4} from 'node-uuid';
let nextTodoId = 1;
export const addingTodo = (text)=>{
	return{
		type:'ADD_TODO',
		text,
		id:v4(),
	};
};
export const toggleTodo = (id)=>{
	return {
		type: 'TOGGLE_TODO',
		id:id
	};
};
export const filterTodo = (filter)=>{
	return {
		type:'SET_VISIBILITY',
		filter:filter
	};
};