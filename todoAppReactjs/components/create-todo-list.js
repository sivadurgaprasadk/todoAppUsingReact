import React from 'react';
import CreateTodoListHeader from '../components/create-todo-list-header';
import _ from 'lodash';
import CreateEachList from '../components/create-each-list';

export default class CreateTodoList extends React.Component{
	constructor(props){
		super(props);
	}

	renderTodos(){
		const props = _.omit(this.props,'todoList');
		return this.props.todoList.map((todo,index)=><CreateEachList key={index} {...todo} {...props}/>);
	}

	render(){
		return(
			<table>
				<CreateTodoListHeader/>
				<tbody>
					{this.renderTodos()}
				</tbody>
			</table>
		);
	}
}