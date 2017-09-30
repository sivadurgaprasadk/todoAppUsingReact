import React from 'react';

export default class CreateTodoListHeader extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<thead>
				<tr>
					<th>Task</th>
					<th>Action</th>
				</tr>
			</thead>
		);
	}
}