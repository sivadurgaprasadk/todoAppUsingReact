import React from 'react';

export default class CreateEachList extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			isEditing: false
		};
	}

	renderItems(){

		const taskStyle = {
			color : this.props.isCompleted ?'green' : 'red',
			cursor : 'pointer'
		}

		if(this.state.isEditing){
			return(
				<td>
					<form onSubmit={this.handleSave.bind(this)}>
						<input type="text" ref ='editedInput' defaultValue={this.props.todo} />
					</form>

				</td>
			);
		}
		return(
			<td style={taskStyle} onClick={this.handleToggleTask.bind(this,this.props.todo)}>
				{this.props.todo}
			</td>
		);
	}
	handleToggleTask(task){
		this.props.taskStatus(task);
	}

	renderActions(){
		if(this.state.isEditing){
			return(
				<td>
					<button onClick={this.handleSave.bind(this)}>Save</button>
					<button onClick={this.handleCancel.bind(this)}>Cancel</button>
				</td>
			);
		}
		return(
				<td>
					<button onClick={this.handleEdit.bind(this)}>Edit</button>
					<button onClick={this.handleDelete.bind(this)}>Delete</button>
				</td>
		);
	}

	handleSave(event){
		event.preventDefault();
		this.props.saveList(this.props.todo,this.refs.editedInput.value);
		this.state.isEditing = false;
	}
	handleCancel(){
		this.setState({
			isEditing:false
		});
	}

	handleEdit(){
		this.setState({
			isEditing:true
		});
	}
	handleDelete(){
		this.props.deleteList(this.props.todo);
	}

	render(){
		return(
			<tr>
				{this.renderItems()}
				{this.renderActions()}
			</tr>
		);
	}
}