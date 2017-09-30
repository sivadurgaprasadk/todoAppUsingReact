import React from 'react';

export default class CreateTodo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			error:null
		};
	}
	renderError(){
		if(this.state.error){
			return(
				<div>{this.state.error}</div>
			);
		}
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text"ref="input"/>
				<button>Create</button>
				{this.renderError()}
			</form>
		);
	}

	handleSubmit(event){
		event.preventDefault();
		const check = this.validateInput(this.refs.input.value);
		if(check){
			this.setState({
				error:check
			});
			return
		}
		this.props.createTodo(this.refs.input.value);
		this.refs.input.value = '';
	}

	validateInput(task){
		if(_.find(this.props.allTodos,(todo)=>todo.todo === task)){
			return 'Task Already Exist';
		}
		if(!task){
			return 'Please Enter a Task';
		}
		else{
			return null;
		}
	}
}